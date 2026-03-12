'use client'

import React, { useState, useRef, useEffect } from 'react'
import { Send, Sparkles, Check, X, Loader2 } from 'lucide-react'

interface Message {
    role: 'user' | 'assistant'
    content: string
}

interface AICopyEditorProps {
    originalCopy: string
    onSave: (newCopy: string) => void
    onCancel: () => void
    onCopyUpdate?: (newCopy: string) => void
    moduleType: string
}

export default function AICopyEditor({ originalCopy, onSave, onCancel, onCopyUpdate, moduleType }: AICopyEditorProps) {
    const [messages, setMessages] = useState<Message[]>([
        {
            role: 'assistant',
            content: 'Hi! I\'m here to help you refine your copy. Do you want to modify this copy? You can ask me to:\n\n• Change the tone (more professional, casual, inspiring, etc.)\n• Adjust the length (make it shorter or more detailed)\n• Emphasize certain points\n• Rewrite specific sections\n• Or anything else you\'d like to improve!\n\nWhat would you like to change?'
        }
    ])
    const [input, setInput] = useState('')
    const [loading, setLoading] = useState(false)
    const [currentCopy, setCurrentCopy] = useState(originalCopy)
    const messagesEndRef = useRef<HTMLDivElement>(null)

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }

    useEffect(() => {
        scrollToBottom()
    }, [messages])

    const handleSend = async () => {
        if (!input.trim() || loading) return

        const userMessage = input.trim()
        setInput('')

        // Add user message
        const newMessages = [...messages, { role: 'user' as const, content: userMessage }]
        setMessages(newMessages)
        setLoading(true)

        try {
            const response = await fetch('/api/refine-copy', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    originalCopy: currentCopy,
                    conversationHistory: newMessages.slice(0, -1), // Exclude the message we just added
                    userMessage,
                    moduleType
                })
            })

            const data = await response.json()

            // Add AI response
            setMessages([...newMessages, { role: 'assistant', content: data.message }])

            // Update copy if changes were made
            if (data.hasChanges && data.updatedCopy) {
                setCurrentCopy(data.updatedCopy)
                // Notify parent component to update live preview
                if (onCopyUpdate) {
                    onCopyUpdate(data.updatedCopy)
                }
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

    const handleSave = () => {
        onSave(currentCopy)
    }

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            background: 'rgba(10, 10, 10, 0.8)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: 'var(--radius)',
            overflow: 'hidden'
        }}>
            {/* Header */}
            <div style={{
                padding: '1.5rem',
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <Sparkles size={20} color="#fb923c" />
                    <h3 style={{ margin: 0, fontSize: '1.125rem' }}>Clara AI Copy Editor</h3>
                </div>
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                    <button
                        onClick={onCancel}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            padding: '0.5rem 1rem',
                            background: 'transparent',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            borderRadius: 'var(--radius)',
                            color: 'var(--muted)',
                            cursor: 'pointer',
                            fontSize: '0.875rem'
                        }}
                    >
                        <X size={16} /> Cancel
                    </button>
                    <button
                        onClick={handleSave}
                        className="btn-primary"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            fontSize: '0.875rem'
                        }}
                    >
                        <Check size={16} /> Make This Final
                    </button>
                </div>
            </div>

            {/* Messages */}
            <div style={{
                flex: 1,
                overflowY: 'auto',
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem'
            }}>
                {messages.map((message, index) => (
                    <div
                        key={index}
                        style={{
                            display: 'flex',
                            justifyContent: message.role === 'user' ? 'flex-end' : 'flex-start'
                        }}
                    >
                        <div
                            style={{
                                maxWidth: '80%',
                                padding: '1.25rem 1.5rem',
                                borderRadius: '16px',
                                background: message.role === 'user'
                                    ? 'linear-gradient(135deg, #f97316 0%, #c2410c 100%)'
                                    : 'var(--glass-bg)',
                                border: message.role === 'assistant' ? '1px solid var(--glass-border)' : 'none',
                                whiteSpace: 'pre-wrap',
                                lineHeight: '1.6',
                                fontSize: '0.9375rem'
                            }}
                        >
                            {message.content}
                        </div>
                    </div>
                ))}
                {loading && (
                    <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                        <div style={{
                            padding: '1rem 1.25rem',
                            borderRadius: '12px',
                            background: 'rgba(255, 255, 255, 0.05)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem'
                        }}>
                            <Loader2 size={16} className="spin" />
                            <span style={{ color: 'var(--muted)', fontSize: '0.875rem' }}>Thinking...</span>
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div style={{
                padding: '1.5rem',
                borderTop: '1px solid var(--glass-border)',
                background: 'var(--glass-bg)'
            }}>
                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-end' }}>
                    <textarea
                        className="input-field"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Ask me to refine your copy..."
                        style={{
                            flex: 1,
                            minHeight: '60px',
                            maxHeight: '120px',
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
                            padding: '0.75rem 1.25rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            opacity: (!input.trim() || loading) ? 0.5 : 1,
                            cursor: (!input.trim() || loading) ? 'not-allowed' : 'pointer'
                        }}
                    >
                        <Send size={18} />
                    </button>
                </div>
                <p style={{
                    fontSize: '0.75rem',
                    color: 'var(--muted)',
                    marginTop: '0.75rem',
                    marginBottom: 0
                }}>
                    Press Enter to send, Shift+Enter for new line
                </p>
            </div>

            <style jsx>{`
                .spin {
                    animation: spin 1s linear infinite;
                }
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
            `}</style>
        </div>
    )
}
