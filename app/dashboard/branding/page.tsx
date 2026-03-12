'use client'

import React, { useState, useEffect, useRef } from 'react'
import DashboardLayout from '@/components/DashboardLayout'
import { Send, Sparkles, Download, Loader2, CheckCircle2, MessageSquare, Palette, Type } from 'lucide-react'

interface Message {
    role: 'user' | 'assistant'
    content: string
}

export default function BrandingPage() {
    const [view, setView] = useState<'start' | 'chat' | 'board'>('start')
    const [messages, setMessages] = useState<Message[]>([])
    const [input, setInput] = useState('')
    const [loading, setLoading] = useState(false)
    const [messagingData, setMessagingData] = useState<any>(null)
    const [canGenerate, setCanGenerate] = useState(false)
    const [brandingData, setBrandingData] = useState<any>(null)
    const [generating, setGenerating] = useState(false)
    const messagesEndRef = useRef<HTMLDivElement>(null)

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }

    useEffect(() => {
        scrollToBottom()
    }, [messages])

    const fetchMessagingData = async () => {
        try {
            const [originRes, gapRes, tribeRes, mechRes, uspRes, summaryRes] = await Promise.all([
                fetch('/api/messaging/origin-story'),
                fetch('/api/messaging/market-gap'),
                fetch('/api/messaging/tribe'),
                fetch('/api/messaging/mechanism'),
                fetch('/api/messaging/usp'),
                fetch('/api/messaging/summary')
            ])

            const [origin, gap, tribe, mech, usp, summary] = await Promise.all([
                originRes.json(),
                gapRes.json(),
                tribeRes.json(),
                mechRes.json(),
                uspRes.json(),
                summaryRes.json()
            ])

            return {
                originStory: origin.story || '',
                marketGap: gap.report || '',
                tribe: tribe.report || '',
                mechanism: mech.report || '',
                usp: usp.report || '',
                summary: summary.report || ''
            }
        } catch (error) {
            console.error('Error fetching messaging data:', error)
            return null
        }
    }

    const startConversation = async () => {
        setLoading(true)
        const data = await fetchMessagingData()
        setMessagingData(data)

        const greeting: Message = {
            role: 'assistant',
            content: `Hi! I'm Clara, your brand strategist. I've reviewed your messaging framework and I'm excited to help you create a comprehensive brand identity guide.\n\nLet's start with the essence of your brand. If your brand were a person at a party, how would they behave? What would make them memorable?`
        }

        setMessages([greeting])
        setView('chat')
        setLoading(false)
    }

    const handleSend = async () => {
        if (!input.trim() || loading) return

        const userMessage = input.trim()
        setInput('')

        const newMessages = [...messages, { role: 'user' as const, content: userMessage }]
        setMessages(newMessages)
        setLoading(true)

        try {
            const response = await fetch('/api/branding/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    messages: newMessages.slice(0, -1),
                    userMessage,
                    messagingData
                })
            })

            const data = await response.json()

            setMessages([...newMessages, { role: 'assistant', content: data.message }])

            if (data.canGenerate) {
                setCanGenerate(true)
            }
        } catch (error) {
            setMessages([...newMessages, {
                role: 'assistant',
                content: 'Sorry, I encountered an error. Please try again.'
            }])
        } finally {
            setLoading(false)
        }
    }

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault()
            handleSend()
        }
    }

    const generateBrandBoard = async () => {
        setGenerating(true)
        try {
            const response = await fetch('/api/branding/generate-document', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    conversationHistory: messages,
                    messagingData
                })
            })

            const data = await response.json()
            setBrandingData(data.brandingData)
            setView('board')
        } catch (error) {
            alert('Failed to generate brand board. Please try again.')
        } finally {
            setGenerating(false)
        }
    }

    const downloadBoard = () => {
        window.print()
    }

    // Start View
    if (view === 'start') {
        return (
            <DashboardLayout>
                <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', paddingTop: '5rem' }}>
                    <div style={{
                        width: '120px',
                        height: '120px',
                        background: 'linear-gradient(135deg, #f97316 0%, #c2410c 100%)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 2rem'
                    }}>
                        <Sparkles size={60} color="white" />
                    </div>

                    <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>AI Brand Identity Assistant</h1>
                    <p style={{ color: 'var(--muted)', fontSize: '1.25rem', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem' }}>
                        Let Clara guide you through creating a visual brand identity board based on your messaging framework.
                    </p>

                    <div className="glass-card" style={{ padding: '2rem', textAlign: 'left', marginBottom: '2rem' }}>
                        <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                            <CheckCircle2 size={24} color="var(--primary)" />
                            What You'll Get
                        </h3>
                        <ul style={{ color: 'var(--muted)', lineHeight: '2', listStyle: 'none', padding: 0 }}>
                            <li>✓ Visual brand board with color swatches</li>
                            <li>✓ Live typography previews</li>
                            <li>✓ Brand personality & archetype</li>
                            <li>✓ Tone & voice guidelines</li>
                            <li>✓ Logo & visual style direction</li>
                            <li>✓ Printable brand guide</li>
                        </ul>
                    </div>

                    <button
                        onClick={startConversation}
                        disabled={loading}
                        className="btn-primary"
                        style={{
                            fontSize: '1.125rem',
                            padding: '1rem 3rem',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.75rem'
                        }}
                    >
                        {loading ? (
                            <>
                                <Loader2 size={24} className="spin" />
                                Loading Your Messaging...
                            </>
                        ) : (
                            <>
                                <MessageSquare size={24} />
                                Start Brand Conversation
                            </>
                        )}
                    </button>
                </div>
                <style jsx>{`.spin { animation: spin 1s linear infinite; } @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
            </DashboardLayout>
        )
    }

    // Chat View
    if (view === 'chat') {
        return (
            <DashboardLayout>
                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
                        <h2 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem' }}>
                            <Sparkles size={28} color="#fb923c" />
                            Brand Strategy Session with Clara
                        </h2>
                        <p style={{ color: 'var(--muted)', marginTop: '0.5rem' }}>
                            Answer thoughtfully - your responses will shape your brand identity
                        </p>
                    </div>

                    <div className="glass-card" style={{
                        display: 'flex',
                        flexDirection: 'column',
                        height: '600px',
                        overflow: 'hidden'
                    }}>
                        <div style={{
                            flex: 1,
                            overflowY: 'auto',
                            padding: '2rem',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1.5rem'
                        }}>
                            {messages.map((message, index) => (
                                <div
                                    key={index}
                                    style={{
                                        display: 'flex',
                                        justifyContent: message.role === 'user' ? 'flex-end' : 'flex-start'
                                    }}
                                >
                                    <div style={{
                                        maxWidth: '75%',
                                        padding: '1.25rem 1.5rem',
                                        borderRadius: '16px',
                                        background: message.role === 'user'
                                            ? 'linear-gradient(135deg, #f97316 0%, #c2410c 100%)'
                                            : 'var(--glass-bg)',
                                        border: message.role === 'assistant' ? '1px solid var(--glass-border)' : 'none',
                                        whiteSpace: 'pre-wrap',
                                        lineHeight: '1.7',
                                        fontSize: '0.9375rem'
                                    }}>
                                        {message.content}
                                    </div>
                                </div>
                            ))}
                            {loading && (
                                <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                                    <div style={{
                                        padding: '1.25rem 1.5rem',
                                        borderRadius: '16px',
                                        background: 'rgba(255, 255, 255, 0.05)',
                                        border: '1px solid rgba(255, 255, 255, 0.1)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.75rem'
                                    }}>
                                        <Loader2 size={18} className="spin" />
                                        <span style={{ color: 'var(--muted)', fontSize: '0.875rem' }}>Clara is thinking...</span>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        <div style={{
                            padding: '1.5rem',
                            borderTop: '1px solid var(--glass-border)',
                            background: 'var(--glass-bg)'
                        }}>
                            {canGenerate && (
                                <div style={{ marginBottom: '1rem', textAlign: 'center' }}>
                                    <button
                                        onClick={generateBrandBoard}
                                        disabled={generating}
                                        className="btn-primary"
                                        style={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '0.5rem',
                                            padding: '0.75rem 2rem'
                                        }}
                                    >
                                        {generating ? (
                                            <>
                                                <Loader2 size={18} className="spin" />
                                                Creating Your Brand Board...
                                            </>
                                        ) : (
                                            <>
                                                <Palette size={18} />
                                                Generate Brand Board
                                            </>
                                        )}
                                    </button>
                                </div>
                            )}

                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-end' }}>
                                <textarea
                                    className="input-field"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyPress={handleKeyPress}
                                    placeholder="Type your response..."
                                    style={{
                                        flex: 1,
                                        minHeight: '80px',
                                        maxHeight: '150px',
                                        resize: 'none',
                                        fontSize: '0.9375rem'
                                    }}
                                    disabled={loading}
                                />
                                <button
                                    onClick={handleSend}
                                    disabled={!input.trim() || loading}
                                    className="btn-primary"
                                    style={{
                                        padding: '1rem 1.5rem',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                        opacity: (!input.trim() || loading) ? 0.5 : 1,
                                        cursor: (!input.trim() || loading) ? 'not-allowed' : 'pointer'
                                    }}
                                >
                                    <Send size={20} />
                                </button>
                            </div>
                            <p style={{
                                fontSize: '0.75rem',
                                color: 'var(--muted)',
                                marginTop: '0.75rem',
                                marginBottom: 0,
                                textAlign: 'center'
                            }}>
                                Press Enter to send, Shift+Enter for new line
                            </p>
                        </div>
                    </div>
                </div>
                <style jsx>{`.spin { animation: spin 1s linear infinite; } @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
            </DashboardLayout>
        )
    }

    // Brand Board View
    if (view === 'board' && brandingData) {
        const allColors = [
            ...(brandingData.colorPalette?.primary || []),
            ...(brandingData.colorPalette?.secondary || []),
            ...(brandingData.colorPalette?.neutrals || [])
        ]

        return (
            <DashboardLayout>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    {/* Header */}
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: '2rem',
                        padding: '0 1rem'
                    }}>
                        <div>
                            <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Brand Identity Board</h2>
                            <p style={{ color: '#4ade80', fontSize: '0.875rem', fontWeight: '600' }}>
                                ✓ Complete - Ready to print
                            </p>
                        </div>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <button
                                onClick={() => setView('chat')}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    background: 'transparent',
                                    border: '1px solid var(--border)',
                                    color: 'white',
                                    padding: '0.75rem 1.5rem',
                                    borderRadius: 'var(--radius)',
                                    cursor: 'pointer'
                                }}
                            >
                                <MessageSquare size={18} />
                                Back to Chat
                            </button>
                            <button
                                onClick={downloadBoard}
                                className="btn-primary"
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem'
                                }}
                            >
                                <Download size={18} />
                                Print / Save as PDF
                            </button>
                        </div>
                    </div>

                    {/* Brand Board */}
                    <div style={{
                        background: '#F5F5F5',
                        padding: '4rem',
                        borderRadius: '8px',
                        color: '#1a1a1a'
                    }}>
                        {/* Header Section */}
                        <div style={{
                            textAlign: 'center',
                            paddingBottom: '3rem',
                            borderBottom: '2px solid rgba(0,0,0,0.1)',
                            marginBottom: '3rem'
                        }}>
                            <h1 style={{
                                fontSize: '4rem',
                                fontWeight: '800',
                                textTransform: 'uppercase',
                                letterSpacing: '6px',
                                color: allColors[0]?.hex || '#3B82F6',
                                marginBottom: '0.5rem'
                            }}>
                                {brandingData.companyName || 'Brand'}
                            </h1>
                            <p style={{
                                fontSize: '1.5rem',
                                fontStyle: 'italic',
                                color: '#666',
                                marginTop: '0.5rem'
                            }}>
                                {brandingData.tagline || 'Brand Identity Guide'}
                            </p>
                        </div>

                        {/* Brand Personality */}
                        <div style={{ marginBottom: '4rem' }}>
                            <h3 style={{
                                fontSize: '0.875rem',
                                textTransform: 'uppercase',
                                letterSpacing: '3px',
                                color: '#666',
                                marginBottom: '1.5rem',
                                fontWeight: '700'
                            }}>Brand Personality</h3>
                            <div style={{
                                background: 'white',
                                padding: '2rem',
                                borderRadius: '8px',
                                boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
                            }}>
                                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                                    {brandingData.brandPersonality?.traits?.map((trait: string, i: number) => (
                                        <span key={i} style={{
                                            padding: '0.5rem 1.25rem',
                                            background: allColors[0]?.hex || '#3B82F6',
                                            color: 'white',
                                            borderRadius: '20px',
                                            fontSize: '0.875rem',
                                            fontWeight: '600'
                                        }}>
                                            {trait}
                                        </span>
                                    ))}
                                </div>
                                <p style={{ fontSize: '1.125rem', lineHeight: '1.8', color: '#333' }}>
                                    <strong>Archetype:</strong> {brandingData.brandPersonality?.archetype}
                                </p>
                                <p style={{ fontSize: '0.9375rem', lineHeight: '1.7', color: '#555', marginTop: '1rem' }}>
                                    {brandingData.brandPersonality?.description}
                                </p>
                            </div>
                        </div>

                        {/* Color Palette */}
                        <div style={{ marginBottom: '4rem' }}>
                            <h3 style={{
                                fontSize: '0.875rem',
                                textTransform: 'uppercase',
                                letterSpacing: '3px',
                                color: '#666',
                                marginBottom: '1.5rem',
                                fontWeight: '700'
                            }}>Color Palette</h3>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1.5rem' }}>
                                {allColors.map((color: any, i: number) => (
                                    <div key={i} style={{
                                        background: 'white',
                                        borderRadius: '8px',
                                        overflow: 'hidden',
                                        boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
                                    }}>
                                        <div style={{
                                            height: '120px',
                                            background: color.hex,
                                            border: '1px solid rgba(0,0,0,0.05)'
                                        }} />
                                        <div style={{ padding: '1rem' }}>
                                            <p style={{ fontWeight: '700', fontSize: '0.875rem', marginBottom: '0.25rem' }}>
                                                {color.name}
                                            </p>
                                            <p style={{ fontSize: '0.75rem', color: '#666', fontFamily: 'monospace' }}>
                                                {color.hex}
                                            </p>
                                            <p style={{ fontSize: '0.75rem', color: '#999', marginTop: '0.5rem' }}>
                                                {color.usage}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Typography */}
                        <div style={{ marginBottom: '4rem' }}>
                            <h3 style={{
                                fontSize: '0.875rem',
                                textTransform: 'uppercase',
                                letterSpacing: '3px',
                                color: '#666',
                                marginBottom: '1.5rem',
                                fontWeight: '700'
                            }}>Typography</h3>
                            <div style={{
                                background: 'white',
                                padding: '3rem',
                                borderRadius: '8px',
                                boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
                            }}>
                                <div style={{ marginBottom: '3rem' }}>
                                    <p style={{ fontSize: '0.75rem', color: '#999', marginBottom: '0.5rem' }}>HEADLINE FONT</p>
                                    <h2 style={{
                                        fontFamily: brandingData.typography?.headline?.font || 'Inter',
                                        fontSize: '3rem',
                                        fontWeight: brandingData.typography?.headline?.weight || '700',
                                        marginBottom: '0.5rem'
                                    }}>
                                        {brandingData.typography?.headline?.font || 'Headline Font'}
                                    </h2>
                                    <p style={{ fontSize: '0.875rem', color: '#666' }}>
                                        {brandingData.typography?.headline?.usage}
                                    </p>
                                </div>
                                <div style={{ marginBottom: '3rem' }}>
                                    <p style={{ fontSize: '0.75rem', color: '#999', marginBottom: '0.5rem' }}>BODY FONT</p>
                                    <p style={{
                                        fontFamily: brandingData.typography?.body?.font || 'Inter',
                                        fontSize: '1.125rem',
                                        fontWeight: brandingData.typography?.body?.weight || '400',
                                        lineHeight: '1.8',
                                        marginBottom: '0.5rem'
                                    }}>
                                        {brandingData.typography?.body?.font || 'Body Font'} - The quick brown fox jumps over the lazy dog. This is how your body copy will look across all brand materials.
                                    </p>
                                    <p style={{ fontSize: '0.875rem', color: '#666' }}>
                                        {brandingData.typography?.body?.usage}
                                    </p>
                                </div>
                                {brandingData.typography?.accent && (
                                    <div>
                                        <p style={{ fontSize: '0.75rem', color: '#999', marginBottom: '0.5rem' }}>ACCENT FONT</p>
                                        <p style={{
                                            fontFamily: brandingData.typography?.accent?.font || 'serif',
                                            fontSize: '1.5rem',
                                            fontStyle: 'italic',
                                            marginBottom: '0.5rem'
                                        }}>
                                            {brandingData.typography?.accent?.font}
                                        </p>
                                        <p style={{ fontSize: '0.875rem', color: '#666' }}>
                                            {brandingData.typography?.accent?.usage}
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Logo Guidelines & Voice/Tone */}
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '4rem' }}>
                            {/* Logo Guidelines */}
                            <div>
                                <h3 style={{
                                    fontSize: '0.875rem',
                                    textTransform: 'uppercase',
                                    letterSpacing: '3px',
                                    color: '#666',
                                    marginBottom: '1.5rem',
                                    fontWeight: '700'
                                }}>Logo Guidelines</h3>
                                <div style={{
                                    background: 'white',
                                    padding: '2rem',
                                    borderRadius: '8px',
                                    boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
                                }}>
                                    <p style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '1rem' }}>
                                        Style: {brandingData.logoGuidelines?.style}
                                    </p>
                                    <div style={{ marginBottom: '1.5rem' }}>
                                        <p style={{ fontSize: '0.875rem', fontWeight: '600', color: '#4ade80', marginBottom: '0.5rem' }}>✓ Do:</p>
                                        <ul style={{ fontSize: '0.875rem', color: '#555', lineHeight: '1.7', paddingLeft: '1.25rem' }}>
                                            {brandingData.logoGuidelines?.dos?.map((item: string, i: number) => (
                                                <li key={i}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <p style={{ fontSize: '0.875rem', fontWeight: '600', color: '#ef4444', marginBottom: '0.5rem' }}>✗ Don't:</p>
                                        <ul style={{ fontSize: '0.875rem', color: '#555', lineHeight: '1.7', paddingLeft: '1.25rem' }}>
                                            {brandingData.logoGuidelines?.donts?.map((item: string, i: number) => (
                                                <li key={i}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Voice & Tone */}
                            <div>
                                <h3 style={{
                                    fontSize: '0.875rem',
                                    textTransform: 'uppercase',
                                    letterSpacing: '3px',
                                    color: '#666',
                                    marginBottom: '1.5rem',
                                    fontWeight: '700'
                                }}>Voice & Tone</h3>
                                <div style={{
                                    background: 'white',
                                    padding: '2rem',
                                    borderRadius: '8px',
                                    boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
                                }}>
                                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                                        {brandingData.voiceAndTone?.characteristics?.map((char: string, i: number) => (
                                            <span key={i} style={{
                                                padding: '0.375rem 0.875rem',
                                                background: '#f0f0f0',
                                                borderRadius: '12px',
                                                fontSize: '0.75rem',
                                                fontWeight: '600',
                                                color: '#333'
                                            }}>
                                                {char}
                                            </span>
                                        ))}
                                    </div>
                                    <div style={{ fontSize: '0.875rem', lineHeight: '1.7', color: '#555' }}>
                                        <p><strong>Professional:</strong> {brandingData.voiceAndTone?.professional}</p>
                                        <p style={{ marginTop: '0.75rem' }}><strong>Social:</strong> {brandingData.voiceAndTone?.social}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Visual Style */}
                        <div>
                            <h3 style={{
                                fontSize: '0.875rem',
                                textTransform: 'uppercase',
                                letterSpacing: '3px',
                                color: '#666',
                                marginBottom: '1.5rem',
                                fontWeight: '700'
                            }}>Visual Style</h3>
                            <div style={{
                                background: 'white',
                                padding: '2rem',
                                borderRadius: '8px',
                                boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
                            }}>
                                <p style={{ fontSize: '0.9375rem', lineHeight: '1.8', color: '#555' }}>
                                    <strong>Photography:</strong> {brandingData.visualStyle?.photography}
                                </p>
                                <p style={{ fontSize: '0.9375rem', lineHeight: '1.8', color: '#555', marginTop: '1rem' }}>
                                    <strong>Imagery:</strong> {brandingData.visualStyle?.imagery}
                                </p>
                                <p style={{ fontSize: '0.9375rem', lineHeight: '1.8', color: '#555', marginTop: '1rem' }}>
                                    <strong>Graphics:</strong> {brandingData.visualStyle?.graphics}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* PAGE 2: BRAND IN ACTION - LANDING PAGE MOCKUP */}
                    <div style={{
                        background: allColors[0]?.hex || '#3B82F6',
                        marginTop: '4rem',
                        borderRadius: '8px',
                        overflow: 'hidden',
                        position: 'relative',
                        minHeight: '800px'
                    }}>
                        {/* Abstract Background Shapes */}
                        <div style={{
                            position: 'absolute',
                            top: '-100px',
                            right: '-100px',
                            width: '400px',
                            height: '400px',
                            borderRadius: '50%',
                            background: `linear-gradient(135deg, ${allColors[1]?.hex || '#8B5CF6'}, ${allColors[2]?.hex || '#EC4899'})`,
                            opacity: 0.3,
                            filter: 'blur(60px)'
                        }} />
                        <div style={{
                            position: 'absolute',
                            bottom: '-150px',
                            left: '-150px',
                            width: '500px',
                            height: '500px',
                            borderRadius: '50%',
                            background: `linear-gradient(225deg, ${allColors[3]?.hex || '#10B981'}, ${allColors[0]?.hex || '#3B82F6'})`,
                            opacity: 0.2,
                            filter: 'blur(80px)'
                        }} />

                        {/* Geometric Shapes */}
                        <div style={{
                            position: 'absolute',
                            top: '20%',
                            left: '10%',
                            width: '80px',
                            height: '80px',
                            background: allColors[4]?.hex || '#F59E0B',
                            opacity: 0.15,
                            transform: 'rotate(45deg)'
                        }} />
                        <div style={{
                            position: 'absolute',
                            bottom: '30%',
                            right: '15%',
                            width: '120px',
                            height: '120px',
                            borderRadius: '50%',
                            border: `3px solid ${allColors[5]?.hex || '#fff'}`,
                            opacity: 0.1
                        }} />

                        {/* Content */}
                        <div style={{
                            position: 'relative',
                            zIndex: 1,
                            padding: '6rem 4rem',
                            color: 'white'
                        }}>
                            {/* Hero Section */}
                            <div style={{
                                maxWidth: '900px',
                                margin: '0 auto',
                                textAlign: 'center',
                                marginBottom: '5rem'
                            }}>
                                <h1 style={{
                                    fontFamily: brandingData.typography?.headline?.font || 'Inter',
                                    fontSize: '4.5rem',
                                    fontWeight: brandingData.typography?.headline?.weight || '800',
                                    lineHeight: '1.1',
                                    marginBottom: '1.5rem',
                                    textShadow: '0 2px 20px rgba(0,0,0,0.2)'
                                }}>
                                    {brandingData.companyName || 'Your Brand'}
                                </h1>
                                <p style={{
                                    fontFamily: brandingData.typography?.body?.font || 'Inter',
                                    fontSize: '1.5rem',
                                    fontWeight: '400',
                                    lineHeight: '1.6',
                                    marginBottom: '2.5rem',
                                    opacity: 0.95
                                }}>
                                    {brandingData.tagline || messagingData?.usp?.substring(0, 150) || 'Transform your business with our innovative solutions'}
                                </p>
                                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                                    <button style={{
                                        fontFamily: brandingData.typography?.body?.font || 'Inter',
                                        padding: '1.25rem 3rem',
                                        fontSize: '1.125rem',
                                        fontWeight: '600',
                                        background: 'white',
                                        color: allColors[0]?.hex || '#3B82F6',
                                        border: 'none',
                                        borderRadius: '12px',
                                        cursor: 'pointer',
                                        boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
                                        transition: 'transform 0.2s'
                                    }}>
                                        Get Started
                                    </button>
                                    <button style={{
                                        fontFamily: brandingData.typography?.body?.font || 'Inter',
                                        padding: '1.25rem 3rem',
                                        fontSize: '1.125rem',
                                        fontWeight: '600',
                                        background: 'transparent',
                                        color: 'white',
                                        border: '2px solid white',
                                        borderRadius: '12px',
                                        cursor: 'pointer',
                                        transition: 'transform 0.2s'
                                    }}>
                                        Learn More
                                    </button>
                                </div>
                            </div>

                            {/* Features Section */}
                            <div style={{
                                background: 'rgba(255, 255, 255, 0.1)',
                                backdropFilter: 'blur(10px)',
                                borderRadius: '16px',
                                padding: '4rem 3rem',
                                border: '1px solid rgba(255, 255, 255, 0.2)'
                            }}>
                                <h2 style={{
                                    fontFamily: brandingData.typography?.headline?.font || 'Inter',
                                    fontSize: '2.5rem',
                                    fontWeight: brandingData.typography?.headline?.weight || '700',
                                    textAlign: 'center',
                                    marginBottom: '3rem'
                                }}>
                                    Why Choose Us
                                </h2>
                                <div style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                                    gap: '2rem'
                                }}>
                                    {brandingData.brandPersonality?.traits?.slice(0, 3).map((trait: string, i: number) => (
                                        <div key={i} style={{
                                            background: 'rgba(255, 255, 255, 0.08)',
                                            padding: '2rem',
                                            borderRadius: '12px',
                                            border: '1px solid rgba(255, 255, 255, 0.15)'
                                        }}>
                                            <div style={{
                                                width: '60px',
                                                height: '60px',
                                                borderRadius: '12px',
                                                background: `linear-gradient(135deg, ${allColors[i + 1]?.hex || '#fff'}, ${allColors[i + 2]?.hex || '#fff'})`,
                                                marginBottom: '1.5rem',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                fontSize: '1.5rem'
                                            }}>
                                                ✦
                                            </div>
                                            <h3 style={{
                                                fontFamily: brandingData.typography?.headline?.font || 'Inter',
                                                fontSize: '1.5rem',
                                                fontWeight: '600',
                                                marginBottom: '0.75rem'
                                            }}>
                                                {trait}
                                            </h3>
                                            <p style={{
                                                fontFamily: brandingData.typography?.body?.font || 'Inter',
                                                fontSize: '1rem',
                                                lineHeight: '1.7',
                                                opacity: 0.9
                                            }}>
                                                Experience excellence through our {trait.toLowerCase()} approach to delivering results.
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* CTA Section */}
                            <div style={{
                                textAlign: 'center',
                                marginTop: '5rem',
                                padding: '3rem 2rem',
                                background: `linear-gradient(135deg, ${allColors[1]?.hex || '#8B5CF6'}, ${allColors[3]?.hex || '#10B981'})`,
                                borderRadius: '16px',
                                boxShadow: '0 10px 40px rgba(0,0,0,0.2)'
                            }}>
                                <h2 style={{
                                    fontFamily: brandingData.typography?.headline?.font || 'Inter',
                                    fontSize: '2.5rem',
                                    fontWeight: brandingData.typography?.headline?.weight || '700',
                                    marginBottom: '1rem'
                                }}>
                                    Ready to Get Started?
                                </h2>
                                <p style={{
                                    fontFamily: brandingData.typography?.body?.font || 'Inter',
                                    fontSize: '1.25rem',
                                    marginBottom: '2rem',
                                    opacity: 0.95
                                }}>
                                    Join thousands of satisfied customers today
                                </p>
                                <button style={{
                                    fontFamily: brandingData.typography?.body?.font || 'Inter',
                                    padding: '1.25rem 3.5rem',
                                    fontSize: '1.125rem',
                                    fontWeight: '600',
                                    background: 'white',
                                    color: allColors[0]?.hex || '#3B82F6',
                                    border: 'none',
                                    borderRadius: '12px',
                                    cursor: 'pointer',
                                    boxShadow: '0 4px 20px rgba(0,0,0,0.2)'
                                }}>
                                    Start Your Journey
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <style jsx>{`.spin { animation: spin 1s linear infinite; } @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
            </DashboardLayout>
        )
    }

    return null
}
