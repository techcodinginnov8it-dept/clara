import { PrismaClient } from '../prisma/generated-client-v2'

const prismaClientSingleton = () => {
    return new PrismaClient()
}

declare global {
    var prisma: undefined | ReturnType<typeof prismaClientSingleton>
}

let prisma = globalThis.prisma ?? prismaClientSingleton()

if (process.env.NODE_ENV !== 'production') {
    // If the brandBoard model is missing (stale client), force a new instance
    if (!(prisma as any).brandBoard) {
        prisma = prismaClientSingleton()
    }
    globalThis.prisma = prisma
}

export default prisma
