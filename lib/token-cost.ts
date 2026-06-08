import { Prisma } from '@prisma/client'
import prisma from '@/lib/prisma'

type SupportedModel = 'gpt-4o' | 'gpt-4o-mini'

const MODEL_PRICING: Record<SupportedModel, { inputPerMillion: number; outputPerMillion: number }> = {
    'gpt-4o': {
        inputPerMillion: 2.5,
        outputPerMillion: 10,
    },
    'gpt-4o-mini': {
        inputPerMillion: 0.15,
        outputPerMillion: 0.6,
    },
}

function normalizeModel(model: string): SupportedModel | null {
    if (model.startsWith('gpt-4o-mini')) {
        return 'gpt-4o-mini'
    }

    if (model.startsWith('gpt-4o')) {
        return 'gpt-4o'
    }

    return null
}

export function calculateTokenCost(model: string, promptTokens: number, completionTokens: number) {
    const normalizedModel = normalizeModel(model)

    if (!normalizedModel) {
        return new Prisma.Decimal(0)
    }

    const pricing = MODEL_PRICING[normalizedModel]
    const inputCost = (promptTokens / 1_000_000) * pricing.inputPerMillion
    const outputCost = (completionTokens / 1_000_000) * pricing.outputPerMillion

    return new Prisma.Decimal((inputCost + outputCost).toFixed(6))
}

export async function logTokenUsage(params: {
    userId: string
    endpoint: string
    promptTokens: number
    completionTokens: number
    totalTokens: number
    model: string
}) {
    const tokenCost = calculateTokenCost(params.model, params.promptTokens, params.completionTokens)

    await prisma.$transaction([
        prisma.tokenUsage.create({
            data: {
                userId: params.userId,
                endpoint: params.endpoint,
                promptTokens: params.promptTokens,
                completionTokens: params.completionTokens,
                totalTokens: params.totalTokens,
                model: params.model,
            },
        }),
        prisma.user.update({
            where: { id: params.userId },
            data: {
                tokenCost: {
                    increment: tokenCost,
                },
            },
        }),
    ])

    return tokenCost
}
