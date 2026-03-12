import { NextResponse } from 'next/server'
import { getCurrentUser } from '@/lib/auth'
import prisma from '@/lib/prisma'

export async function GET() {
    try {
        const user = await getCurrentUser()
        if (!user) {
            return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })
        }

        // Get all token usage for this user
        const usage = await prisma.tokenUsage.findMany({
            where: { userId: user.id },
            orderBy: { createdAt: 'desc' }
        })

        // Aggregate totals
        const totals = usage.reduce(
            (acc: { promptTokens: number; completionTokens: number; totalTokens: number }, item: any) => ({
                promptTokens: acc.promptTokens + item.promptTokens,
                completionTokens: acc.completionTokens + item.completionTokens,
                totalTokens: acc.totalTokens + item.totalTokens,
            }),
            { promptTokens: 0, completionTokens: 0, totalTokens: 0 }
        )

        // Group by endpoint
        const byEndpoint: Record<string, { totalTokens: number; count: number }> = {}
        usage.forEach((item: any) => {
            if (!byEndpoint[item.endpoint]) {
                byEndpoint[item.endpoint] = { totalTokens: 0, count: 0 }
            }
            byEndpoint[item.endpoint].totalTokens += item.totalTokens
            byEndpoint[item.endpoint].count += 1
        })

        // Recent usage (last 10)
        const recent = usage.slice(0, 10).map((item: any) => ({
            endpoint: item.endpoint,
            totalTokens: item.totalTokens,
            model: item.model,
            createdAt: item.createdAt,
        }))

        return NextResponse.json({
            totals,
            byEndpoint,
            recent,
            totalRequests: usage.length,
        })
    } catch (error) {
        console.error('Token usage error:', error)
        return NextResponse.json({ error: 'Internal error' }, { status: 500 })
    }
}
