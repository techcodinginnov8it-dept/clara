import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { getCurrentUser } from '@/lib/auth'
import { deserializeSections, serializeSections } from '@/lib/messaging-sections'

export async function GET() {
    try {
        const user = await getCurrentUser()
        if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

        const data = await prisma.marketGap.findUnique({
            where: { userId: user.id }
        })

        return NextResponse.json({
            answers: data?.answers ? JSON.parse(data.answers) : [],
            report: data?.generatedReport || null,
            sections: deserializeSections(data?.generatedReportSections, data?.generatedReport)
        })
    } catch (error) {
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
    }
}

export async function POST(request: Request) {
    try {
        const { answers, report, sections } = await request.json()
        const user = await getCurrentUser()
        if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

        const serializedSections = serializeSections(sections) || serializeSections(deserializeSections(null, report))

        const updated = await prisma.marketGap.upsert({
            where: { userId: user.id },
            update: {
                answers: JSON.stringify(answers),
                generatedReport: report || undefined,
                generatedReportSections: serializedSections || undefined
            },
            create: {
                userId: user.id,
                answers: JSON.stringify(answers),
                generatedReport: report || null,
                generatedReportSections: serializedSections
            }
        })

        return NextResponse.json({ success: true, data: updated })
    } catch (error) {
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
    }
}
