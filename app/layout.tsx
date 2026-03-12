import './globals.css'
import type { Metadata } from 'next'
import { ThemeProvider } from '@/components/ThemeProvider'

export const metadata: Metadata = {
    title: 'Clara Portal - Money Making Messaging Assistant',
    description: 'High-tech portal for Clara AI Assistant',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body>
                <ThemeProvider attribute="data-theme" defaultTheme="dark" enableSystem={false}>
                    <div className="high-tech-glare" />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    )
}
