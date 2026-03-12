'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Lock, Mail, ArrowRight } from 'lucide-react'

export default function LoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError('')
        setLoading(true)

        try {
            const response = await fetch('/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            })

            const data = await response.json()

            if (response.ok) {
                router.push('/dashboard')
            } else {
                setError(data.error || 'Login failed')
            }
        } catch (err) {
            setError('An error occurred. Please try again.')
        } finally {
            setLoading(false)
        }
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
                        width={180}
                        height={60}
                        style={{ marginBottom: '1rem', objectFit: 'contain' }}
                    />
                    <h1 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Welcome to Clara</h1>
                    <p style={{ color: 'var(--muted)', fontSize: '0.875rem' }}>Money Making Messaging Assistant</p>
                </div>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
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

                    <div style={{ position: 'relative' }}>
                        <Lock size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--muted)' }} />
                        <input
                            type="password"
                            placeholder="Password"
                            className="input-field"
                            style={{ paddingLeft: '2.5rem' }}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <div style={{ textAlign: 'right' }}>
                        <Link href="/forgot-password" style={{ fontSize: '0.75rem', color: 'var(--accent)', textDecoration: 'none' }}>
                            Forgot password?
                        </Link>
                    </div>

                    {error && (
                        <div style={{ color: '#ef4444', fontSize: '0.875rem', textAlign: 'center', background: 'rgba(239, 68, 68, 0.1)', padding: '0.5rem', borderRadius: '4px' }}>
                            {error}
                        </div>
                    )}

                    <button type="submit" disabled={loading} className="btn-primary" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', opacity: loading ? 0.7 : 1 }}>
                        {loading ? 'Signing in...' : 'Sign In'} <ArrowRight size={18} />
                    </button>
                </form>

                <div style={{ textAlign: 'center', fontSize: '0.875rem' }}>
                    <span style={{ color: 'var(--muted)' }}>Don't have an account? </span>
                    <Link href="/signup" style={{ color: 'var(--accent)', textDecoration: 'none', fontWeight: '600' }}>
                        Create Account
                    </Link>
                </div>
            </div>
        </main>
    )
}
