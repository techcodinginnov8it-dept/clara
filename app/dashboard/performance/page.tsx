'use client'

import React, { useState, useEffect } from 'react'
import DashboardLayout from '@/components/DashboardLayout'
import { Activity, Zap, Clock, BarChart3, Loader2 } from 'lucide-react'

interface TokenUsageData {
    totals: {
        promptTokens: number
        completionTokens: number
        totalTokens: number
    }
    byEndpoint: Record<string, { totalTokens: number; count: number }>
    recent: Array<{
        endpoint: string
        totalTokens: number
        model: string
        createdAt: string
    }>
    totalRequests: number
}

const ENDPOINT_LABELS: Record<string, string> = {
    'courses/generate': 'Course Generation',
    'courses/chat': 'Course Chat',
    'courses/generate-thumbnail': 'Course Thumbnails',
    'branding/generate-document': 'Brand Board Generation',
    'branding/chat': 'Brand Strategy Chat',
    'refine-copy': 'AI Copy Editing',
    'generate/bonus-hooks': 'Bonus Vault: Viral Hooks',
    'generate/bonus-planner': 'Bonus Vault: Content Planner',
    'generate/bonus-bio': 'Bonus Vault: Power-Bio',
    'generate/bonus-emails': 'Bonus Vault: Email Subjects',
}

export default function PerformancePage() {
    const [usage, setUsage] = useState<TokenUsageData | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('/api/settings/token-usage')
            .then(r => r.json())
            .then(setUsage)
            .catch(console.error)
            .finally(() => setLoading(false))
    }, [])

    const formatNumber = (n: number) => n.toLocaleString()

    const maxEndpointTokens = usage
        ? Math.max(...Object.values(usage.byEndpoint).map(e => e.totalTokens), 1)
        : 1

    return (
        <DashboardLayout>
            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                <div style={{ marginBottom: '2.5rem' }}>
                    <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Performance</h1>
                    <p style={{ color: 'var(--muted)' }}>Monitor your AI token consumption and system usage.</p>
                </div>

                {/* Token Usage Section */}
                <div className="glass-card" style={{ padding: '2rem', marginBottom: '2rem' }}>
                    <h3 style={{ fontSize: '1.125rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Zap size={20} color="var(--primary)" /> Token Usage
                    </h3>

                    {loading ? (
                        <div style={{ display: 'flex', justifyContent: 'center', padding: '3rem' }}>
                            <Loader2 size={32} className="spin" color="var(--primary)" />
                        </div>
                    ) : !usage || usage.totalRequests === 0 ? (
                        <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--muted)' }}>
                            <Zap size={40} style={{ opacity: 0.3, marginBottom: '1rem' }} />
                            <p>No token usage recorded yet.</p>
                            <p style={{ fontSize: '0.875rem', marginTop: '0.5rem' }}>Start using Clara's AI features to see your consumption here.</p>
                        </div>
                    ) : (
                        <>
                            {/* Summary Cards */}
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginBottom: '2rem' }}>
                                <div style={{
                                    background: 'rgba(249, 115, 22, 0.08)',
                                    border: '1px solid rgba(249, 115, 22, 0.15)',
                                    borderRadius: 'var(--radius)',
                                    padding: '1.25rem',
                                    textAlign: 'center'
                                }}>
                                    <p style={{ fontSize: '0.75rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>Total Tokens</p>
                                    <p style={{ fontSize: '1.75rem', fontWeight: '700', color: 'var(--primary)' }}>{formatNumber(usage.totals.totalTokens)}</p>
                                </div>
                                <div style={{
                                    background: 'var(--glass-bg)',
                                    border: '1px solid var(--glass-border)',
                                    borderRadius: 'var(--radius)',
                                    padding: '1.25rem',
                                    textAlign: 'center'
                                }}>
                                    <p style={{ fontSize: '0.75rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>Prompt Tokens</p>
                                    <p style={{ fontSize: '1.75rem', fontWeight: '700' }}>{formatNumber(usage.totals.promptTokens)}</p>
                                </div>
                                <div style={{
                                    background: 'var(--glass-bg)',
                                    border: '1px solid var(--glass-border)',
                                    borderRadius: 'var(--radius)',
                                    padding: '1.25rem',
                                    textAlign: 'center'
                                }}>
                                    <p style={{ fontSize: '0.75rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>Completion Tokens</p>
                                    <p style={{ fontSize: '1.75rem', fontWeight: '700' }}>{formatNumber(usage.totals.completionTokens)}</p>
                                </div>
                            </div>

                            {/* Per-Endpoint Breakdown */}
                            <div style={{ marginBottom: '2rem' }}>
                                <h4 style={{ fontSize: '0.875rem', color: 'var(--muted)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <BarChart3 size={16} /> Usage by Feature
                                </h4>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                    {Object.entries(usage.byEndpoint).map(([endpoint, data]) => (
                                        <div key={endpoint}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.375rem' }}>
                                                <span style={{ fontSize: '0.875rem', fontWeight: '500' }}>{ENDPOINT_LABELS[endpoint] || endpoint}</span>
                                                <span style={{ fontSize: '0.875rem', color: 'var(--muted)' }}>
                                                    {formatNumber(data.totalTokens)} tokens · {data.count} {data.count === 1 ? 'request' : 'requests'}
                                                </span>
                                            </div>
                                            <div style={{
                                                width: '100%',
                                                height: '6px',
                                                background: 'rgba(255, 255, 255, 0.06)',
                                                borderRadius: '3px',
                                                overflow: 'hidden'
                                            }}>
                                                <div style={{
                                                    width: `${(data.totalTokens / maxEndpointTokens) * 100}%`,
                                                    height: '100%',
                                                    background: 'linear-gradient(90deg, #f97316 0%, #fb923c 100%)',
                                                    borderRadius: '3px',
                                                    transition: 'width 0.5s ease'
                                                }} />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Recent Activity */}
                            {usage.recent.length > 0 && (
                                <div>
                                    <h4 style={{ fontSize: '0.875rem', color: 'var(--muted)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <Clock size={16} /> Recent Activity
                                    </h4>
                                    <div style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '0.5rem'
                                    }}>
                                        {usage.recent.map((item, i) => (
                                            <div key={i} style={{
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                alignItems: 'center',
                                                padding: '0.75rem 1rem',
                                                background: 'var(--glass-bg)',
                                                borderRadius: '8px',
                                                border: '1px solid var(--glass-border)'
                                            }}>
                                                <div>
                                                    <span style={{ fontSize: '0.875rem', fontWeight: '500' }}>{ENDPOINT_LABELS[item.endpoint] || item.endpoint}</span>
                                                    <span style={{ fontSize: '0.75rem', color: 'var(--muted)', marginLeft: '0.75rem' }}>{item.model}</span>
                                                </div>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                                    <span style={{ fontSize: '0.875rem', color: 'var(--primary)', fontWeight: '600' }}>{formatNumber(item.totalTokens)} tokens</span>
                                                    <span style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>
                                                        {new Date(item.createdAt).toLocaleDateString()}
                                                    </span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </>
                    )}
                </div>

                {/* Total Requests */}
                {usage && usage.totalRequests > 0 && (
                    <div style={{ textAlign: 'center', color: 'var(--muted)', fontSize: '0.875rem', padding: '1rem' }}>
                        {usage.totalRequests} total AI requests made
                    </div>
                )}
            </div>

            <style jsx>{`.spin { animation: spin 1s linear infinite; } @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
        </DashboardLayout>
    )
}
