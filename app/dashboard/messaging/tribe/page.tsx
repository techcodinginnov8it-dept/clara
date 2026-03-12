'use client'

import React, { useState, useEffect } from 'react'
import DashboardLayout from '@/components/DashboardLayout'
import AICopyEditor from '@/components/AICopyEditor'
import SplitPanelLayout from '@/components/SplitPanelLayout'
import { ArrowLeft, ArrowRight, Download, RefreshCw, Sparkles } from 'lucide-react'

const QUESTIONS = [
    "What is the overall market or industry you want to operate in?",
    "Within that market, which segment will you specialize in — and why?",
    "What are the top 3 recurring pain points your tribe experiences daily?",
    "What false beliefs or failed attempts have kept them stuck?",
    "How do they make money right now?",
    "What does success look like in their world?",
    "What’s the overall health of this niche?",
    "What does an average day in their life look like — emotionally, not just logistically?",
    "What do they secretly wish they could change about their life or work?",
    "What 2–3 daily frustrations drain their energy or confidence most?",
    "What keeps them up at night — their deepest fear or worry?",
    "How do they see themselves right now — and how do they feel about that identity?",
    "Who do they want to become — and what would that version of them feel like?",
    "What emotions drive most of their decisions — fear, pride, love, freedom, security?",
    "What do they desire most — the ultimate end result behind all their goals?",
    "What core beliefs or misconceptions hold them back?",
    "What common mistakes keep them stuck?",
    "What’s the story they tell themselves that justifies staying stuck?",
    "What types of solutions are they currently being sold — and why haven’t they worked?",
    "What messaging or tone makes them say, ‘This was made for me’?",
    "How will they feel and behave differently after working with you?",
    "What new identity or belief will they adopt as a result of your work?",
    "Audience Deep Dive Summary: Combine your insights here."
]

export default function TribalIdentityPage() {
    const [step, setStep] = useState(0)
    const [answers, setAnswers] = useState(Array(QUESTIONS.length).fill(""))
    const [generating, setGenerating] = useState(false)
    const [result, setResult] = useState<string | null>(null)
    const [loading, setLoading] = useState(true)
    const [editMode, setEditMode] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/api/messaging/tribe')
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
            await fetch('/api/messaging/tribe', {
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
            const response = await fetch('/api/generate/tribe', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ answers })
            })
            const data = await response.json()
            setResult(data.report)
            saveProgress(answers, data.report)
        } catch (err) { alert("Error generating report.") }
        finally { setGenerating(false) }
    }

    const downloadReport = () => {
        if (!result) return
        const header = "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Tribal Identity & Deep Dive Analysis</title></head><body>";
        const footer = "</body></html>";
        const sourceHTML = header + result.replace(/\n/g, "<br>") + footer;

        const file = new Blob(['\ufeff', sourceHTML], { type: 'application/msword' });
        const element = document.createElement("a")
        element.href = URL.createObjectURL(file)
        element.download = "Tribal_Identity_Deep_Dive.doc"
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
                            Refining Your Tribal Identity Analysis
                        </h2>
                        <p style={{ color: 'var(--muted)', marginTop: '0.5rem' }}>
                            Use the AI assistant to perfect your audience deep dive.
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
                                moduleType="tribal-identity"
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
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                        <h2>Tribal Identity & Deep Dive Analysis</h2>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <button onClick={() => setEditMode(true)} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'transparent', border: '1px solid var(--border)', color: 'white', padding: '0.5rem 1rem', borderRadius: 'var(--radius)', cursor: 'pointer' }}>
                                <Sparkles size={16} /> Edit with AI
                            </button>
                            <button onClick={downloadReport} className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Download size={16} /> Download Document
                            </button>
                        </div>
                    </div>
                    <div className="glass-card" style={{ padding: '3rem', whiteSpace: 'pre-wrap', lineHeight: '1.8' }}>{result}</div>
                </div>
            </DashboardLayout>
        )
    }

    return (
        <DashboardLayout>
            <div style={{ maxWidth: '700px', margin: '0 auto' }}>
                <div style={{ marginBottom: '2.5rem', textAlign: 'center' }}>
                    <span style={{ color: 'var(--primary)', fontWeight: '700', fontSize: '0.75rem', textTransform: 'uppercase' }}>Step 3</span>
                    <h2 style={{ fontSize: '2rem', marginTop: '0.5rem' }}>Tribal Identity & Deep Dive Analysis</h2>
                    <div style={{ width: '100%', height: '4px', background: 'rgba(255,255,255,0.05)', borderRadius: '2px', marginTop: '1.5rem', position: 'relative' }}>
                        <div style={{ width: `${((step + 1) / QUESTIONS.length) * 100}%`, height: '100%', background: 'var(--primary)', borderRadius: '2px', transition: 'width 0.3s ease' }} />
                    </div>
                    <p style={{ color: 'var(--muted)', marginTop: '1rem', fontSize: '0.875rem' }}>Question {step + 1} of {QUESTIONS.length}</p>
                </div>

                <div className="glass-card" style={{ padding: '2.5rem' }}>
                    <h3 style={{ marginBottom: '1.5rem', fontSize: '1.25rem' }}>{QUESTIONS[step]}</h3>
                    <textarea className="input-field" style={{ minHeight: '150px' }} value={answers[step]} onChange={handleInputChange} placeholder="Dive deep into your tribe's psyche..." />
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem' }}>
                        <button onClick={handleBack} disabled={step === 0} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'transparent', border: 'none', color: step === 0 ? 'transparent' : 'var(--muted)', cursor: 'pointer' }}>
                            <ArrowLeft size={18} /> Back
                        </button>
                        <button onClick={handleNext} className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', minWidth: '140px', justifyContent: 'center' }}>
                            {step === QUESTIONS.length - 1 ? (generating ? 'Synthesizing...' : 'Generate Tribe Analysis') : 'Next Question'}
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
