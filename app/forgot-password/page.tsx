'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Mail, ArrowLeft, Send } from 'lucide-react'

export default function ForgotPasswordPage() {
    const [email, setEmail] = useState('')
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setSubmitted(true)
        console.log('Password reset requested for:', email)
    }

    return (
        <main style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            padding: '1rem'
        }}>
            <div className="glass-card" style={{
                width: '100%',
                maxWidth: '400px',
                padding: '2.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '2rem'
            }}>
                <div style={{ textAlign: 'center' }}>
                    <Image
                        src="/logo.jpg"
                        alt="Freedom Builderz Logo"
                        width={120}
                        height={40}
                        style={{ marginBottom: '1rem', objectFit: 'contain' }}
                    />
                    <h1 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Reset Password</h1>
                    <p style={{ color: 'var(--muted)', fontSize: '0.875rem' }}>
                        Enter your email to receive recovery instructions
                    </p>
                </div>

                {!submitted ? (
                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div style={{ position: 'relative' }}>
                            <Mail size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--muted)' }} />
                            <input
                                type="email"
                                placeholder="Email address"
                                className="input-field"
                                style={{ paddingLeft: '2.5rem' }}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <button type="submit" className="btn-primary" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                            Send Link <Send size={18} />
                        </button>
                    </form>
                ) : (
                    <div style={{
                        textAlign: 'center',
                        padding: '2rem',
                        background: 'rgba(34, 197, 94, 0.1)',
                        borderRadius: 'var(--radius)',
                        border: '1px solid rgba(34, 197, 94, 0.2)'
                    }}>
                        <p style={{ color: '#4ade80', fontWeight: '600' }}>Instructions Sent!</p>
                        <p style={{ fontSize: '0.875rem', color: 'var(--muted)', marginTop: '0.5rem' }}>
                            If an account exists for {email}, you will receive an email shortly.
                        </p>
                    </div>
                )}

                <div style={{ textAlign: 'center' }}>
                    <Link href="/login" style={{
                        color: 'var(--muted)',
                        textDecoration: 'none',
                        fontSize: '0.875rem',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                    }}>
                        <ArrowLeft size={16} /> Back to Sign In
                    </Link>
                </div>
            </div>
        </main>
    )
}
