'use client'

import React, { useState, useEffect } from 'react'
import DashboardLayout from '@/components/DashboardLayout'
import AICopyEditor from '@/components/AICopyEditor'
import SplitPanelLayout from '@/components/SplitPanelLayout'
import { ArrowLeft, ArrowRight, Download, RefreshCw, Sparkles } from 'lucide-react'
import { DocumentSection, parseDocumentSections } from '@/lib/document-structure'

const QUESTIONS = [
    "Who are your top 3–5 direct competitors?",
    "What are they offering — and at what price points?",
    "What unique angle, method, or promise do they emphasize?",
    "What are your competitors doing exceptionally well?",
    "Where are they dropping the ball?",
    "What do your dream clients say they’re frustrated with in current options?",
    "What’s missing in your niche that your market wishes existed?",
    "What trends or patterns do you notice — and where is the white space?",
    "Based on what you’ve uncovered, where do you see the biggest opportunity to be different?",
    "What unique strength, story, or process do you already have that fits that gap?"
]

export default function MarketGapPage() {
    const [step, setStep] = useState(0)
    const [answers, setAnswers] = useState(Array(QUESTIONS.length).fill(""))
    const [generating, setGenerating] = useState(false)
    const [result, setResult] = useState<string | null>(null)
    const [sections, setSections] = useState<DocumentSection[]>([])
    const [loading, setLoading] = useState(true)
    const [editMode, setEditMode] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/api/messaging/market-gap')
                const data = await res.json()
                if (data.answers?.length > 0) setAnswers(data.answers)
                if (data.report) setResult(data.report)
                if (Array.isArray(data.sections)) setSections(data.sections)
                else if (data.report) setSections(parseDocumentSections(data.report))
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [])

    const saveProgress = async (newAnswers: string[], newReport: string | null = null, newSections?: DocumentSection[]) => {
        try {
            await fetch('/api/messaging/market-gap', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ answers: newAnswers, report: newReport, sections: newSections })
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
            const response = await fetch('/api/generate/market-gap', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ answers })
            })
            const data = await response.json()
            setResult(data.report)
            const parsedSections = parseDocumentSections(data.report)
            setSections(parsedSections)
            saveProgress(answers, data.report, parsedSections)
        } catch (err) { alert("Error generating report.") }
        finally { setGenerating(false) }
    }

    const downloadReport = () => {
        if (!result) return
        const header = "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Competitive Dominance Report</title></head><body>";
        const footer = "</body></html>";
        const sourceHTML = header + result.replace(/\n/g, "<br>") + footer;

        const file = new Blob(['\ufeff', sourceHTML], {
            type: 'application/msword'
        });

        const element = document.createElement("a")
        element.href = URL.createObjectURL(file)
        element.download = "Competitive_Dominance_Report.doc"
        document.body.appendChild(element)
        element.click()
        document.body.removeChild(element)
    }

    if (loading) return <DashboardLayout><div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}><RefreshCw className="spin" /></div></DashboardLayout>

    if (result) {
        // AI Editor Mode
        if (editMode) {
            return (
                <DashboardLayout>
                    <div style={{ marginBottom: '1.5rem' }}>
                        <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <Sparkles size={24} color="#fb923c" />
                            Refining Your Market Gap Report
                        </h2>
                        <p style={{ color: 'var(--muted)', marginTop: '0.5rem' }}>
                            Use the AI assistant to perfect your competitive analysis.
                        </p>
                    </div>
                    <SplitPanelLayout
                        leftPanel={
                            <AICopyEditor
                                originalCopy={result}
                                originalSections={sections}
                                onSave={(newCopy, newSections) => {
                                    setResult(newCopy)
                                    setSections(newSections)
                                    saveProgress(answers, newCopy, newSections)
                                    setEditMode(false)
                                }}
                                onCancel={() => setEditMode(false)}
                                onCopyUpdate={(newCopy, newSections) => {
                                    setResult(newCopy)
                                    setSections(newSections)
                                }}
                                moduleType="market-gap"
                            />
                        }
                        rightPanel={
                            <div className="glass-card" style={{
                                padding: '3rem',
                                height: '100%',
                                overflowY: 'auto'
                            }}>
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    marginBottom: '2rem',
                                    paddingBottom: '1rem',
                                    borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
                                }}>
                                    <h3 style={{ margin: 0 }}>Live Preview</h3>
                                    <button
                                        onClick={downloadReport}
                                        className="btn-primary"
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.5rem',
                                            fontSize: '0.875rem',
                                            padding: '0.5rem 1rem'
                                        }}
                                    >
                                        <Download size={16} /> Download
                                    </button>
                                </div>
                                <div style={{
                                    whiteSpace: 'pre-wrap',
                                    lineHeight: '1.8',
                                    fontSize: '0.9375rem'
                                }}>
                                    {result}
                                </div>
                            </div>
                        }
                    />
                </DashboardLayout>
            )
        }

        // Normal Result View
        return (
            <DashboardLayout>
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                        <h2>Competitive Dominance Report</h2>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <button
                                onClick={() => setEditMode(true)}
                                className="btn-secondary"
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    padding: '0.5rem 1rem',
                                }}
                            >
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
                    <span style={{ color: 'var(--primary)', fontWeight: '700', fontSize: '0.75rem', textTransform: 'uppercase' }}>Step 2</span>
                    <h2 style={{ fontSize: '2rem', marginTop: '0.5rem' }}>Market Gap & Competitor Analysis</h2>
                    <div style={{ width: '100%', height: '4px', background: 'rgba(255,255,255,0.05)', borderRadius: '2px', marginTop: '1.5rem', position: 'relative' }}>
                        <div style={{ width: `${((step + 1) / QUESTIONS.length) * 100}%`, height: '100%', background: 'var(--primary)', borderRadius: '2px', transition: 'width 0.3s ease' }} />
                    </div>
                </div>

                <div className="glass-card" style={{ padding: '2.5rem' }}>
                    <h3 style={{ marginBottom: '1.5rem', fontSize: '1.25rem' }}>{QUESTIONS[step]}</h3>
                    <textarea className="input-field" style={{ minHeight: '150px' }} value={answers[step]} onChange={handleInputChange} />
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem' }}>
                        <button onClick={handleBack} disabled={step === 0} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'transparent', border: 'none', color: step === 0 ? 'transparent' : 'var(--muted)', cursor: 'pointer' }}>
                            <ArrowLeft size={18} /> Back
                        </button>
                        <button onClick={handleNext} className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', minWidth: '140px', justifyContent: 'center' }}>
                            {step === QUESTIONS.length - 1 ? (generating ? 'Analyzing...' : 'Analyze Market Gap') : 'Next Question'}
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
