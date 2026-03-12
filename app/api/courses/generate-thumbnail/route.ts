import { NextResponse } from 'next/server'
import OpenAI from 'openai'
import fs from 'fs/promises'
import path from 'path'
import crypto from 'crypto'

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
})

export async function POST(request: Request) {
    try {
        const { title, description } = await request.json()

        // Generate thumbnail using DALL-E 3
        const response = await openai.images.generate({
            model: "dall-e-3",
            prompt: `Create a professional, modern course thumbnail for an online educational course titled "${title}". ${description}. The image should be clean, professional, and suitable for an online learning platform. Use a modern, minimalist design with vibrant colors. Include abstract educational elements like books, lightbulbs, or growth symbols. No text in the image.`,
            n: 1,
            size: "1024x1024",
            quality: "hd",
            style: "vivid"
        })

        const openaiUrl = response.data?.[0]?.url

        if (!openaiUrl) {
            throw new Error("Failed to receive image URL from OpenAI")
        }

        // Fetch image payload and buffer it
        const imageResponse = await fetch(openaiUrl)
        if (!imageResponse.ok) {
            throw new Error("Could not download generated image")
        }
        const arrayBuffer = await imageResponse.arrayBuffer()
        const buffer = Buffer.from(arrayBuffer)

        // Ensure target directory exists
        const thumbnailsDir = path.join(process.cwd(), 'public', 'thumbnails')
        await fs.mkdir(thumbnailsDir, { recursive: true })

        // Generate unique local hash based filename
        const hash = crypto.createHash('md5').update(title + Date.now().toString()).digest('hex')
        const fileName = `${hash}.png`
        const localPath = path.join(thumbnailsDir, fileName)

        // Save binary file locally
        await fs.writeFile(localPath, buffer)

        // Return the clean local server path that avoids 2hr API expirations
        return NextResponse.json({
            thumbnailUrl: `/thumbnails/${fileName}`
        })

    } catch (error: any) {
        console.error('Thumbnail generation error:', error)

        // Return a fallback placeholder if generation fails
        return NextResponse.json({
            thumbnailUrl: 'https://placehold.co/1024x1024/ea580c/ffffff?text=Course+Thumbnail',
            error: error.message
        })
    }
}
