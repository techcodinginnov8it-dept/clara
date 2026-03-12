'use client'

import React from 'react'

interface SplitPanelLayoutProps {
    leftPanel: React.ReactNode
    rightPanel: React.ReactNode
}

export default function SplitPanelLayout({ leftPanel, rightPanel }: SplitPanelLayoutProps) {
    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '1.5rem',
            height: 'calc(100vh - 200px)',
            minHeight: '600px'
        }}>
            {/* Left Panel - AI Chat Interface */}
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                overflow: 'hidden'
            }}>
                {leftPanel}
            </div>

            {/* Right Panel - Copy Preview */}
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                overflow: 'auto'
            }}>
                {rightPanel}
            </div>

            <style jsx>{`
                @media (max-width: 968px) {
                    div:first-child {
                        grid-template-columns: 1fr;
                        height: auto;
                    }
                }
            `}</style>
        </div>
    )
}
