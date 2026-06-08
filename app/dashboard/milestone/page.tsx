'use client'

import React from 'react'
import DashboardLayout from '@/components/DashboardLayout'
import { CheckCircle2, Clock3, Milestone, Shield, Sparkles, Target, TrendingUp } from 'lucide-react'

const implemented = [
    'Custom authentication flow with login, signup, profile settings, plan display, and avatar support.',
    'Messaging Assistant with 6 guided modules, saved progress, editable outputs, downloadable documents, and bonus asset generation.',
    'Section-aware Edit with AI flow that preserves document structure and now stores structured sections for cheaper, safer revisions.',
    'Branding Hub that turns messaging outputs into a brand board through guided AI conversation and generated visual guidelines.',
    'Course Architect that turns messaging into a course outline, lesson structure, quizzes, and AI-generated thumbnails.',
    'Course thumbnails now save to a durable public image path instead of depending on expiring OpenAI asset links.',
    'Performance dashboard that tracks token usage by feature and shows recent AI activity.',
]

const gaps = [
    'Authentication is still lightweight and needs production-grade session security, password reset, and sign-out hardening.',
    'Billing is only represented as a plan label today. There is no real subscription, entitlement, or upgrade checkout flow yet.',
    'Profile image uploads still save directly with profile data, and media handling should be normalized into managed storage.',
    'There is no admin console for support, user management, product analytics, or monitoring failed generations.',
    'Generated outputs are useful, but they still need stronger QA, structured templates, and consistency rules across every module.',
]

const milestones = [
    {
        title: 'Milestone 1: Product Foundation',
        status: 'In Progress',
        icon: <Shield size={18} color="#f97316" />,
        items: [
            'Harden auth, sessions, password reset, and sign-out.',
            'Move uploads to durable storage and normalize profile/media handling.',
            'Add migrations/process checks so database and code stay aligned across environments.',
            'Improve AI route resilience with validation, fallback states, and failure logging.',
        ]
    },
    {
        title: 'Milestone 2: Monetization Readiness',
        status: 'Next',
        icon: <TrendingUp size={18} color="#2563eb" />,
        items: [
            'Implement real Free vs Pro entitlements.',
            'Connect upgrade flows to billing and subscription webhooks.',
            'Gate premium features, usage ceilings, and bonus assets by plan.',
            'Track revenue metrics alongside token cost to understand gross margin.',
        ]
    },
    {
        title: 'Milestone 3: Product Quality and Retention',
        status: 'Next',
        icon: <Sparkles size={18} color="#7c3aed" />,
        items: [
            'Standardize output templates across messaging, branding, and courses.',
            'Add version history, duplicate, restore, and export improvements.',
            'Improve onboarding so a first-time user can complete their first asset without confusion.',
            'Add better progress checkpoints, completion states, and follow-up recommendations.',
        ]
    },
    {
        title: 'Milestone 4: Operator and Team Layer',
        status: 'Future',
        icon: <Target size={18} color="#0f766e" />,
        items: [
            'Create an internal admin panel for user support, token audits, and generation failures.',
            'Add organization/team support if Clara becomes a client-delivery product.',
            'Introduce expert review workflows, approval states, and collaboration on generated assets.',
            'Build a reliable analytics layer for feature usage, retention, and conversion.',
        ]
    }
]

export default function MilestonePage() {
    return (
        <DashboardLayout>
            <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <section className="glass-card" style={{ padding: '2.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                        <Milestone size={28} color="var(--primary)" />
                        <div>
                            <h1 style={{ fontSize: '2rem' }}>Miles Stone</h1>
                            <p style={{ color: 'var(--muted)', marginTop: '0.35rem' }}>
                                A practical product audit of Clara and the milestones that turn it into a strong, scalable offer.
                            </p>
                        </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginTop: '2rem' }}>
                        <SummaryCard label="Core Modules Live" value="4" helper="Messaging, Branding, Courses, Performance" />
                        <SummaryCard label="Messaging Steps" value="6" helper="Saved progress, downloads, AI editing" />
                        <SummaryCard label="Priority" value="Foundation" helper="Security, billing, reliability, QA" />
                        <SummaryCard label="Goal" value="Productize" helper="Turn working features into a durable business" />
                    </div>
                </section>

                <section className="glass-card" style={{ padding: '2rem' }}>
                    <SectionHeader icon={<CheckCircle2 size={20} color="#22c55e" />} title="Already Implemented" subtitle="What Clara already does well today." />
                    <div style={{ display: 'grid', gap: '0.85rem' }}>
                        {implemented.map((item) => (
                            <MilestoneRow key={item} iconColor="#22c55e" text={item} />
                        ))}
                    </div>
                </section>

                <section className="glass-card" style={{ padding: '2rem' }}>
                    <SectionHeader icon={<Clock3 size={20} color="#f59e0b" />} title="Current Gaps" subtitle="What still needs to be productized before Clara is truly market-ready." />
                    <div style={{ display: 'grid', gap: '0.85rem' }}>
                        {gaps.map((item) => (
                            <MilestoneRow key={item} iconColor="#f59e0b" text={item} />
                        ))}
                    </div>
                </section>

                <section className="glass-card" style={{ padding: '2rem' }}>
                    <SectionHeader icon={<Target size={20} color="var(--primary)" />} title="Product Milestones" subtitle="A staged roadmap based on the current codebase and feature maturity." />
                    <div style={{ display: 'grid', gap: '1rem' }}>
                        {milestones.map((milestone) => (
                            <div key={milestone.title} style={{ border: '1px solid var(--glass-border)', borderRadius: '16px', padding: '1.5rem', background: 'var(--glass-bg)' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', marginBottom: '1rem' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                        <div style={{ width: '42px', height: '42px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(249, 115, 22, 0.08)', border: '1px solid var(--glass-border)' }}>
                                            {milestone.icon}
                                        </div>
                                        <div>
                                            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>{milestone.title}</h3>
                                            <p style={{ color: 'var(--muted)', fontSize: '0.85rem' }}>{milestone.status}</p>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ display: 'grid', gap: '0.75rem' }}>
                                    {milestone.items.map((item) => (
                                        <MilestoneRow key={item} iconColor="var(--primary)" text={item} />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </DashboardLayout>
    )
}

function SummaryCard({ label, value, helper }: { label: string, value: string, helper: string }) {
    return (
        <div style={{ padding: '1.25rem', borderRadius: '16px', border: '1px solid var(--glass-border)', background: 'var(--glass-bg)' }}>
            <p style={{ fontSize: '0.75rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>{label}</p>
            <p style={{ fontSize: '1.65rem', fontWeight: '800', marginBottom: '0.45rem' }}>{value}</p>
            <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: '1.5' }}>{helper}</p>
        </div>
    )
}

function SectionHeader({ icon, title, subtitle }: { icon: React.ReactNode, title: string, subtitle: string }) {
    return (
        <div style={{ marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.35rem' }}>
                {icon}
                <h2 style={{ fontSize: '1.3rem' }}>{title}</h2>
            </div>
            <p style={{ color: 'var(--muted)', fontSize: '0.925rem' }}>{subtitle}</p>
        </div>
    )
}

function MilestoneRow({ text, iconColor }: { text: string, iconColor: string }) {
    return (
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', padding: '0.9rem 1rem', borderRadius: '12px', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--glass-border)' }}>
            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: iconColor, marginTop: '0.45rem', flexShrink: 0 }} />
            <p style={{ lineHeight: '1.6', color: 'var(--foreground)' }}>{text}</p>
        </div>
    )
}
