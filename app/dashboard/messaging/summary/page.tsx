'use client'

import React, { useState, useEffect } from 'react'
import DashboardLayout from '@/components/DashboardLayout'
import AICopyEditor from '@/components/AICopyEditor'
import SplitPanelLayout from '@/components/SplitPanelLayout'
import { ArrowLeft, ArrowRight, Download, RefreshCw, Sparkles } from 'lucide-react'

const QUESTIONS = [
    "What’s the core theme or lesson that runs through your entire journey?",
    "How does your personal story align with the struggles of your tribe?",
    "What truth or belief is at the center of your work?",
    "What does your tribe want most — and what are they tired of hearing?",
    "What gap in the market do you now fill?",
    "What is your Unique Mechanism — your named system or process?",
    "What’s your positioning statement or differentiator in one line?",
    "Write your USP (Value Proposition)",
    "Translate it into your Mission Statement",
    "What’s your main message — in one conversational sentence?",
    "Write a short version you can say naturally",
    "Website: My website will feature __ prominently on the homepage and about page.",
    "Social Media: I will share content like __ on platforms such as __ to engage my audience.",
    "Email Marketing: My email campaigns will include __ to connect with my subscribers and offer value.",
    "Networking / Partnerships: I will participate in __ to connect with potential clients and collaborators.",
    "Immediate Action Plan: This week, I will...",
    "Action Plan: This month, I will...",
    "Long-term Plan: In the next 3 months, I will...",
    "Commitment: Final thoughts on owning your message."
]

export default function SummaryPage() {
    const [step, setStep] = useState(0)
    const [answers, setAnswers] = useState(Array(QUESTIONS.length).fill(""))
    const [generating, setGenerating] = useState(false)
    const [result, setResult] = useState<string | null>(null)
    const [loading, setLoading] = useState(true)
    const [editMode, setEditMode] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/api/messaging/summary')
                const data = await res.json()
                if (data.answers?.length > 0) setAnswers(data.answers)
                if (data.report) setResult(data.report)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [])

    const saveProgress = async (newAnswers: string[], newReport: string | null = null) => {
        try {
            await fetch('/api/messaging/summary', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ answers: newAnswers, report: newReport })
            })
        } catch (err) { console.error(err) }
    }

    const handleNext = () => {
        saveProgress(answers)
        if (step < QUESTIONS.length - 1) setStep(step + 1)
        else generateReport()
    }

    const handleBack = () => { if (step > 0) setStep(step - 1) }

    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newAnswers = [...answers]
        newAnswers[step] = e.target.value
        setAnswers(newAnswers)
    }

    const generateReport = async () => {
        setGenerating(true)
        try {
            const response = await fetch('/api/generate/summary', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ answers })
            })
            const data = await response.json()
            setResult(data.report)
            saveProgress(answers, data.report)
        } catch (err) { alert("Error generating summary.") }
        finally { setGenerating(false) }
    }

    const downloadReport = () => {
        if (!result) return
        const header = "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Messaging Framework Executive Summary</title></head><body>";
        const footer = "</body></html>";
        const sourceHTML = header + result.replace(/\n/g, "<br>") + footer;

        const file = new Blob(['\ufeff', sourceHTML], { type: 'application/msword' });
        const element = document.createElement("a")
        element.href = URL.createObjectURL(file)
        element.download = "Messaging_Framework_Executive_Summary.doc"
        document.body.appendChild(element)
        element.click()
        document.body.removeChild(element)
    }

    const downloadBonus = (type: string) => {
        let content = "";
        let filename = "";

        if (type === 'hooks') {
            filename = "100_Viral_Hooks_Vault.doc";
            content = "<h1>100 Viral Hooks Vault</h1><p>Stop the scroll with these high-converting hook templates...</p><ul><li>How to [Result] without [Pain point]</li><li>The secret to [Benefit] that nobody tells you</li><li>Why your [Process] is failing (and how to fix it)</li></ul><p>... and 97 more inside your full framework strategy!</p>";
        } else if (type === 'planner') {
            filename = "30_Day_Social_Media_Planner.doc";
            content = "<h1>30-Day Social Media Content Planner</h1><p>Your step-by-step engagement roadmap...</p><table><tr><th>Day</th><th>Content Type</th><th>Goal</th></tr><tr><td>1</td><td>Origin Story</td><td>Build Trust</td><td>2</td><td>The Market Lie</td><td>Establish Authority</td></tr></table>";
        } else if (type === 'bio') {
            filename = "Professional_Bio_Architect.doc";
            content = "<h1>Professional Bio Architect</h1><p>Craft a bio that converts profile visits into leads...</p><p><b>The Formula:</b> I help [Audience] achieve [Result] through [Unique Mechanism].</p>";
        } else if (type === 'emails') {
            filename = "Email_Subject_Line_Power_File.doc";
            content = "<h1>Email Subject Line Power-File</h1><p>Open rates that defy industry standards...</p><ul><li>Quick question about [Topic]</li><li>The [Mechanism] Shift is here</li><li>[Name], I thought of you when I saw this</li></ul>";
        }

        const header = "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'></head><body>";
        const footer = "</body></html>";
        const sourceHTML = header + content + footer;

        const file = new Blob(['\ufeff', sourceHTML], { type: 'application/msword' });
        const element = document.createElement("a")
        element.href = URL.createObjectURL(file)
        element.download = filename
        document.body.appendChild(element)
        element.click()
        document.body.removeChild(element)
    }

    if (loading) return <DashboardLayout><div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}><RefreshCw className="spin" /></div></DashboardLayout>

    if (result) {
        if (editMode) {
            return (
                <DashboardLayout>
                    <div style={{ marginBottom: '1.5rem' }}>
                        <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <Sparkles size={24} color="#fb923c" />
                            Refining Your Messaging Framework Summary
                        </h2>
                        <p style={{ color: 'var(--muted)', marginTop: '0.5rem' }}>
                            Use the AI assistant to perfect your executive summary.
                        </p>
                    </div>
                    <SplitPanelLayout
                        leftPanel={
                            <AICopyEditor
                                originalCopy={result}
                                onSave={(newCopy) => {
                                    setResult(newCopy)
                                    saveProgress(answers, newCopy)
                                    setEditMode(false)
                                }}
                                onCancel={() => setEditMode(false)}
                                onCopyUpdate={(newCopy) => setResult(newCopy)}
                                moduleType="messaging-summary"
                            />
                        }
                        rightPanel={
                            <div className="glass-card" style={{ padding: '3rem', height: '100%', overflowY: 'auto' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', paddingBottom: '1rem', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
                                    <h3 style={{ margin: 0 }}>Live Preview</h3>
                                    <button onClick={downloadReport} className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', padding: '0.5rem 1rem' }}>
                                        <Download size={16} /> Download
                                    </button>
                                </div>
                                <div style={{ whiteSpace: 'pre-wrap', lineHeight: '1.8', fontSize: '0.9375rem' }}>{result}</div>
                            </div>
                        }
                    />
                </DashboardLayout>
            )
        }

        return (
            <DashboardLayout>
                <div style={{ maxWidth: '850px', margin: '0 auto' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                        <div>
                            <h2 style={{ fontSize: '1.75rem' }}>Messaging Framework Executive Summary</h2>
                            <p style={{ color: '#4ade80', fontSize: '0.875rem', fontWeight: '600', marginTop: '0.25rem' }}>✓ Step 6 Complete: Your full strategy is ready.</p>
                        </div>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <button onClick={() => setEditMode(true)} className="btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem' }}>
                                <Sparkles size={16} /> Edit with AI
                            </button>
                            <button onClick={downloadReport} className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Download size={16} /> Download Document
                            </button>
                        </div>
                    </div>

                    <div className="glass-card" style={{ padding: '3rem', whiteSpace: 'pre-wrap', lineHeight: '1.8', marginBottom: '3rem' }}>{result}</div>

                    <div style={{ marginBottom: '3rem' }}>
                        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                            <span style={{ color: 'var(--primary)', fontWeight: '700', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Bonus Unlocked</span>
                            <h2 style={{ fontSize: '2rem', marginTop: '0.5rem' }}>Your Messaging Bonus Vault</h2>
                            <p style={{ color: 'var(--muted)', marginTop: '0.5rem' }}>As a Master Artisan, you've unlocked these 4 high-value assets to accelerate your growth.</p>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                            <BonusCard
                                title="100 Viral Hook Templates"
                                description="Stop the scroll with these battle-tested hooks for social media dominance."
                                onDownload={() => downloadBonus('hooks')}
                            />
                            <BonusCard
                                title="30-Day Content Planner"
                                description="A full month of high-engagement content mapped to your new messaging."
                                onDownload={() => downloadBonus('planner')}
                            />
                            <BonusCard
                                title="Power-Bio Architect"
                                description="Transform your social profiles into lead-generation machines in minutes."
                                onDownload={() => downloadBonus('bio')}
                            />
                            <BonusCard
                                title="Email Subject Line Power-File"
                                description="The ultimate swipe file for high-open rates and immediate clicks."
                                onDownload={() => downloadBonus('emails')}
                            />
                        </div>
                    </div>

                    <div className="glass-card" style={{ padding: '2rem', textAlign: 'center', background: 'linear-gradient(135deg, rgba(249, 115, 22, 0.1), rgba(194, 65, 12, 0.1))', border: '1px solid rgba(249, 115, 22, 0.2)' }}>
                        <h3 style={{ marginBottom: '0.5rem' }}>The Journey Continues...</h3>
                        <p style={{ color: 'var(--muted)', marginBottom: '1.5rem' }}>Your messaging framework is now complete. You can access your bonuses anytime on the Messaging Assistant dashboard.</p>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                            <button onClick={() => window.location.href = '/dashboard/messaging'} className="btn-primary" style={{ background: 'transparent', border: '1px solid var(--primary)', color: 'white' }}>Return to Messaging Assistant</button>
                            <button onClick={() => window.location.href = '/dashboard'} className="btn-primary">Return to Dashboard</button>
                        </div>
                    </div>
                </div>
            </DashboardLayout>
        )
    }

    return (
        <DashboardLayout>
            <div style={{ maxWidth: '700px', margin: '0 auto' }}>
                <div style={{ marginBottom: '2.5rem', textAlign: 'center' }}>
                    <span style={{ color: 'var(--primary)', fontWeight: '700', fontSize: '0.75rem', textTransform: 'uppercase' }}>Step 6: The Grand Synthesis</span>
                    <h2 style={{ fontSize: '2rem', marginTop: '0.5rem' }}>Bringing It All Together</h2>
                    <div style={{ width: '100%', height: '4px', background: 'rgba(255,255,255,0.05)', borderRadius: '2px', marginTop: '1.5rem', position: 'relative' }}>
                        <div style={{ width: `${((step + 1) / QUESTIONS.length) * 100}%`, height: '100%', background: 'var(--primary)', borderRadius: '2px', transition: 'width 0.3s ease' }} />
                    </div>
                    <p style={{ color: 'var(--muted)', marginTop: '1rem', fontSize: '0.875rem' }}>Question {step + 1} of {QUESTIONS.length}</p>
                </div>

                <div className="glass-card" style={{ padding: '2.5rem' }}>
                    <h3 style={{ marginBottom: '1.5rem', fontSize: '1.25rem' }}>{QUESTIONS[step]}</h3>
                    <textarea className="input-field" style={{ minHeight: '150px' }} value={answers[step]} onChange={handleInputChange} placeholder="Synthesize your insights into action..." />
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem' }}>
                        <button onClick={handleBack} disabled={step === 0} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'transparent', border: 'none', color: step === 0 ? 'transparent' : 'var(--muted)', cursor: 'pointer' }}>
                            <ArrowLeft size={18} /> Back
                        </button>
                        <button onClick={handleNext} className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', minWidth: '140px', justifyContent: 'center' }}>
                            {step === QUESTIONS.length - 1 ? (generating ? 'Finalizing...' : 'Generate Executive Summary') : 'Next Question'}
                            {!generating && <ArrowRight size={18} />}
                            {generating && <RefreshCw size={18} className="spin" />}
                        </button>
                    </div>
                </div>
            </div>
            <style jsx>{`.spin { animation: spin 1s linear infinite; } @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
        </DashboardLayout>
    )
}

function BonusCard({ title, description, onDownload }: { title: string, description: string, onDownload: () => void }) {
    return (
        <div className="glass-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.65rem', padding: '0.15rem 0.5rem', borderRadius: '4px', background: 'rgba(34, 197, 94, 0.2)', color: '#4ade80', fontWeight: '700', textTransform: 'uppercase' }}>Free Bonus</span>
            </div>
            <h4 style={{ fontSize: '1.125rem' }}>{title}</h4>
            <p style={{ color: 'var(--muted)', fontSize: '0.875rem', lineHeight: '1.5', flex: 1 }}>{description}</p>
            <button onClick={onDownload} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', padding: '0.6rem 1rem', borderRadius: 'var(--radius)', cursor: 'pointer', fontSize: '0.875rem', fontWeight: '600', transition: 'all 0.2s ease' }}>
                <Download size={14} /> Download Bonus (.doc)
            </button>
        </div>
    )
}
