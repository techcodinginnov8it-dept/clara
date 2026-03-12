'use client'

import React, { useState, useEffect } from 'react'
import DashboardLayout from '@/components/DashboardLayout'
import { Activity } from 'lucide-react'

export default function SettingsPage() {
    const [userName, setUserName] = useState('')
    const [userEmail, setUserEmail] = useState('')

    useEffect(() => {
        fetch('/api/auth/me')
            .then(r => r.json())
            .then(userData => {
                if (userData.name) setUserName(userData.name)
                if (userData.email) setUserEmail(userData.email)
            })
            .catch(console.error)
    }, [])

    return (
        <DashboardLayout>
            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                <div style={{ marginBottom: '2.5rem' }}>
                    <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Settings</h1>
                    <p style={{ color: 'var(--muted)' }}>Manage your account settings.</p>
                </div>

                {/* Account Info */}
                <div className="glass-card" style={{ padding: '2rem', marginBottom: '2rem' }}>
                    <h3 style={{ fontSize: '1.125rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Activity size={20} color="var(--primary)" /> Account
                    </h3>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                        <div>
                            <label style={{ fontSize: '0.75rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Name</label>
                            <p style={{ fontSize: '1rem', fontWeight: '600', marginTop: '0.25rem' }}>{userName || '—'}</p>
                        </div>
                        <div>
                            <label style={{ fontSize: '0.75rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Email</label>
                            <p style={{ fontSize: '1rem', fontWeight: '600', marginTop: '0.25rem' }}>{userEmail || '—'}</p>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    )
}
