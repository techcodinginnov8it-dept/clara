'use client'

import React, { useState } from 'react'
import DashboardLayout from '@/components/DashboardLayout'
import { ArrowLeft, ArrowRight, Download, GraduationCap, CheckCircle2, BookOpen, HelpCircle } from 'lucide-react'

interface LMSViewerProps {
    course: any
    onBack: () => void
    onDownload: () => void
}

export default function LMSCourseViewer({ course, onBack, onDownload }: LMSViewerProps) {
    const [activeModuleIndex, setActiveModuleIndex] = useState(0)
    const [activeLessonIndex, setActiveLessonIndex] = useState(0)
    const [showQuiz, setShowQuiz] = useState(false)

    const safeParse = (str: any) => {
        if (typeof str !== 'string') return str
        try {
            return JSON.parse(str)
        } catch (e) {
            return null
        }
    }

    const content = safeParse(course.content)
    if (!content) return <div>Error loading course</div>

    const activeModule = content.modules?.[activeModuleIndex]
    const totalModules = content.modules?.length || 0
    const isOverview = activeModuleIndex === 0 && activeLessonIndex === 0 && !showQuiz

    return (
        <DashboardLayout>
            <div className="lms-shell">
                {/* Sidebar Navigation */}
                <div className="lms-sidebar">
                    {/* Header */}
                    <div className="glass-card" style={{ padding: '1.5rem' }}>
                        <button
                            onClick={onBack}
                            style={{
                                background: 'transparent',
                                border: 'none',
                                color: 'var(--muted)',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                marginBottom: '1rem',
                                fontSize: '0.875rem'
                            }}
                        >
                            <ArrowLeft size={16} /> Back to Library
                        </button>
                        <h3 style={{ fontSize: '1.125rem', marginBottom: '0.5rem' }}>{content.title}</h3>
                        <p style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>{totalModules} Modules</p>
                    </div>

                    {/* Course Thumbnail */}
                    {course.thumbnailUrl && (
                        <div style={{ borderRadius: '12px', overflow: 'hidden' }}>
                            <img
                                src={course.thumbnailUrl}
                                alt={content.title}
                                style={{ width: '100%', height: 'auto', display: 'block' }}
                            />
                        </div>
                    )}

                    {/* Module Navigation */}
                    <div className="glass-card lms-sidebar-scroll">
                        <h4 style={{ fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--muted)', marginBottom: '0.5rem' }}>Course Content</h4>

                        {content.modules?.map((module: any, moduleIdx: number) => (
                            <div key={moduleIdx} style={{ marginBottom: '0.5rem' }}>
                                <div
                                    onClick={() => {
                                        setActiveModuleIndex(moduleIdx)
                                        setActiveLessonIndex(0)
                                        setShowQuiz(false)
                                    }}
                                    style={{
                                        padding: '0.75rem',
                                        borderRadius: '8px',
                                        background: activeModuleIndex === moduleIdx ? 'rgba(249, 115, 22, 0.15)' : 'rgba(255, 255, 255, 0.03)',
                                        border: activeModuleIndex === moduleIdx ? '1px solid var(--primary)' : '1px solid transparent',
                                        cursor: 'pointer',
                                        transition: 'all 0.2s',
                                        marginBottom: '0.25rem'
                                    }}
                                >
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <BookOpen size={16} color={activeModuleIndex === moduleIdx ? 'var(--primary)' : 'var(--muted)'} />
                                        <span style={{
                                            fontSize: '0.875rem',
                                            fontWeight: activeModuleIndex === moduleIdx ? '600' : '400',
                                            color: activeModuleIndex === moduleIdx ? 'var(--primary)' : 'var(--foreground)'
                                        }}>
                                            Module {moduleIdx + 1}
                                        </span>
                                    </div>
                                    <p style={{
                                        fontSize: '0.75rem',
                                        color: 'var(--muted)',
                                        marginTop: '0.25rem',
                                        marginLeft: '1.5rem',
                                        lineHeight: '1.4'
                                    }}>
                                        {module.title}
                                    </p>
                                </div>

                                {/* Lessons for active module */}
                                {activeModuleIndex === moduleIdx && (
                                    <div style={{ marginLeft: '1rem', marginTop: '0.25rem', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                                        {module.lessons?.map((lesson: any, lessonIdx: number) => {
                                            const lessonTitle = typeof lesson === 'string' ? lesson : lesson.title
                                            return (
                                                <div
                                                    key={lessonIdx}
                                                    onClick={() => {
                                                        setActiveLessonIndex(lessonIdx)
                                                        setShowQuiz(false)
                                                    }}
                                                    style={{
                                                        padding: '0.5rem 0.75rem',
                                                        borderRadius: '6px',
                                                        background: activeLessonIndex === lessonIdx && !showQuiz ? 'rgba(249, 115, 22, 0.1)' : 'transparent',
                                                        cursor: 'pointer',
                                                        fontSize: '0.8125rem',
                                                        color: activeLessonIndex === lessonIdx && !showQuiz ? 'var(--primary)' : 'var(--muted)',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: '0.5rem',
                                                        transition: 'all 0.2s'
                                                    }}
                                                >
                                                    <CheckCircle2 size={14} />
                                                    <span style={{ flex: 1, lineHeight: '1.3' }}>{lessonTitle}</span>
                                                </div>
                                            )
                                        })}

                                        {/* Quiz button */}
                                        {module.quiz && module.quiz.length > 0 && (
                                            <div
                                                onClick={() => setShowQuiz(true)}
                                                style={{
                                                    padding: '0.5rem 0.75rem',
                                                    borderRadius: '6px',
                                                    background: showQuiz ? 'rgba(139, 92, 246, 0.15)' : 'rgba(139, 92, 246, 0.05)',
                                                    border: showQuiz ? '1px solid #8b5cf6' : '1px solid transparent',
                                                    cursor: 'pointer',
                                                    fontSize: '0.8125rem',
                                                    color: showQuiz ? '#a78bfa' : 'var(--muted)',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '0.5rem',
                                                    transition: 'all 0.2s',
                                                    fontWeight: '600'
                                                }}
                                            >
                                                <HelpCircle size={14} />
                                                <span>Quiz ({module.quiz.length})</span>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Download Button */}
                    <button
                        onClick={onDownload}
                        className="btn-primary"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '0.5rem',
                            padding: '0.875rem'
                        }}
                    >
                        <Download size={18} /> Download Course
                    </button>
                </div>

                {/* Main Content Area */}
                <div className="lms-content">
                    <div className="glass-card lms-content-card" style={{ minHeight: '100%' }}>
                        {/* Course Overview */}
                        {isOverview && (
                            <>
                                <div style={{ marginBottom: '3rem' }}>
                                    <h1 style={{ fontSize: 'clamp(1.9rem, 5vw, 2.5rem)', marginBottom: '1rem', wordBreak: 'break-word' }}>{content.title}</h1>
                                    <div style={{
                                        display: 'inline-block',
                                        padding: '0.5rem 1rem',
                                        background: 'rgba(74, 222, 128, 0.1)',
                                        border: '1px solid #4ade80',
                                        borderRadius: '20px',
                                        color: '#4ade80',
                                        fontSize: '0.875rem',
                                        fontWeight: '600',
                                        marginBottom: '2rem'
                                    }}>
                                        ✓ Complete Course
                                    </div>
                                </div>

                                <div style={{ marginBottom: '3rem' }}>
                                    <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--primary)' }}>Description</h3>
                                    <p style={{ color: 'var(--foreground)', lineHeight: '1.8', fontSize: '1.0625rem' }}>{content.description}</p>
                                </div>

                                <div style={{ marginBottom: '3rem' }}>
                                    <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--primary)' }}>Summary</h3>
                                    <p style={{ color: 'var(--foreground)', lineHeight: '1.8', fontSize: '1.0625rem' }}>{content.summary}</p>
                                </div>

                                <div style={{ marginBottom: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--border)' }}>
                                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--primary)' }}>Introduction</h3>
                                    <p style={{ color: 'var(--foreground)', lineHeight: '1.8', fontSize: '1.0625rem', whiteSpace: 'pre-wrap' }}>{content.intro}</p>
                                </div>

                                <div style={{
                                    background: 'rgba(249, 115, 22, 0.1)',
                                    border: '1px solid var(--primary)',
                                    borderRadius: '12px',
                                    padding: '2rem',
                                    textAlign: 'center'
                                }}>
                                    <GraduationCap size={48} color="var(--primary)" style={{ margin: '0 auto 1rem' }} />
                                    <h4 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Ready to Start Learning?</h4>
                                    <p style={{ color: 'var(--muted)', marginBottom: '1.5rem' }}>Click on any module or lesson in the sidebar to begin</p>
                                </div>
                            </>
                        )}

                        {/* Lesson Content */}
                        {!showQuiz && !isOverview && activeModule && (
                            <>
                                <div style={{ marginBottom: '2rem' }}>
                                    <div style={{ fontSize: '0.875rem', color: 'var(--muted)', marginBottom: '0.5rem' }}>
                                        Module {activeModuleIndex + 1} of {totalModules}
                                    </div>
                                    <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>{activeModule.title}</h2>
                                    <div style={{
                                        padding: '1rem 1.5rem',
                                        background: 'rgba(249, 115, 22, 0.1)',
                                        borderLeft: '3px solid var(--primary)',
                                        borderRadius: '8px',
                                        marginBottom: '2rem'
                                    }}>
                                        <p style={{ fontSize: '0.875rem', color: 'var(--muted)', marginBottom: '0.25rem' }}>Learning Outcome</p>
                                        <p style={{ fontSize: '1rem', color: 'var(--foreground)', fontWeight: '500' }}>{activeModule.outcome}</p>
                                    </div>
                                </div>

                                <div style={{ marginBottom: '3rem' }}>
                                    <h3 style={{
                                        fontSize: '1.5rem',
                                        marginBottom: '1.5rem',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.75rem'
                                    }}>
                                        <BookOpen size={24} color="var(--primary)" />
                                        {typeof activeModule.lessons?.[activeLessonIndex] === 'string'
                                            ? activeModule.lessons[activeLessonIndex]
                                            : activeModule.lessons?.[activeLessonIndex]?.title}
                                    </h3>

                                    <div style={{
                                        background: 'rgba(255, 255, 255, 0.02)',
                                        padding: '2rem',
                                        borderRadius: '12px',
                                        border: '1px solid rgba(255, 255, 255, 0.05)'
                                    }}>
                                        {/* Display actual lesson content if available */}
                                        {typeof activeModule.lessons?.[activeLessonIndex] === 'object' &&
                                            activeModule.lessons[activeLessonIndex]?.content ? (
                                            <div style={{
                                                color: 'var(--foreground)',
                                                lineHeight: '1.8',
                                                fontSize: '1.0625rem'
                                            }}>
                                                {activeModule.lessons[activeLessonIndex].content.split('\n').map((paragraph: string, idx: number) => (
                                                    <p key={idx} style={{ marginBottom: '1.5rem' }}>
                                                        {paragraph}
                                                    </p>
                                                ))}
                                            </div>
                                        ) : (
                                            <>
                                                <p style={{
                                                    color: 'var(--foreground)',
                                                    lineHeight: '1.8',
                                                    fontSize: '1.0625rem',
                                                    marginBottom: '2rem'
                                                }}>
                                                    This lesson covers the key concepts and practical applications for {
                                                        (typeof activeModule.lessons?.[activeLessonIndex] === 'string'
                                                            ? activeModule.lessons[activeLessonIndex]
                                                            : activeModule.lessons?.[activeLessonIndex]?.title)?.toLowerCase()
                                                    }.
                                                </p>

                                                <div style={{ marginBottom: '2rem' }}>
                                                    <h4 style={{ fontSize: '1.125rem', marginBottom: '1rem', color: 'var(--primary)' }}>Key Takeaways</h4>
                                                    <ul style={{
                                                        listStyle: 'none',
                                                        padding: 0,
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        gap: '0.75rem'
                                                    }}>
                                                        <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                                                            <CheckCircle2 size={20} color="var(--primary)" style={{ flexShrink: 0, marginTop: '0.125rem' }} />
                                                            <span style={{ color: 'var(--foreground)', lineHeight: '1.6' }}>
                                                                Understand the fundamental principles and concepts
                                                            </span>
                                                        </li>
                                                        <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                                                            <CheckCircle2 size={20} color="var(--primary)" style={{ flexShrink: 0, marginTop: '0.125rem' }} />
                                                            <span style={{ color: 'var(--foreground)', lineHeight: '1.6' }}>
                                                                Apply practical strategies and techniques
                                                            </span>
                                                        </li>
                                                        <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                                                            <CheckCircle2 size={20} color="var(--primary)" style={{ flexShrink: 0, marginTop: '0.125rem' }} />
                                                            <span style={{ color: 'var(--foreground)', lineHeight: '1.6' }}>
                                                                Implement real-world solutions and best practices
                                                            </span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </>
                                        )}

                                        {/* Navigation buttons */}
                                        <div className="lms-navigation-buttons" style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
                                            <button
                                                onClick={() => {
                                                    if (activeLessonIndex > 0) {
                                                        setActiveLessonIndex(activeLessonIndex - 1)
                                                    } else if (activeModuleIndex > 0) {
                                                        setActiveModuleIndex(activeModuleIndex - 1)
                                                        setActiveLessonIndex(content.modules[activeModuleIndex - 1].lessons.length - 1)
                                                    }
                                                }}
                                                disabled={activeModuleIndex === 0 && activeLessonIndex === 0}
                                                style={{
                                                    padding: '0.75rem 1.5rem',
                                                    background: 'transparent',
                                                    border: '1px solid var(--border)',
                                                    borderRadius: 'var(--radius)',
                                                    color: 'white',
                                                    width: '100%',
                                                    cursor: activeModuleIndex === 0 && activeLessonIndex === 0 ? 'not-allowed' : 'pointer',
                                                    opacity: activeModuleIndex === 0 && activeLessonIndex === 0 ? 0.5 : 1,
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '0.5rem'
                                                }}
                                            >
                                                <ArrowLeft size={16} /> Previous
                                            </button>

                                            <button
                                                onClick={() => {
                                                    const currentModule = content.modules[activeModuleIndex]
                                                    if (activeLessonIndex < currentModule.lessons.length - 1) {
                                                        setActiveLessonIndex(activeLessonIndex + 1)
                                                    } else if (currentModule.quiz && currentModule.quiz.length > 0) {
                                                        setShowQuiz(true)
                                                    } else if (activeModuleIndex < totalModules - 1) {
                                                        setActiveModuleIndex(activeModuleIndex + 1)
                                                        setActiveLessonIndex(0)
                                                    }
                                                }}
                                                className="btn-primary"
                                                style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '0.5rem',
                                                    justifyContent: 'center',
                                                    width: '100%'
                                                }}
                                            >
                                                Next <ArrowRight size={16} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}

                        {/* Quiz View */}
                        {showQuiz && activeModule?.quiz && (
                            <>
                                <div style={{ marginBottom: '2rem' }}>
                                    <div style={{ fontSize: '0.875rem', color: 'var(--muted)', marginBottom: '0.5rem' }}>
                                        Module {activeModuleIndex + 1} Quiz
                                    </div>
                                    <h2 style={{ fontSize: '2rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                        <HelpCircle size={32} color="#a78bfa" />
                                        Test Your Knowledge
                                    </h2>
                                    <p style={{ color: 'var(--muted)', fontSize: '1rem' }}>
                                        Complete this quiz to reinforce your learning from {activeModule.title}
                                    </p>
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                                    {activeModule.quiz.map((q: any, qi: number) => (
                                        <div key={qi} style={{
                                            background: 'rgba(139, 92, 246, 0.05)',
                                            padding: '2rem',
                                            borderRadius: '12px',
                                            border: '1px solid rgba(139, 92, 246, 0.2)'
                                        }}>
                                            <p style={{ fontWeight: '600', marginBottom: '1.5rem', fontSize: '1.125rem', color: 'var(--foreground)' }}>
                                                {qi + 1}. {q.question}
                                            </p>
                                            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
                                                {q.options?.map((opt: string, oi: number) => (
                                                    <li key={oi} style={{
                                                        padding: '1rem 1.25rem',
                                                        borderRadius: '8px',
                                                        background: oi === q.correctAnswer ? 'rgba(74, 222, 128, 0.1)' : 'rgba(255, 255, 255, 0.02)',
                                                        border: oi === q.correctAnswer ? '2px solid #4ade80' : '1px solid rgba(255, 255, 255, 0.05)',
                                                        color: oi === q.correctAnswer ? '#4ade80' : 'var(--foreground)',
                                                        fontWeight: oi === q.correctAnswer ? '600' : '400',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: '0.75rem'
                                                    }}>
                                                        {oi === q.correctAnswer && <CheckCircle2 size={20} color="#4ade80" />}
                                                        <span style={{ flex: 1 }}>{opt}</span>
                                                        {oi === q.correctAnswer && <span style={{ fontSize: '1.25rem' }}>✓</span>}
                                                    </li>
                                                ))}
                                            </ul>
                                            {q.explanation && (
                                                <div style={{
                                                    padding: '1rem 1.25rem',
                                                    background: 'rgba(249, 115, 22, 0.1)',
                                                    borderLeft: '3px solid var(--primary)',
                                                    borderRadius: '6px'
                                                }}>
                                                    <p style={{ fontSize: '0.875rem', color: 'var(--muted)', marginBottom: '0.25rem', fontWeight: '600' }}>
                                                        💡 Explanation
                                                    </p>
                                                    <p style={{ fontSize: '0.9375rem', color: 'var(--foreground)', lineHeight: '1.6' }}>
                                                        {q.explanation}
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>

                                {/* Quiz navigation */}
                                <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--border)' }}>
                                    <button
                                        onClick={() => {
                                            setShowQuiz(false)
                                            if (activeModuleIndex < totalModules - 1) {
                                                setActiveModuleIndex(activeModuleIndex + 1)
                                                setActiveLessonIndex(0)
                                            }
                                        }}
                                        className="btn-primary"
                                        style={{
                                            width: '100%',
                                            padding: '1rem',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            gap: '0.5rem'
                                        }}
                                    >
                                        {activeModuleIndex < totalModules - 1 ? (
                                            <>Continue to Next Module <ArrowRight size={18} /></>
                                        ) : (
                                            <>Complete Course <CheckCircle2 size={18} /></>
                                        )}
                                    </button>
                                </div>

                                {/* Course Conclusion */}
                                {activeModuleIndex === totalModules - 1 && (
                                    <div style={{ marginTop: '4rem', paddingTop: '3rem', borderTop: '2px solid var(--border)' }}>
                                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--primary)' }}>🎉 Congratulations!</h3>
                                        <p style={{ color: 'var(--foreground)', lineHeight: '1.8', fontSize: '1.0625rem', whiteSpace: 'pre-wrap' }}>{content.conclusion}</p>
                                    </div>
                                )}
                            </>
                        )}
                    </div>
                </div>
            </div>
        </DashboardLayout>
    )
}
