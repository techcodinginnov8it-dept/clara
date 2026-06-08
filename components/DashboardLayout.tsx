'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { LayoutDashboard, MessageSquare, TrendingUp, Settings, LogOut, BookOpen, Palette } from 'lucide-react'
import { ThemeToggle } from '@/components/ThemeToggle'

type UserHeaderState = {
    name: string
    plan: 'FREE' | 'PRO'
    profilePicture: string | null
}

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname()
    const [user, setUser] = useState<UserHeaderState>({
        name: '',
        plan: 'FREE',
        profilePicture: null,
    })

    useEffect(() => {
        fetch('/api/auth/me')
            .then(res => res.json())
            .then(data => {
                setUser({
                    name: data.name || '',
                    plan: data.plan === 'PRO' ? 'PRO' : 'FREE',
                    profilePicture: data.profilePicture || null,
                })
            })
            .catch(() => {})
    }, [])

    const initials = user.name
        ? user.name.split(' ').map((namePart: string) => namePart[0]).join('').toUpperCase().slice(0, 2)
        : '?'
    const planLabel = user.plan === 'PRO' ? 'Pro Account' : 'Free Account'

    return (
        <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--background)' }}>
            <aside style={{
                width: '260px',
                borderRight: '1px solid var(--border)',
                padding: '2rem 1.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '2.5rem',
                background: 'var(--glass-bg)',
                backdropFilter: 'blur(10px)'
            }}>
                <div style={{ marginBottom: '1rem' }}>
                    <Image
                        src="/freedom-logo.png"
                        alt="Freedom Builderz Logo"
                        width={220}
                        height={43}
                        style={{ objectFit: 'contain', width: '100%', maxWidth: '220px', height: 'auto' }}
                    />
                </div>

                <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: 1 }}>
                    <SidebarItem icon={<LayoutDashboard size={20} />} label="Dashboard" href="/dashboard" active={pathname === '/dashboard'} />
                    <SidebarItem icon={<MessageSquare size={20} />} label="Messaging Assistant" href="/dashboard/messaging" active={pathname.startsWith('/dashboard/messaging')} />
                    <SidebarItem icon={<Palette size={20} />} label="Branding Hub" href="/dashboard/branding" active={pathname.startsWith('/dashboard/branding')} />
                    <SidebarItem icon={<BookOpen size={20} />} label="Course Architect" href="/dashboard/courses" active={pathname.startsWith('/dashboard/courses')} />
                    <SidebarItem icon={<TrendingUp size={20} />} label="Performance" href="/dashboard/performance" active={pathname.startsWith('/dashboard/performance')} />
                    <SidebarItem icon={<Settings size={20} />} label="Settings" href="/dashboard/settings" active={pathname.startsWith('/dashboard/settings')} />
                </nav>

                <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1.5rem' }}>
                    <SidebarItem icon={<LogOut size={20} />} label="Sign Out" href="/login" />
                </div>
            </aside>

            <main style={{ flex: 1, padding: '2.5rem', overflowY: 'auto' }}>
                <header style={{ marginBottom: '2.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                        <h1 style={{ fontSize: '1.875rem' }}>Clara Portal</h1>
                        <p style={{ color: 'var(--muted)', marginTop: '0.25rem' }}>
                            {user.name ? `Welcome back, ${user.name}.` : 'Welcome back.'}
                        </p>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <ThemeToggle />

                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: 'var(--glass-bg)', padding: '0.5rem 1rem', borderRadius: '40px', border: '1px solid var(--glass-border)' }}>
                            <div style={{ fontWeight: '600', fontSize: '0.875rem' }}>{user.name || 'Loading...'}</div>
                            <div style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>{planLabel}</div>
                        </div>

                        {user.profilePicture ? (
                            <img
                                src={user.profilePicture}
                                alt={user.name ? `${user.name} avatar` : 'User avatar'}
                                style={{
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '50%',
                                    objectFit: 'cover',
                                    border: '1px solid var(--glass-border)'
                                }}
                            />
                        ) : (
                            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'linear-gradient(135deg, #f97316, #c2410c)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>{initials}</div>
                        )}
                    </div>
                </header>

                {children}
            </main>
        </div>
    )
}

function SidebarItem({ icon, label, active, href }: { icon: React.ReactNode, label: string, active?: boolean, href: string }) {
    return (
        <Link href={href} className={active ? 'sidebar-item active' : 'sidebar-item'} style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            padding: '0.75rem 1rem',
            borderRadius: 'var(--radius)',
            color: 'var(--muted)',
            textDecoration: 'none',
            fontSize: '0.875rem',
            fontWeight: '600'
        }}>
            {icon}
            <span>{label}</span>
        </Link>
    )
}
