'use client'

import React, { useEffect, useRef, useState } from 'react'
import DashboardLayout from '@/components/DashboardLayout'
import { Activity, Loader2, Upload, X } from 'lucide-react'

type SettingsForm = {
    name: string
    email: string
    address: string
    plan: 'FREE' | 'PRO'
    profilePicture: string
    profilePictureLabel: string
    tokenCost: number
}

export default function SettingsPage() {
    const fileInputRef = useRef<HTMLInputElement | null>(null)
    const [form, setForm] = useState<SettingsForm>({
        name: '',
        email: '',
        address: '',
        plan: 'FREE',
        profilePicture: '',
        profilePictureLabel: '',
        tokenCost: 0,
    })
    const [loading, setLoading] = useState(true)
    const [saving, setSaving] = useState(false)
    const [message, setMessage] = useState('')
    const [error, setError] = useState('')

    useEffect(() => {
        fetch('/api/auth/me')
            .then(r => r.json())
            .then(userData => {
                setForm({
                    name: userData.name || '',
                    email: userData.email || '',
                    address: userData.address || '',
                    plan: userData.plan === 'PRO' ? 'PRO' : 'FREE',
                    profilePicture: userData.profilePicture || '',
                    profilePictureLabel: userData.profilePicture
                        ? 'Current profile image'
                        : '',
                    tokenCost: typeof userData.tokenCost === 'number' ? userData.tokenCost : 0,
                })
            })
            .catch(() => {
                setError('Failed to load your settings.')
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    const initials = form.name
        ? form.name.split(' ').map((namePart) => namePart[0]).join('').toUpperCase().slice(0, 2)
        : '?'

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setForm((current) => ({ ...current, [name]: value }))
    }

    const handleProfilePictureUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]

        if (!file) {
            return
        }

        if (!file.type.startsWith('image/')) {
            setError('Please upload an image file for your profile picture.')
            return
        }

        if (file.size > 2 * 1024 * 1024) {
            setError('Please upload an image smaller than 2MB.')
            return
        }

        const reader = new FileReader()
        reader.onload = () => {
            setForm((current) => ({
                ...current,
                profilePicture: typeof reader.result === 'string' ? reader.result : current.profilePicture,
                profilePictureLabel: file.name,
            }))
            setError('')
            setMessage('Profile picture selected. Save changes to apply it.')
        }
        reader.readAsDataURL(file)
    }

    const handleSave = async (event: React.FormEvent) => {
        event.preventDefault()
        setSaving(true)
        setMessage('')
        setError('')

        try {
            const response = await fetch('/api/auth/me', {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: form.name,
                    address: form.address,
                    profilePicture: form.profilePicture,
                })
            })

            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.error || 'Failed to update settings.')
            }

            setForm((current) => ({
                ...current,
                name: data.user.name || '',
                address: data.user.address || '',
                profilePicture: data.user.profilePicture || '',
                profilePictureLabel: data.user.profilePicture ? 'Saved profile image' : '',
            }))
            setMessage('Settings updated successfully.')
            window.dispatchEvent(new Event('user-profile-updated'))
        } catch (saveError: any) {
            setError(saveError.message || 'Failed to update settings.')
        } finally {
            setSaving(false)
        }
    }

    return (
        <DashboardLayout>
            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                <div style={{ marginBottom: '2.5rem' }}>
                    <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Settings</h1>
                    <p style={{ color: 'var(--muted)' }}>Manage your account settings.</p>
                </div>

                <form className="glass-card" onSubmit={handleSave} style={{ padding: '2rem', marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <h3 style={{ fontSize: '1.125rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Activity size={20} color="var(--primary)" /> Account
                    </h3>

                    {loading ? (
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--muted)' }}>
                            <Loader2 size={18} className="spin" /> Loading settings...
                        </div>
                    ) : (
                        <>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                                <Field label="Name">
                                    <input
                                        name="name"
                                        type="text"
                                        className="input-field"
                                        value={form.name}
                                        onChange={handleChange}
                                        placeholder="Full name"
                                    />
                                </Field>

                                <Field label="Email">
                                    <input
                                        type="email"
                                        className="input-field"
                                        value={form.email}
                                        disabled
                                        style={{ opacity: 0.7, cursor: 'not-allowed' }}
                                    />
                                </Field>

                                <Field label="Address">
                                    <input
                                        name="address"
                                        type="text"
                                        className="input-field"
                                        value={form.address}
                                        onChange={handleChange}
                                        placeholder="Address"
                                    />
                                </Field>

                                <Field label="Plan">
                                    <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                                        <input
                                            type="text"
                                            className="input-field"
                                            value={form.plan === 'PRO' ? 'Pro Account' : 'Free Account'}
                                            disabled
                                            style={{ opacity: 0.7, cursor: 'not-allowed' }}
                                        />
                                        <button
                                            type="button"
                                            className="btn-primary"
                                            onClick={() => alert('Upgrade to Pro coming soon.')}
                                            style={{ whiteSpace: 'nowrap' }}
                                        >
                                            Upgrade to Pro
                                        </button>
                                    </div>
                                </Field>

                                <Field label="Profile Picture URL">
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', flexWrap: 'wrap' }}>
                                            <input
                                                ref={fileInputRef}
                                                type="file"
                                                accept="image/*"
                                                onChange={handleProfilePictureUpload}
                                                style={{ display: 'none' }}
                                            />
                                            <button
                                                type="button"
                                                className="btn-secondary"
                                                onClick={() => fileInputRef.current?.click()}
                                                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
                                            >
                                                <Upload size={16} /> Upload Image
                                            </button>
                                            {form.profilePicture && (
                                                <button
                                                    type="button"
                                                    className="btn-secondary"
                                                    onClick={() => setForm((current) => ({ ...current, profilePicture: '', profilePictureLabel: '' }))}
                                                    style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
                                                >
                                                    <X size={16} /> Remove
                                                </button>
                                            )}
                                        </div>
                                        <input
                                            name="profilePicture"
                                            type="url"
                                            className="input-field"
                                            value={form.profilePicture}
                                            onChange={handleChange}
                                            placeholder="Or paste an image URL"
                                        />
                                        <p style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>
                                            Upload an image or paste an image URL. Uploaded images are stored with your profile data.
                                        </p>
                                    </div>
                                </Field>

                                <Field label="Token Cost">
                                    <input
                                        type="text"
                                        className="input-field"
                                        value={`$${form.tokenCost.toFixed(4)}`}
                                        disabled
                                        style={{ opacity: 0.7, cursor: 'not-allowed' }}
                                    />
                                </Field>
                            </div>

                            <div>
                                <label style={{ fontSize: '0.75rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Avatar Preview</label>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '0.75rem', flexWrap: 'wrap' }}>
                                    {form.profilePicture ? (
                                        <img
                                            src={form.profilePicture}
                                            alt={form.name ? `${form.name} avatar` : 'User avatar'}
                                            style={{ width: '64px', height: '64px', borderRadius: '50%', objectFit: 'cover', border: '1px solid var(--border)' }}
                                        />
                                    ) : (
                                        <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'linear-gradient(135deg, #f97316, #c2410c)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700' }}>
                                            {initials}
                                        </div>
                                    )}
                                    <div style={{ minWidth: 0, maxWidth: '100%', flex: '1 1 260px' }}>
                                        <p style={{ fontSize: '0.875rem', color: 'var(--foreground)', fontWeight: '600', wordBreak: 'break-word' }}>
                                            {form.profilePicture
                                                ? (form.profilePictureLabel || 'Profile image selected')
                                                : 'No profile picture set yet.'}
                                        </p>
                                        {form.profilePicture && (
                                            <p style={{ fontSize: '0.75rem', color: 'var(--muted)', marginTop: '0.25rem', wordBreak: 'break-word' }}>
                                                {form.profilePicture.startsWith('data:image/')
                                                    ? 'Uploaded image ready to save.'
                                                    : form.profilePicture}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {message && (
                                <div style={{ color: '#4ade80', fontSize: '0.875rem', background: 'rgba(74, 222, 128, 0.1)', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid rgba(74, 222, 128, 0.2)' }}>
                                    {message}
                                </div>
                            )}

                            {error && (
                                <div style={{ color: '#ef4444', fontSize: '0.875rem', background: 'rgba(239, 68, 68, 0.1)', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid rgba(239, 68, 68, 0.2)' }}>
                                    {error}
                                </div>
                            )}

                            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                <button type="submit" disabled={saving} className="btn-primary" style={{ minWidth: '180px' }}>
                                    {saving ? 'Saving Changes...' : 'Save Changes'}
                                </button>
                            </div>
                        </>
                    )}
                </form>
                <style jsx>{`.spin { animation: spin 1s linear infinite; } @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
            </div>
        </DashboardLayout>
    )
}

function Field({ label, children }: { label: string, children: React.ReactNode }) {
    return (
        <div>
            <label style={{ fontSize: '0.75rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '0.5rem' }}>
                {label}
            </label>
            {children}
        </div>
    )
}
