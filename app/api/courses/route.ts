import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { getCurrentUser } from '@/lib/auth'

export async function GET() {
    try {
        const user = await getCurrentUser()
        if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

        const courses = await prisma.generatedCourse.findMany({
            where: { userId: user.id },
            orderBy: { createdAt: 'desc' }
        })

        return NextResponse.json({ courses })
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
}

export async function POST(req: Request) {
    try {
        const user = await getCurrentUser()
        if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

        const body = await req.json()
        console.log('Received course data:', { ...body, content: 'truncated' })

        const { title, description, pricingTier, tone, moduleCount, content, thumbnailUrl } = body

        console.log('Creating course with thumbnailUrl:', thumbnailUrl)

        const course = await prisma.generatedCourse.create({
            data: {
                userId: user.id,
                title: title || "Untitled Course",
                description: description || "",
                pricingTier: pricingTier || "Custom",
                tone: tone || "Professional",
                moduleCount: parseInt(String(moduleCount)) || 6,
                content: typeof content === 'string' ? content : JSON.stringify(content),
                thumbnailUrl: thumbnailUrl || null
            }
        })

        console.log('Course created successfully:', course.id)
        return NextResponse.json(course)
    } catch (error: any) {
        console.error("Prisma Create Error:", error)
        console.error("Error name:", error.name)
        console.error("Error message:", error.message)
        return NextResponse.json({
            error: 'Internal Server Error',
            details: error.message,
            name: error.name,
            stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
        }, { status: 500 })
    }
}
