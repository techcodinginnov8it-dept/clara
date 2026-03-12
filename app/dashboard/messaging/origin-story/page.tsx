'use client'

import React, { useState } from 'react'
import DashboardLayout from '@/components/DashboardLayout'
import AICopyEditor from '@/components/AICopyEditor'
import SplitPanelLayout from '@/components/SplitPanelLayout'
import { ArrowLeft, ArrowRight, Save, Download, RefreshCw, CheckCircle2, Sparkles } from 'lucide-react'

const QUESTIONS = [
    "Describe your life before you started your business",
    "What was the turning point or realization that made you start your business?",
    "What first steps did you take to start your business?",
    "What challenges hit you right away?",
    "Describe a moment when you almost gave up",
    "What helped you find the strength to keep going?",
    "What was your breakthrough or ‘aha’ moment?",
    "What personal growth came from that moment?",
    "The Golden Thread: What ties your whole journey together?",
    "What results or milestones have you achieved since then?",
    "How does your story inspire and connect with your audience?"
]

export default function OriginStoryPage() {
    const [step, setStep] = useState(0)
    const [answers, setAnswers] = useState(Array(QUESTIONS.length).fill(""))
    const [generating, setGenerating] = useState(false)
    const [result, setResult] = useState<string | null>(null)
    const [loading, setLoading] = useState(true)
    const [editMode, setEditMode] = useState(false)

    // Fetch initial data
    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/api/messaging/origin-story')
                const data = await res.json()
                if (data.answers && data.answers.length > 0) {
                    setAnswers(data.answers)
                }
                if (data.story) {
                    setResult(data.story)
                }
            } catch (err) {
                console.error("Failed to load saved data")
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [])

    const saveProgress = async (newAnswers: string[], newStory: string | null = null) => {
        try {
            await fetch('/api/messaging/origin-story', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ answers: newAnswers, story: newStory })
            })
        } catch (err) {
            console.error("Failed to save progress")
        }
    }

    const handleNext = () => {
        saveProgress(answers)
        if (step < QUESTIONS.length - 1) {
            setStep(step + 1)
        } else {
            generateStory()
        }
    }

    const handleBack = () => {
        if (step > 0) setStep(step - 1)
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newAnswers = [...answers]
        newAnswers[step] = e.target.value
        setAnswers(newAnswers)
    }

    const generateStory = async () => {
        setGenerating(true)
        try {
            const response = await fetch('/api/generate/origin-story', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ answers })
            })
            const data = await response.json()
            setResult(data.story)
            saveProgress(answers, data.story)
        } catch (error) {
            alert("Error generating story. Please try again.")
        } finally {
            setGenerating(false)
        }
    }

    const downloadStory = () => {
        if (!result) return
        const header = "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Master Artisan Origin Narrative</title></head><body>";
        const footer = "</body></html>";
        const sourceHTML = header + result.replace(/\n/g, "<br>") + footer;

        const file = new Blob(['\ufeff', sourceHTML], {
            type: 'application/msword'
        });

        const element = document.createElement("a")
        element.href = URL.createObjectURL(file)
        element.download = "Master_Artisan_Origin_Narrative.doc"
        document.body.appendChild(element)
        element.click()
        document.body.removeChild(element)
    }

    if (loading) {
        return (
            <DashboardLayout>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
                    <RefreshCw className="spin" />
                </div>
            </DashboardLayout>
        )
    }

    if (result) {
        // AI Editor Mode
        if (editMode) {
            return (
                <DashboardLayout>
                    <div style={{ marginBottom: '1.5rem' }}>
                        <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <Sparkles size={24} color="#fb923c" />
                            Refining Your Origin Story
                        </h2>
                        <p style={{ color: 'var(--muted)', marginTop: '0.5rem' }}>
                            Use the AI assistant to perfect your copy, then make it final when you're satisfied.
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
                                moduleType="origin-story"
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
                                        onClick={downloadStory}
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
                        <h2>Master Artisan Origin Narrative</h2>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <button
                                onClick={() => setEditMode(true)}
                                className="btn-secondary"
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    background: 'transparent',
                                    border: '1px solid var(--border)',
                                    color: 'white',
                                    padding: '0.5rem 1rem',
                                    borderRadius: 'var(--radius)',
                                    cursor: 'pointer'
                                }}
                            >
                                <Sparkles size={16} /> Edit with AI
                            </button>
                            <button onClick={downloadStory} className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Download size={16} /> Download Document
                            </button>
                        </div>
                    </div>

                    <div className="glass-card" style={{ padding: '3rem', whiteSpace: 'pre-wrap', lineHeight: '1.8', fontStyle: 'Inter' }}>
                        {result}
                    </div>
                </div>
            </DashboardLayout>
        )
    }

    return (
        <DashboardLayout>
            <div style={{ maxWidth: '700px', margin: '0 auto' }}>
                <div style={{ marginBottom: '2.5rem', textAlign: 'center' }}>
                    <span style={{ color: 'var(--primary)', fontWeight: '700', fontSize: '0.75rem', textTransform: 'uppercase' }}>Module 1: Step 1</span>
                    <h2 style={{ fontSize: '2rem', marginTop: '0.5rem' }}>Crafting Your Origin Story</h2>
                    <div style={{ width: '100%', height: '4px', background: 'rgba(255,255,255,0.05)', borderRadius: '2px', marginTop: '1.5rem', position: 'relative' }}>
                        <div style={{ width: `${((step + 1) / QUESTIONS.length) * 100}%`, height: '100%', background: 'var(--primary)', borderRadius: '2px', transition: 'width 0.3s ease' }} />
                    </div>
                    <p style={{ color: 'var(--muted)', marginTop: '1rem', fontSize: '0.875rem' }}>Question {step + 1} of {QUESTIONS.length}</p>
                </div>

                <div className="glass-card" style={{ padding: '2.5rem' }}>
                    <h3 style={{ marginBottom: '1.5rem', fontSize: '1.25rem' }}>{QUESTIONS[step]}</h3>
                    <textarea
                        className="input-field"
                        style={{ minHeight: '150px', resize: 'vertical', fontSize: '1rem', lineHeight: '1.5' }}
                        placeholder="Type your answer here..."
                        value={answers[step]}
                        onChange={handleInputChange}
                    />

                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem' }}>
                        <button
                            onClick={handleBack}
                            disabled={step === 0}
                            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'transparent', border: 'none', color: step === 0 ? 'transparent' : 'var(--muted)', cursor: 'pointer' }}
                        >
                            <ArrowLeft size={18} /> Back
                        </button>

                        <button onClick={handleNext} className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', minWidth: '140px', justifyContent: 'center' }}>
                            {step === QUESTIONS.length - 1 ? (generating ? 'Generating...' : 'Finish & Generate') : 'Next Question'}
                            {!generating && <ArrowRight size={18} />}
                            {generating && <RefreshCw size={18} className="spin" />}
                        </button>
                    </div>
                </div>
            </div>

            <style jsx>{`
        .spin { animation: spin 1s linear infinite; }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>
        </DashboardLayout>
    )
}
