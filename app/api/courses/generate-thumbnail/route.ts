import { NextResponse } from 'next/server'
import OpenAI from 'openai'
import crypto from 'crypto'

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
})

const DEFAULT_THUMBNAIL_URL = 'https://placehold.co/1024x1024/ea580c/ffffff?text=Course+Thumbnail'

function slugify(value: string) {
    return value
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '')
        .slice(0, 60) || 'course-thumbnail'
}

function getSupabaseStorageConfig() {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL
    const serviceRoleKey =
        process.env.SUPABASE_SERVICE_ROLE_KEY ||
        process.env.SUPABASE_ANON_KEY ||
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    const bucketName =
        process.env.SUPABASE_COURSE_THUMBNAIL_BUCKET ||
        process.env.NEXT_PUBLIC_SUPABASE_COURSE_THUMBNAIL_BUCKET ||
        'course-thumbnails'

    if (!supabaseUrl || !serviceRoleKey) {
        throw new Error('Supabase storage is not configured for course thumbnails.')
    }

    return { supabaseUrl, serviceRoleKey, bucketName }
}

async function ensureBucketExists(supabaseUrl: string, serviceRoleKey: string, bucketName: string) {
    const response = await fetch(`${supabaseUrl}/storage/v1/bucket`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${serviceRoleKey}`,
            apikey: serviceRoleKey,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: bucketName,
            name: bucketName,
            public: true
        })
    })

    if (response.ok || response.status === 409) {
        return
    }

    const errorText = await response.text()
    throw new Error(`Unable to create Supabase storage bucket: ${errorText}`)
}

async function uploadThumbnailToSupabase(buffer: Buffer, title: string) {
    const { supabaseUrl, serviceRoleKey, bucketName } = getSupabaseStorageConfig()
    await ensureBucketExists(supabaseUrl, serviceRoleKey, bucketName)

    const fileHash = crypto
        .createHash('md5')
        .update(`${title}-${Date.now()}-${crypto.randomUUID()}`)
        .digest('hex')
        .slice(0, 16)
    const objectPath = `courses/${slugify(title)}-${fileHash}.png`
    const encodedPath = objectPath.split('/').map(encodeURIComponent).join('/')

    const uploadResponse = await fetch(`${supabaseUrl}/storage/v1/object/${bucketName}/${encodedPath}`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${serviceRoleKey}`,
            apikey: serviceRoleKey,
            'Content-Type': 'image/png',
            'x-upsert': 'true'
        },
        body: new Uint8Array(buffer)
    })

    if (!uploadResponse.ok) {
        const errorText = await uploadResponse.text()
        throw new Error(`Unable to upload thumbnail to Supabase storage: ${errorText}`)
    }

    return `${supabaseUrl}/storage/v1/object/public/${bucketName}/${encodedPath}`
}

export async function POST(request: Request) {
    try {
        const { title, description } = await request.json()
        const safeTitle = typeof title === 'string' && title.trim() ? title.trim() : 'Untitled Course'
        const safeDescription = typeof description === 'string' ? description.trim() : ''

        // Generate the image as base64 so we can upload a durable PNG instead of saving an expiring OpenAI URL.
        const response = await openai.images.generate({
            model: 'gpt-image-1',
            prompt: `Create a professional, modern course thumbnail for an online educational course titled "${safeTitle}". ${safeDescription}. The image should be clean, professional, and suitable for an online learning platform. Use a modern, minimalist design with vibrant colors. Include abstract educational elements like books, lightbulbs, or growth symbols. No text in the image.`,
            n: 1,
            size: '1024x1024',
            quality: 'high'
        })

        const imageBase64 = response.data?.[0]?.b64_json

        if (!imageBase64) {
            throw new Error('Failed to receive image data from OpenAI.')
        }

        const buffer = Buffer.from(imageBase64, 'base64')
        const thumbnailUrl = await uploadThumbnailToSupabase(buffer, safeTitle)

        return NextResponse.json({
            thumbnailUrl
        })
    } catch (error: any) {
        console.error('Thumbnail generation error:', error)

        return NextResponse.json({
            thumbnailUrl: DEFAULT_THUMBNAIL_URL,
            error: error.message
        })
    }
}
