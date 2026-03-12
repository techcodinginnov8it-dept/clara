'use client'

import React, { useState, useEffect, useRef } from 'react'
import DashboardLayout from '@/components/DashboardLayout'
import { ArrowLeft, ArrowRight, Download, Loader2, GraduationCap, Sparkles, Send, MessageSquare, CheckCircle2, BookOpen, HelpCircle } from 'lucide-react'
import LMSCourseViewer from '@/components/LMSCourseViewer'

interface Message {
    role: 'user' | 'assistant'
    content: string
}

type Course = {
    id: string
    title: string
    description: string
    pricingTier: string
    tone: string
    moduleCount: number
    content: string
    thumbnailUrl?: string
    createdAt: string
}

export default function CourseArchitectPage() {
    const [view, setView] = useState<'start' | 'chat' | 'viewer' | 'library'>('library')
    const [courses, setCourses] = useState<Course[]>([])
    const [messages, setMessages] = useState<Message[]>([])
    const [input, setInput] = useState('')
    const [loading, setLoading] = useState(true)
    const [chatLoading, setChatLoading] = useState(false)
    const [generating, setGenerating] = useState(false)
    const [generationProgress, setGenerationProgress] = useState(0)
    const [generationStep, setGenerationStep] = useState('')
    const [canGenerate, setCanGenerate] = useState(false)
    const [selectedCourse, setSelectedCourse] = useState<Course | null>(null)
    const [messagingData, setMessagingData] = useState<any>(null)
    const messagesEndRef = useRef<HTMLDivElement>(null)

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }

    useEffect(() => {
        scrollToBottom()
    }, [messages])

    useEffect(() => {
        fetchLibrary()
    }, [])

    const fetchLibrary = async () => {
        try {
            const res = await fetch('/api/courses')
            const data = await res.json()
            setCourses(data.courses || [])
        } finally {
            setLoading(false)
        }
    }

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
        setChatLoading(true)
        const data = await fetchMessagingData()
        setMessagingData(data)

        const greeting: Message = {
            role: 'assistant',
            content: `Hi! I'm Clara, your course architect. I've reviewed your messaging framework and I'm excited to help you create a comprehensive online course.

Let's start with the transformation you want to create. What specific skill, knowledge, or outcome will your students achieve by the end of this course?`
        }

        setMessages([greeting])
        setView('chat')
        setChatLoading(false)
    }

    const handleSend = async () => {
        if (!input.trim() || chatLoading) return

        const userMessage = input.trim()
        setInput('')

        const newMessages = [...messages, { role: 'user' as const, content: userMessage }]
        setMessages(newMessages)
        setChatLoading(true)

        try {
            const response = await fetch('/api/courses/chat', {
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
            setChatLoading(false)
        }
    }

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault()
            handleSend()
        }
    }

    const generateCourse = async () => {
        setGenerating(true)
        setGenerationProgress(0)
        setGenerationStep('Analyzing your conversation...')

        try {
            // Step 1: Generate course content (0-60%)
            setGenerationProgress(10)
            setGenerationStep('Creating course structure...')

            const contentResponse = await fetch('/api/courses/generate', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    conversationHistory: messages,
                    messagingData,
                    moduleCount: 6,
                    tone: 'Professional & Assuring'
                })
            })

            if (!contentResponse.ok) {
                const errorData = await contentResponse.json()
                console.error('Course generation failed:', errorData)
                throw new Error(errorData.error || 'Failed to generate course')
            }

            setGenerationProgress(40)
            setGenerationStep('Generating modules and lessons...')

            const contentData = await contentResponse.json()

            setGenerationProgress(60)
            setGenerationStep('Creating AI-powered thumbnail...')

            // Step 2: Generate thumbnail (60-80%)
            const thumbnailResponse = await fetch('/api/courses/generate-thumbnail', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    title: contentData.content.title,
                    description: contentData.content.description
                })
            })

            const thumbnailData = await thumbnailResponse.json()

            setGenerationProgress(80)
            setGenerationStep('Saving your course...')

            // Step 3: Save course (80-100%)
            const saveResponse = await fetch('/api/courses', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    title: contentData.content.title,
                    description: contentData.content.description,
                    pricingTier: 'Custom',
                    tone: 'Professional & Assuring',
                    moduleCount: contentData.content.modules?.length || 6,
                    content: JSON.stringify(contentData.content),
                    thumbnailUrl: thumbnailData.thumbnailUrl
                })
            })

            if (!saveResponse.ok) {
                const errorData = await saveResponse.json()
                console.error('Save course failed:', errorData)
                console.error('Response status:', saveResponse.status)
                throw new Error(errorData.details || errorData.error || 'Failed to save course')
            }

            setGenerationProgress(100)
            setGenerationStep('Complete! Loading your course...')

            const savedCourse = await saveResponse.json()
            console.log('Course saved successfully:', savedCourse)
            setCourses([savedCourse, ...courses])
            setSelectedCourse(savedCourse)

            // Small delay to show completion
            await new Promise(resolve => setTimeout(resolve, 500))
            setView('viewer')
        } catch (err: any) {
            console.error('Course generation error:', err)
            alert(err.message || 'Error generating course. Please try again.')
        } finally {
            setGenerating(false)
            setGenerationProgress(0)
            setGenerationStep('')
        }
    }

    const safeParse = (str: any) => {
        if (typeof str !== 'string') return str
        try {
            return JSON.parse(str)
        } catch (e) {
            console.error("JSON Parse Error:", e)
            return null
        }
    }

    const downloadCourse = (course: Course) => {
        const content = safeParse(course.content)
        if (!content) return

        let html = `<h1>${course.title}</h1><p><b>Description:</b> ${content.description || course.description}</p><p><b>Summary:</b> ${content.summary || ''}</p><hr>`
        html += `<h2>Introduction</h2><p>${content.intro || ''}</p>`

        if (content.modules) {
            content.modules.forEach((mod: any, i: number) => {
                html += `<h2>Module ${i + 1}: ${mod.title}</h2><p><b>Learning Outcome:</b> ${mod.outcome}</p><h3>Lessons:</h3><ul>`
                if (mod.lessons) {
                    mod.lessons.forEach((lesson: any) => {
                        // Handle both string lessons (old format) and object lessons (new format)
                        const lessonTitle = typeof lesson === 'string' ? lesson : lesson.title
                        const lessonContent = typeof lesson === 'object' && lesson.content ? lesson.content : ''

                        html += `<li><b>${lessonTitle}</b>`
                        if (lessonContent) {
                            html += `<p>${lessonContent.replace(/\n/g, '</p><p>')}</p>`
                        }
                        html += `</li>`
                    })
                }
                html += `</ul>`

                if (mod.quiz && mod.quiz.length > 0) {
                    html += `<h3>Quiz Questions:</h3><ol>`
                    mod.quiz.forEach((q: any) => {
                        html += `<li><b>${q.question}</b><ul>`
                        q.options.forEach((opt: string, idx: number) => {
                            html += `<li${idx === q.correctAnswer ? ' style="color: green; font-weight: bold;"' : ''}>${opt}${idx === q.correctAnswer ? ' ✓' : ''}</li>`
                        })
                        html += `</ul><p><i>Explanation: ${q.explanation || ''}</i></p></li>`
                    })
                    html += `</ol>`
                }
            })
        }

        html += `<h2>Conclusion</h2><p>${content.conclusion || ''}</p>`

        const blob = new Blob(['\ufeff', `<html><head><meta charset='utf-8'></head><body>${html}</body></html>`], { type: 'application/msword' })
        const link = document.createElement("a")
        link.href = URL.createObjectURL(blob)
        link.download = `${course.title.replace(/\s+/g, '_')}_Complete_Course.doc`
        link.click()
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
                        <GraduationCap size={60} color="white" />
                    </div>

                    <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>AI Course Architect</h1>
                    <p style={{ color: 'var(--muted)', fontSize: '1.25rem', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem' }}>
                        Let Clara guide you through creating a complete online course with modules, lessons, quizzes, and an AI-generated thumbnail.
                    </p>

                    <div className="glass-card" style={{ padding: '2rem', textAlign: 'left', marginBottom: '2rem' }}>
                        <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                            <CheckCircle2 size={24} color="var(--primary)" />
                            What You'll Get
                        </h3>
                        <ul style={{ color: 'var(--muted)', lineHeight: '2', listStyle: 'none', padding: 0 }}>
                            <li>✓ Complete course with title, description & summary</li>
                            <li>✓ Structured modules with learning outcomes</li>
                            <li>✓ Detailed lessons for each module</li>
                            <li>✓ Quiz questions with explanations</li>
                            <li>✓ AI-generated course thumbnail</li>
                            <li>✓ Downloadable course document</li>
                        </ul>
                    </div>

                    <button
                        onClick={startConversation}
                        disabled={chatLoading}
                        className="btn-primary"
                        style={{
                            fontSize: '1.125rem',
                            padding: '1rem 3rem',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.75rem'
                        }}
                    >
                        {chatLoading ? (
                            <>
                                <Loader2 size={24} className="spin" />
                                Loading Your Messaging...
                            </>
                        ) : (
                            <>
                                <MessageSquare size={24} />
                                Start Course Conversation
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
                            Course Design Session with Clara
                        </h2>
                        <p style={{ color: 'var(--muted)', marginTop: '0.5rem' }}>
                            Answer thoughtfully - your responses will shape your course structure
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
                                            : 'rgba(255, 255, 255, 0.05)',
                                        border: message.role === 'assistant' ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
                                        whiteSpace: 'pre-wrap',
                                        lineHeight: '1.7',
                                        fontSize: '0.9375rem'
                                    }}>
                                        {message.content}
                                    </div>
                                </div>
                            ))}
                            {chatLoading && (
                                <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                                    <div style={{
                                        padding: '1.25rem 1.5rem',
                                        borderRadius: '16px',
                                        background: 'var(--glass-bg)',
                                        border: '1px solid var(--glass-border)',
                                        color: 'var(--foreground)',
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
                            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                            background: 'var(--glass-bg)',
                            backdropFilter: 'blur(10px)',
                            borderBottom: '1px solid var(--glass-border)',
                        }}>
                            {canGenerate && (
                                <div style={{ marginBottom: '1rem' }}>
                                    {generating ? (
                                        <div style={{
                                            background: 'rgba(249, 115, 22, 0.1)',
                                            border: '1px solid var(--primary)',
                                            borderRadius: '12px',
                                            padding: '1.5rem',
                                            textAlign: 'center'
                                        }}>
                                            <div style={{ marginBottom: '1rem' }}>
                                                <Loader2 size={32} className="spin" color="var(--primary)" style={{ margin: '0 auto' }} />
                                            </div>
                                            <h4 style={{ fontSize: '1rem', marginBottom: '0.75rem', color: 'var(--foreground)' }}>
                                                {generationStep}
                                            </h4>
                                            <div style={{
                                                width: '100%',
                                                height: '8px',
                                                background: 'rgba(255, 255, 255, 0.1)',
                                                borderRadius: '4px',
                                                overflow: 'hidden',
                                                marginBottom: '0.5rem'
                                            }}>
                                                <div style={{
                                                    width: `${generationProgress}%`,
                                                    height: '100%',
                                                    background: 'linear-gradient(90deg, #f97316 0%, #c2410c 100%)',
                                                    transition: 'width 0.5s ease',
                                                    borderRadius: '4px'
                                                }} />
                                            </div>
                                            <p style={{ fontSize: '0.875rem', color: 'var(--muted)', margin: 0 }}>
                                                {generationProgress}% Complete • This may take 45-60 seconds
                                            </p>
                                        </div>
                                    ) : (
                                        <div style={{ textAlign: 'center' }}>
                                            <button
                                                onClick={generateCourse}
                                                className="btn-primary"
                                                style={{
                                                    display: 'inline-flex',
                                                    alignItems: 'center',
                                                    gap: '0.5rem',
                                                    padding: '0.75rem 2rem'
                                                }}
                                            >
                                                <GraduationCap size={18} />
                                                Generate Complete Course
                                            </button>
                                        </div>
                                    )}
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
                                    disabled={chatLoading}
                                />
                                <button
                                    onClick={handleSend}
                                    disabled={!input.trim() || chatLoading}
                                    className="btn-primary"
                                    style={{
                                        padding: '1rem 1.5rem',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                        opacity: (!input.trim() || chatLoading) ? 0.5 : 1,
                                        cursor: (!input.trim() || chatLoading) ? 'not-allowed' : 'pointer'
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

    // Course Viewer
    if (view === 'viewer' && selectedCourse) {
        const content = safeParse(selectedCourse.content)

        return (
            <DashboardLayout>
                <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <button onClick={() => setView('library')} style={{ background: 'transparent', border: 'none', color: 'var(--muted)', cursor: 'pointer' }}><ArrowLeft size={24} /></button>
                            <div>
                                <h2 style={{ fontSize: '2rem' }}>{content?.title || selectedCourse.title}</h2>
                                <p style={{ color: '#4ade80', fontSize: '0.875rem', fontWeight: '600' }}>✓ Complete Course Generated</p>
                            </div>
                        </div>
                        <button onClick={() => downloadCourse(selectedCourse)} className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <Download size={18} /> Download Course
                        </button>
                    </div>

                    {selectedCourse.thumbnailUrl && (
                        <div style={{ marginBottom: '3rem', borderRadius: '12px', overflow: 'hidden' }}>
                            <img 
                                src={selectedCourse.thumbnailUrl} 
                                alt={content?.title || selectedCourse.title} 
                                style={{ width: '100%', maxHeight: '400px', objectFit: 'cover' }} 
                                onError={(e) => { e.currentTarget.src = 'https://placehold.co/1024x1024/ea580c/ffffff?text=Course+Thumbnail' }}
                            />
                        </div>
                    )}

                    <div className="glass-card" style={{ padding: '3rem', marginBottom: '2rem' }}>
                        {content ? (
                            <>
                                <div style={{ marginBottom: '3rem' }}>
                                    <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--primary)' }}>Description</h3>
                                    <p style={{ color: 'var(--foreground)', lineHeight: '1.8', fontSize: '1.0625rem' }}>{content.description}</p>
                                </div>

                                <div style={{ marginBottom: '3rem' }}>
                                    <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--primary)' }}>Summary</h3>
                                    <p style={{ color: 'var(--foreground)', lineHeight: '1.8', fontSize: '1.0625rem' }}>{content.summary}</p>
                                </div>

                                <div style={{ marginBottom: '3rem' }}>
                                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--primary)' }}>Introduction</h3>
                                    <p style={{ color: 'var(--foreground)', lineHeight: '1.8', fontSize: '1.0625rem', whiteSpace: 'pre-wrap' }}>{content.intro}</p>
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                                    {content.modules?.map((mod: any, i: number) => (
                                        <div key={i} style={{ borderLeft: '3px solid var(--primary)', paddingLeft: '2rem' }}>
                                            <h4 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Module {i + 1}: {mod.title}</h4>
                                            <p style={{ color: 'var(--muted)', marginBottom: '1.5rem', fontSize: '1rem' }}><b>Learning Outcome:</b> {mod.outcome}</p>

                                            <div style={{ marginBottom: '1.5rem' }}>
                                                <h5 style={{ fontSize: '1.125rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                                    <BookOpen size={20} color="var(--primary)" /> Lessons
                                                </h5>
                                                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                                    {mod.lessons?.map((lesson: any, li: number) => {
                                                        const lessonTitle = typeof lesson === 'string' ? lesson : lesson.title
                                                        return (
                                                            <li key={li} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--foreground)', opacity: 0.9 }}>
                                                                <CheckCircle2 size={16} color="var(--primary)" /> {lessonTitle}
                                                            </li>
                                                        )
                                                    })}
                                                </ul>
                                            </div>

                                            {mod.quiz && mod.quiz.length > 0 && (
                                                <div>
                                                    <h5 style={{ fontSize: '1.125rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                                        <HelpCircle size={20} color="var(--primary)" /> Quiz
                                                    </h5>
                                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                                        {mod.quiz.map((q: any, qi: number) => (
                                                            <div key={qi} style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '1.5rem', borderRadius: '8px' }}>
                                                                <p style={{ fontWeight: '600', marginBottom: '1rem', fontSize: '1rem' }}>{qi + 1}. {q.question}</p>
                                                                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                                                    {q.options?.map((opt: string, oi: number) => (
                                                                        <li key={oi} style={{
                                                                            padding: '0.75rem',
                                                                            borderRadius: '6px',
                                                                            background: oi === q.correctAnswer ? 'rgba(74, 222, 128, 0.1)' : 'rgba(255, 255, 255, 0.02)',
                                                                            border: oi === q.correctAnswer ? '1px solid #4ade80' : '1px solid rgba(255, 255, 255, 0.05)',
                                                                            color: oi === q.correctAnswer ? '#4ade80' : 'var(--foreground)',
                                                                            fontWeight: oi === q.correctAnswer ? '600' : '400'
                                                                        }}>
                                                                            {opt} {oi === q.correctAnswer && '✓'}
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                                {q.explanation && (
                                                                    <p style={{ marginTop: '1rem', fontSize: '0.875rem', color: 'var(--muted)', fontStyle: 'italic' }}>
                                                                        💡 {q.explanation}
                                                                    </p>
                                                                )}
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>

                                <div style={{ marginTop: '4rem', paddingTop: '3rem', borderTop: '1px solid var(--border)' }}>
                                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--primary)' }}>Conclusion</h3>
                                    <p style={{ color: 'var(--foreground)', lineHeight: '1.8', fontSize: '1.0625rem', whiteSpace: 'pre-wrap' }}>{content.conclusion}</p>
                                </div>
                            </>
                        ) : (
                            <p style={{ textAlign: 'center', color: 'var(--muted)' }}>Error loading course content.</p>
                        )}
                    </div>

                    <div style={{ textAlign: 'center', marginTop: '3rem', paddingBottom: '4rem' }}>
                        <button onClick={() => setView('library')} style={{ background: 'transparent', border: '1px solid var(--border)', color: 'white', padding: '0.75rem 2rem', borderRadius: 'var(--radius)', cursor: 'pointer' }}>Back to Library</button>
                    </div>
                </div>
                <style jsx>{`.spin { animation: spin 1s linear infinite; } @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
            </DashboardLayout>
        )
    }

    // LMS Course Viewer
    if (view === 'viewer' && selectedCourse) {
        return (
            <LMSCourseViewer
                course={selectedCourse}
                onBack={() => setView('library')}
                onDownload={() => downloadCourse(selectedCourse)}
            />
        )
    }

    // Library View
    return (
        <DashboardLayout>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
                    <div>
                        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Course Architect</h1>
                        <p style={{ color: 'var(--muted)' }}>Create comprehensive online courses with AI assistance</p>
                    </div>
                    <button onClick={() => setView('start')} className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <GraduationCap size={18} /> Architect New Course
                    </button>
                </div>

                {loading ? (
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
                        <Loader2 className="spin" size={40} />
                    </div>
                ) : courses.length === 0 ? (
                    <div className="glass-card" style={{ padding: '5rem 2rem', textAlign: 'center' }}>
                        <div style={{ background: 'rgba(249, 115, 22, 0.1)', width: '80px', height: '80px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem' }}>
                            <GraduationCap size={40} color="var(--primary)" />
                        </div>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>No Courses Yet</h2>
                        <p style={{ color: 'var(--muted)', maxWidth: '400px', margin: '0 auto 2rem' }}>Your course library is empty. Click the button above to start creating your first AI-powered course.</p>
                    </div>
                ) : (
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '1.5rem' }}>
                        {courses.map(course => {
                            const content = safeParse(course.content)
                            return (
                                <div key={course.id} className="glass-card" onClick={() => { setSelectedCourse(course); setView('viewer'); }} style={{ padding: 0, cursor: 'pointer', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                                    {course.thumbnailUrl && (
                                        <div style={{ width: '100%', height: '200px', overflow: 'hidden' }}>
                                            <img 
                                                src={course.thumbnailUrl} 
                                                alt={content?.title || course.title} 
                                                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                                                onError={(e) => { e.currentTarget.src = 'https://placehold.co/1024x1024/ea580c/ffffff?text=Course+Thumbnail' }}
                                            />
                                        </div>
                                    )}
                                    <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem', flex: 1 }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                            <span style={{ fontSize: '0.65rem', padding: '0.2rem 0.6rem', background: 'rgba(249,115,22,0.1)', color: 'var(--primary)', borderRadius: '4px', fontWeight: '700', textTransform: 'uppercase' }}>{course.moduleCount} Modules</span>
                                            <span style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>{new Date(course.createdAt).toLocaleDateString()}</span>
                                        </div>
                                        <h3 style={{ fontSize: '1.25rem' }}>{content?.title || course.title}</h3>
                                        <p style={{ color: 'var(--muted)', fontSize: '0.875rem', lineHeight: '1.5', flex: 1 }}>{content?.description || course.description}</p>
                                        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1rem' }}>
                                            <button onClick={(e) => { e.stopPropagation(); downloadCourse(course); }} className="btn-primary" style={{ padding: '0.5rem', borderRadius: '8px' }}>
                                                <Download size={16} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                )}
            </div>
            <style jsx>{`.spin { animation: spin 1s linear infinite; } @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
        </DashboardLayout>
    )
}
