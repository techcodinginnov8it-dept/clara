'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import DashboardLayout from '@/components/DashboardLayout'
import { BookOpen, Target, Sparkles, ArrowRight, Download, Lock, Loader2 } from 'lucide-react'

export default function MessagingPage() {
    const [step6Complete, setStep6Complete] = useState(false)
    const [loadingBonus, setLoadingBonus] = useState<string | null>(null)

    useEffect(() => {
        fetch('/api/messaging/summary')
            .then(res => res.json())
            .then(data => {
                if (data.report) setStep6Complete(true)
            })
            .catch(console.error)
    }, [])

    const downloadBonus = async (type: string) => {
        if (!step6Complete || loadingBonus) return
        
        setLoadingBonus(type)
        try {
            const res = await fetch('/api/generate/bonus', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ type })
            })
            
            if (!res.ok) throw new Error('Generation failed')
            
            const data = await res.json()
            const filename = `${type.replace('-', '_')}_bonus_vault.doc`
            
            const file = new Blob(['\ufeff', data.content], { type: 'application/msword' })
            const element = document.createElement("a")
            element.href = URL.createObjectURL(file)
            element.download = filename
            document.body.appendChild(element)
            element.click()
            document.body.removeChild(element)
        } catch (error) {
            console.error('Error downloading bonus:', error)
            alert('Failed to generate your bonus document. Please try again.')
        } finally {
            setLoadingBonus(null)
        }
    }
    return (
        <DashboardLayout>
            <div style={{ marginBottom: '2.5rem' }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Money Making Messaging Assistant</h2>
                <p style={{ color: 'var(--muted)' }}>Phase 1 of your messaging framework starts here.</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '1.5rem', marginBottom: '4rem' }}>
                <StepCard
                    step="Step 1"
                    title="Crafting Your Origin Story"
                    description="The foundation of your brand. Share your journey and let AI craft a narrative that connects with your audience."
                    icon={<BookOpen size={24} />}
                    href="/dashboard/messaging/origin-story"
                    active
                />
                <StepCard
                    step="Step 2"
                    title="Market Gap & Competitor Analysis"
                    description="Identify where your competitors are failing and where your biggest opportunity lies."
                    icon={<Target size={24} />}
                    href="/dashboard/messaging/market-gap"
                    active
                />
                <StepCard
                    step="Step 3"
                    title="Tribal Identity & Deep Dive Analysis"
                    description="Dive deep into the psyche of your audience to craft messaging that resonates on a visceral level."
                    icon={<Sparkles size={24} />}
                    href="/dashboard/messaging/tribe"
                    active
                />
                <StepCard
                    step="Step 4"
                    title="Unique Mechanism Blueprint"
                    description="Identify the Market Lie and define your proprietary methodology for market dominance."
                    icon={<Sparkles size={24} />}
                    href="/dashboard/messaging/mechanism"
                    active
                />
                <StepCard
                    step="Step 5"
                    title="USP 'I Help' Statement"
                    description="Craft a powerful, client-centered value proposition that resonates instantly."
                    icon={<Sparkles size={24} />}
                    href="/dashboard/messaging/usp"
                    active
                />
                <StepCard
                    step="Step 6"
                    title="Bringing It All Together"
                    description="The Grand Synthesis. Transform your insights into an operational roadmap and 90-day action plan."
                    icon={<Sparkles size={24} />}
                    href="/dashboard/messaging/summary"
                    active
                />
            </div>

            {/* Bonus Vault Section */}
            <div style={{ borderTop: '1px solid var(--border)', paddingTop: '4rem', marginBottom: '4rem' }}>
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <span style={{ color: 'var(--primary)', fontWeight: '700', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Member Exclusives</span>
                    <h2 style={{ fontSize: '2.5rem', marginTop: '0.5rem' }}>Your Bonus Vault</h2>
                    <p style={{ color: 'var(--muted)', marginTop: '0.75rem', maxWidth: '600px', margin: '0.75rem auto 0' }}>High-value supplemental assets to accelerate your brand authority and market dominance.</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                    <BonusCard
                        title="100 Viral Hook Templates"
                        description="Stop the scroll with these battle-tested hooks for social media dominance."
                        onDownload={() => downloadBonus('hooks')}
                        locked={!step6Complete}
                        loading={loadingBonus === 'hooks'}
                    />
                    <BonusCard
                        title="30-Day Content Planner"
                        description="A full month of high-engagement content mapped to your new messaging."
                        onDownload={() => downloadBonus('planner')}
                        locked={!step6Complete}
                        loading={loadingBonus === 'planner'}
                    />
                    <BonusCard
                        title="Power-Bio Architect"
                        description="Transform your social profiles into lead-generation machines in minutes."
                        onDownload={() => downloadBonus('bio')}
                        locked={!step6Complete}
                        loading={loadingBonus === 'bio'}
                    />
                    <BonusCard
                        title="Email Subject Line Power-File"
                        description="The ultimate swipe file for high-open rates and immediate clicks."
                        onDownload={() => downloadBonus('emails')}
                        locked={!step6Complete}
                        loading={loadingBonus === 'emails'}
                    />
                </div>
            </div>
        </DashboardLayout>
    )
}

function BonusCard({ title, description, onDownload, locked, loading }: { title: string, description: string, onDownload: () => void, locked: boolean, loading: boolean }) {
    return (
        <div className="glass-card" style={{ 
            padding: '2rem', 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '1rem',
            opacity: locked ? 0.6 : 1,
            pointerEvents: locked ? 'none' : 'auto'
        }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                {locked ? (
                    <span style={{ fontSize: '0.65rem', padding: '0.15rem 0.5rem', borderRadius: '4px', background: 'rgba(255, 255, 255, 0.1)', color: 'var(--muted)', fontWeight: '700', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                        <Lock size={10} /> Locked
                    </span>
                ) : (
                    <span style={{ fontSize: '0.65rem', padding: '0.15rem 0.5rem', borderRadius: '4px', background: 'rgba(34, 197, 94, 0.2)', color: '#4ade80', fontWeight: '700', textTransform: 'uppercase' }}>Free Bonus</span>
                )}
                <Download size={14} color={locked ? 'var(--muted)' : 'var(--primary)'} />
            </div>
            <h4 style={{ fontSize: '1.25rem' }}>{title}</h4>
            <p style={{ color: 'var(--muted)', fontSize: '0.875rem', lineHeight: '1.5', flex: 1 }}>{description}</p>
            <button 
                onClick={onDownload} 
                disabled={locked || loading}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    background: 'var(--glass-bg)',
                    border: '1px solid var(--glass-border)',
                    color: locked ? 'var(--muted)' : 'var(--foreground)',
                    padding: '0.75rem 1rem',
                    borderRadius: 'var(--radius)',
                    cursor: locked || loading ? 'not-allowed' : 'pointer',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    transition: 'all 0.2s ease'
                }}
            >
                {loading ? (
                    <><Loader2 size={16} className="spin" /> Generating AI Bonus...</>
                ) : locked ? (
                    <>Complete Step 6 to Unlock</>
                ) : (
                    <>Generate & Download (.doc)</>
                )}
            </button>
        </div>
    )
}

function StepCard({ step, title, description, icon, href, active, status }: any) {
    return (
        <div className="glass-card flex-col-card" style={{
            padding: '2rem',
            borderLeft: active ? '4px solid var(--primary)' : '1px solid var(--border)',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            height: '100%'
        }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: '700', color: active ? 'var(--primary)' : 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{step}</span>
                {status && <span style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>{status}</span>}
            </div>
            <h3 style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                {icon} {title}
            </h3>
            <p style={{ color: 'var(--muted)', fontSize: '0.875rem', lineHeight: '1.6', marginBottom: '1.5rem', flexGrow: 1 }}>{description}</p>

            {active && (
                <div style={{ marginTop: 'auto' }}>
                    <Link href={href} className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', fontSize: '0.875rem' }}>
                        Get Started <ArrowRight size={16} />
                    </Link>
                </div>
            )}
        </div>
    )
}
