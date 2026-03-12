'use client'

import React from 'react'
import Link from 'next/link'
import DashboardLayout from '@/components/DashboardLayout'
import { ArrowRight, MessageSquare, Zap, Cpu, Sparkles } from 'lucide-react'

export default function DashboardPage() {
    return (
        <DashboardLayout>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                <ModuleCard
                    title="Money Making Messaging Assistant"
                    description="Craft high-converting origin stories and messaging documents using Clara's AI engine."
                    icon={<MessageSquare size={24} color="#f97316" />}
                    href="/dashboard/messaging"
                    status="Active"
                />
                <ModuleCard
                    title="Automated Course Architect"
                    description="Instantly transform your messaging framework into a comprehensive, high-value online course."
                    icon={<Zap size={24} color="#8b5cf6" />}
                    href="/dashboard/courses"
                    status="Active"
                />
                <ModuleCard
                    title="Brand Identity Hub"
                    description="Design your dream brand. AI-powered brand guidelines, color palettes, and brandboard builder."
                    icon={<Sparkles size={24} color="#ec4899" />}
                    href="/dashboard/branding"
                    status="Active"
                />
                <ModuleCard
                    title="Campaign Optimizer"
                    description="Analyze and refine your marketing campaigns for maximum ROI and impact."
                    icon={<Zap size={24} color="#f59e0b" />}
                    href="#"
                    status="Coming Soon"
                    disabled
                />
                <ModuleCard
                    title="Artisan Brain Engine"
                    description="Train Clara on your specific business knowledge and voice."
                    icon={<Cpu size={24} color="#10b981" />}
                    href="#"
                    status="Coming Soon"
                    disabled
                />
            </div>
        </DashboardLayout>
    )
}

function ModuleCard({ title, description, icon, href, status, disabled }: any) {
    return (
        <div className="glass-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem', border: disabled ? '1px solid var(--border)' : '1px solid var(--glass-border)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div style={{ padding: '0.75rem', borderRadius: '12px', background: 'var(--glass-bg)', border: '1px solid var(--border)' }}>{icon}</div>
                <span style={{
                    fontSize: '0.75rem',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '100px',
                    background: status === 'Active' ? 'rgba(34, 197, 94, 0.15)' : 'var(--glass-bg)',
                    color: status === 'Active' ? '#16a34a' : 'var(--muted)',
                    border: status === 'Active' ? '1px solid rgba(34, 197, 94, 0.3)' : '1px solid var(--border)',
                    fontWeight: '700'
                }}>
                    {status}
                </span>
            </div>
            <div>
                <h3 style={{ marginBottom: '0.5rem' }}>{title}</h3>
                <p style={{ color: 'var(--muted)', fontSize: '0.875rem', lineHeight: '1.5' }}>{description}</p>
            </div>
            <Link href={href} style={{
                marginTop: 'auto',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: disabled ? 'var(--muted)' : 'var(--accent)',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '0.875rem',
                cursor: disabled ? 'default' : 'pointer'
            }}>
                Explore Module <ArrowRight size={16} />
            </Link>
        </div>
    )
}
