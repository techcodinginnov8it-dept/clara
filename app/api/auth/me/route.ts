import { NextResponse } from 'next/server'
import { getCurrentUser } from '@/lib/auth'

export async function GET() {
    try {
        const user = await getCurrentUser()

        if (!user) {
            return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })
        }

        return NextResponse.json({
            name: user.name || 'User',
            email: user.email
        })
    } catch (error) {
        console.error('Auth me error:', error)
        return NextResponse.json({ error: 'Internal error' }, { status: 500 })
    }
}
