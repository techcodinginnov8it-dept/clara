'use client'

import React, { useEffect, useState } from 'react'
import DashboardLayout from '@/components/DashboardLayout'
import { Activity } from 'lucide-react'

export default function SettingsPage() {
    const [userName, setUserName] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [userPlan, setUserPlan] = useState('FREE')
    const [profilePicture, setProfilePicture] = useState('')
    const [tokenCost, setTokenCost] = useState(0)

    useEffect(() => {
        fetch('/api/auth/me')
            .then(r => r.json())
            .then(userData => {
                if (userData.name) setUserName(userData.name)
                if (userData.email) setUserEmail(userData.email)
                if (userData.plan) setUserPlan(userData.plan)
                if (userData.profilePicture) setProfilePicture(userData.profilePicture)
                if (typeof userData.tokenCost === 'number') setTokenCost(userData.tokenCost)
            })
            .catch(console.error)
    }, [])

    const initials = userName
        ? userName.split(' ').map((namePart) => namePart[0]).join('').toUpperCase().slice(0, 2)
        : '?'

    return (
        <DashboardLayout>
            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                <div style={{ marginBottom: '2.5rem' }}>
                    <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Settings</h1>
                    <p style={{ color: 'var(--muted)' }}>Manage your account settings.</p>
                </div>

                <div className="glass-card" style={{ padding: '2rem', marginBottom: '2rem' }}>
                    <h3 style={{ fontSize: '1.125rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Activity size={20} color="var(--primary)" /> Account
                    </h3>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                        <div>
                            <label style={{ fontSize: '0.75rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Name</label>
                            <p style={{ fontSize: '1rem', fontWeight: '600', marginTop: '0.25rem' }}>{userName || '-'}</p>
                        </div>
                        <div>
                            <label style={{ fontSize: '0.75rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Email</label>
                            <p style={{ fontSize: '1rem', fontWeight: '600', marginTop: '0.25rem' }}>{userEmail || '-'}</p>
                        </div>
                        <div>
                            <label style={{ fontSize: '0.75rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Plan</label>
                            <p style={{ fontSize: '1rem', fontWeight: '600', marginTop: '0.25rem' }}>{userPlan === 'PRO' ? 'Pro Account' : 'Free Account'}</p>
                        </div>
                        <div>
                            <label style={{ fontSize: '0.75rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Token Cost</label>
                            <p style={{ fontSize: '1rem', fontWeight: '600', marginTop: '0.25rem' }}>${tokenCost.toFixed(4)}</p>
                        </div>
                        <div style={{ gridColumn: '1 / -1' }}>
                            <label style={{ fontSize: '0.75rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Profile Picture</label>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '0.5rem' }}>
                                {profilePicture ? (
                                    <img
                                        src={profilePicture}
                                        alt={userName ? `${userName} avatar` : 'User avatar'}
                                        style={{ width: '56px', height: '56px', borderRadius: '50%', objectFit: 'cover', border: '1px solid var(--border)' }}
                                    />
                                ) : (
                                    <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'linear-gradient(135deg, #f97316, #c2410c)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700' }}>
                                        {initials}
                                    </div>
                                )}
                                <p style={{ fontSize: '0.875rem', color: 'var(--muted)' }}>
                                    {profilePicture || 'No profile picture set yet.'}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    )
}
