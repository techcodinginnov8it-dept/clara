'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { User, Mail, MapPin, Lock, ArrowRight } from 'lucide-react'

export default function SignupPage() {
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
        password: '',
        confirmPassword: ''
    })

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError('')

        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match')
            return
        }

        setLoading(true)

        try {
            const response = await fetch('/api/auth/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    address: formData.address,
                    password: formData.password
                })
            })

            const data = await response.json()

            if (response.ok) {
                alert('Account created successfully! Redirecting to login...')
                router.push('/login')
            } else {
                setError(data.error || 'Signup failed')
            }
        } catch (err) {
            setError('An error occurred. Please try again.')
        } finally {
            setLoading(false)
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    return (
        <main style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            padding: '2rem'
        }}>
            <div className="glass-card" style={{
                width: '100%',
                maxWidth: '450px',
                padding: '2.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '2rem'
            }}>
                <div style={{ textAlign: 'center' }}>
                    <Image
                        src="/logo.jpg"
                        alt="Freedom Builderz Logo"
                        width={150}
                        height={50}
                        style={{ marginBottom: '1rem', objectFit: 'contain' }}
                    />
                    <h1 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Create Your Account</h1>
                    <p style={{ color: 'var(--muted)', fontSize: '0.875rem' }}>Join the Clara Money Making Ecosystem</p>
                </div>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div style={{ position: 'relative' }}>
                        <User size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--muted)' }} />
                        <input
                            name="name"
                            type="text"
                            placeholder="Full Name"
                            className="input-field"
                            style={{ paddingLeft: '2.5rem' }}
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div style={{ position: 'relative' }}>
                        <Mail size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--muted)' }} />
                        <input
                            name="email"
                            type="email"
                            placeholder="Email Address"
                            className="input-field"
                            style={{ paddingLeft: '2.5rem' }}
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div style={{ position: 'relative' }}>
                        <MapPin size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--muted)' }} />
                        <input
                            name="address"
                            type="text"
                            placeholder="Physical Address"
                            className="input-field"
                            style={{ paddingLeft: '2.5rem' }}
                            value={formData.address}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                        <div style={{ position: 'relative' }}>
                            <Lock size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--muted)' }} />
                            <input
                                name="password"
                                type="password"
                                placeholder="Password"
                                className="input-field"
                                style={{ paddingLeft: '2.5rem' }}
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div style={{ position: 'relative' }}>
                            <Lock size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--muted)' }} />
                            <input
                                name="confirmPassword"
                                type="password"
                                placeholder="Confirm"
                                className="input-field"
                                style={{ paddingLeft: '2.5rem' }}
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    {error && (
                        <div style={{ color: '#ef4444', fontSize: '0.875rem', textAlign: 'center', background: 'rgba(239, 68, 68, 0.1)', padding: '0.5rem', borderRadius: '4px' }}>
                            {error}
                        </div>
                    )}

                    <button type="submit" disabled={loading} className="btn-primary" style={{ marginTop: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', opacity: loading ? 0.7 : 1 }}>
                        {loading ? 'Creating Account...' : 'Create Account'} <ArrowRight size={18} />
                    </button>
                </form>

                <div style={{ textAlign: 'center', fontSize: '0.875rem' }}>
                    <span style={{ color: 'var(--muted)' }}>Already have an account? </span>
                    <Link href="/login" style={{ color: 'var(--accent)', textDecoration: 'none', fontWeight: '600' }}>
                        Sign In
                    </Link>
                </div>
            </div>
        </main>
    )
}
