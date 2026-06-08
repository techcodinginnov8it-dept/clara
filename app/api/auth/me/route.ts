import { NextResponse } from 'next/server'
import { getCurrentUser } from '@/lib/auth'
import prisma from '@/lib/prisma'

export async function GET() {
    try {
        const user = await getCurrentUser()

        if (!user) {
            return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })
        }

        return NextResponse.json({
            name: user.name || 'User',
            email: user.email,
            address: user.address || '',
            profilePicture: user.profilePicture,
            plan: user.plan,
            tokenCost: Number(user.tokenCost.toString())
        })
    } catch (error) {
        console.error('Auth me error:', error)
        return NextResponse.json({ error: 'Internal error' }, { status: 500 })
    }
}

export async function PATCH(request: Request) {
    try {
        const user = await getCurrentUser()

        if (!user) {
            return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })
        }

        const { name, address, profilePicture } = await request.json()

        const updatedUser = await prisma.user.update({
            where: { id: user.id },
            data: {
                name: typeof name === 'string' ? name.trim() : user.name,
                address: typeof address === 'string' ? address.trim() : user.address,
                profilePicture: typeof profilePicture === 'string'
                    ? (profilePicture.trim() || null)
                    : user.profilePicture,
            }
        })

        return NextResponse.json({
            success: true,
            user: {
                name: updatedUser.name || 'User',
                email: updatedUser.email,
                address: updatedUser.address || '',
                profilePicture: updatedUser.profilePicture,
                plan: updatedUser.plan,
                tokenCost: Number(updatedUser.tokenCost.toString())
            }
        })
    } catch (error) {
        console.error('Auth me patch error:', error)
        return NextResponse.json({ error: 'Internal error' }, { status: 500 })
    }
}
