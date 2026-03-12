import { cookies } from 'next/headers'
import prisma from '@/lib/prisma'

export async function getCurrentUser() {
    const cookieStore = await cookies()
    const session = cookieStore.get('user_session')

    if (!session || !session.value) return null

    const user = await prisma.user.findUnique({
        where: { email: session.value }
    })

    return user
}
