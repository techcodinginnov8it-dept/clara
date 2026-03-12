import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { getCurrentUser } from '@/lib/auth'

export async function GET() {
    try {
        const user = await getCurrentUser()
        if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

        const boards = await (prisma as any).brandBoard.findMany({
            where: { userId: user.id },
            orderBy: { createdAt: 'desc' }
        })

        return NextResponse.json({ boards })
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
}

export async function POST(req: Request) {
    try {
        const user = await getCurrentUser()
        if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

        const body = await req.json()
        const { feel, persona, demographics, colors, typography, visualContent } = body

        console.log("Checking Prisma models:", Object.keys(prisma || {}))

        if (!(prisma as any).brandBoard) {
            console.error("CRITICAL: brandBoard model missing from Prisma client")
            throw new Error("Database client is out of sync. Please restart the server.")
        }

        const board = await (prisma as any).brandBoard.create({
            data: {
                userId: user.id,
                feel: feel || 'Elite & Luxurious',
                persona: persona || 'Artisan',
                demographics: demographics || 'General',
                colors: typeof colors === 'string' ? colors : JSON.stringify(colors || []),
                typography: typography || 'Minimalist Sans',
                visualContent: typeof visualContent === 'string' ? visualContent : JSON.stringify(visualContent || {})
            }
        })

        return NextResponse.json(board)
    } catch (error: any) {
        console.error("Prisma BrandBoard Error:", error)
        return NextResponse.json({
            error: 'Internal Server Error',
            details: error.message
        }, { status: 500 })
    }
}
