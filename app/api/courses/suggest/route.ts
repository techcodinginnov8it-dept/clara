import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { getCurrentUser } from '@/lib/auth'

export async function GET() {
    try {
        const user = await getCurrentUser()
        if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

        // Fetch relevant data to tailor suggestions
        const summary = await prisma.messagingSummary.findUnique({ where: { userId: user.id } })
        const usp = await prisma.uSPStatement.findUnique({ where: { userId: user.id } })
        const mechanism = await prisma.uniqueMechanism.findUnique({ where: { userId: user.id } })

        // Extract specific values
        let mechanismName = mechanism ? JSON.parse(mechanism.answers)[12] : (summary ? JSON.parse(summary.answers)[5] : "Expert System")
        let transformation = usp ? JSON.parse(usp.answers)[3] : "Mastery"

        // Clean up titles (remove quotes if any)
        mechanismName = mechanismName.replace(/["']/g, "").trim()
        transformation = transformation.replace(/["']/g, "").trim()

        // Fallback for placeholder strings
        if (mechanismName.toLowerCase().includes("surprise me") || mechanismName.length > 40) {
            mechanismName = "Elite Strategy"
        }
        if (transformation.toLowerCase().includes("surprise me") || transformation.length > 50) {
            transformation = "Results Mastery"
        }

        const cleanMech = mechanismName
        const cleanTrans = transformation

        const suggestions = [
            {
                id: 's1',
                title: `${cleanMech} Accelerator`,
                description: `A fast-track program designed to implement your ${cleanMech} system in 30 days.`,
                pricingTier: '$497 - $997 (Mid-Ticket)',
                suggestedModules: 4,
            },
            {
                id: 's2',
                title: `${cleanMech} Mastery`,
                description: `The comprehensive blueprint for achieving ${cleanTrans} using your proprietary methodology.`,
                pricingTier: '$1,997+ (High-Ticket)',
                suggestedModules: 8,
            },
            {
                id: 's3',
                title: `Foundations of ${cleanMech}`,
                description: `A rock-solid entry point for those new to your world and ready for ${cleanTrans}.`,
                pricingTier: '$97 - $197 (Low-Ticket)',
                suggestedModules: 3,
            },
            {
                id: 's4',
                title: `Elite ${cleanMech} Inner Circle`,
                description: `The premium implementation program for those who want the highest level of ${cleanTrans}.`,
                pricingTier: '$5,000+ (Premium)',
                suggestedModules: 12,
            }
        ]

        return NextResponse.json({ suggestions })
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
}
