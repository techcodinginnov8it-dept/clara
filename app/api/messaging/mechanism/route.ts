import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { getCurrentUser } from '@/lib/auth'

export async function GET() {
    try {
        const user = await getCurrentUser()
        if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

        const data = await prisma.uniqueMechanism.findUnique({
            where: { userId: user.id }
        })

        return NextResponse.json({
            answers: data?.answers ? JSON.parse(data.answers) : [],
            report: data?.generatedReport || null
        })
    } catch (error) {
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
    }
}

export async function POST(request: Request) {
    try {
        const { answers, report } = await request.json()
        const user = await getCurrentUser()
        if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

        const updated = await prisma.uniqueMechanism.upsert({
            where: { userId: user.id },
            update: {
                answers: JSON.stringify(answers),
                generatedReport: report || undefined
            },
            create: {
                userId: user.id,
                answers: JSON.stringify(answers),
                generatedReport: report || null
            }
        })

        return NextResponse.json({ success: true, data: updated })
    } catch (error) {
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
    }
}
