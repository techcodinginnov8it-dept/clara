import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { getCurrentUser } from '@/lib/auth'
import OpenAI from 'openai'
import { logTokenUsage } from '@/lib/token-cost'

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
})

export async function POST(request: Request) {
    try {
        const user = await getCurrentUser()
        if (!user) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
        }

        const { type } = await request.json()

        // 1. Fetch Step 6 Summary Data
        const summary = await prisma.messagingSummary.findUnique({
            where: { userId: user.id }
        })

        if (!summary || !summary.generatedReport) {
            return NextResponse.json({ error: 'Step 6 must be completed first' }, { status: 403 })
        }

        const baseMessaging = summary.generatedReport

        // 2. Map Bonus Type to Specific Prompt
        let systemPrompt = ""
        
        switch(type) {
            case 'hooks':
                systemPrompt = `You are a world-class direct response copywriter. Based on the provided client messaging framework, generate "100 Viral Hook Templates" for social media. 
                
Format the output as a clean HTML snippet (NO markdown, NO \`\`\`html tags, just the raw HTML elements). Use basic tags like <h1>, <h2>, <p>, <ul>, <li>, <strong>, <em>.
Include an introductory paragraph, and group the hooks under 4-5 thematic <h2> headings (e.g. Agitating the Pain, Challenging the Status Quo, Showing the Mechanism, Social Proof). Provide exactly 100 hooks.`
                break
            case 'planner':
                systemPrompt = `You are an elite social media strategist. Based on the provided client messaging framework, generate a "30-Day Content Planner". 

Format the output as a clean HTML snippet (NO markdown, NO \`\`\`html tags, just the raw HTML elements). Use basic tags like <h1>, <h2>, <p>, <table>, <tr>, <th>, <td>.
Include an intro, and create a 30-day table timeline with columns: "Day", "Content Theme", "Format Idea", "Core Message", and "Call to Action". Ensure variety across the 30 days.`
                break
            case 'bio':
                systemPrompt = `You are an expert profile optimizer and personal branding consultant. Based on the provided client messaging framework, generate a "Power-Bio Architect" document.

Format the output as a clean HTML snippet (NO markdown, NO \`\`\`html tags, just the raw HTML elements). Use basic tags like <h1>, <h2>, <p>, <ul>, <li>, <strong>.
Include tailored bio variations for: Instagram (150 chars), Twitter/X (160 chars), LinkedIn Headline (220 chars), LinkedIn About Section (detailed 3 paragraphs), and a short Speaker/Podcast Intro.`
                break
            case 'emails':
                systemPrompt = `You are an expert email marketer specializing in high open rates. Based on the provided client messaging framework, generate an "Email Subject Line Power-File".

Format the output as a clean HTML snippet (NO markdown, NO \`\`\`html tags, just the raw HTML elements). Use basic tags like <h1>, <h2>, <p>, <ul>, <li>, <strong>.
Include an intro on email best practices, and provide at least 50 highly clickable email subject lines categorized by purpose (e.g. Value, Curiosity, Case Study, Urgency, Follow-up).`
                break
            default:
                return NextResponse.json({ error: 'Invalid bonus type' }, { status: 400 })
        }

        // 3. Generate Content via OpenAI
        const completion = await openai.chat.completions.create({
            model: 'gpt-4o',
            messages: [
                { role: 'system', content: systemPrompt },
                { role: 'user', content: `Here is my core messaging framework:\n\n${baseMessaging}` }
            ],
            temperature: 0.7,
        })

        const generatedHtml = completion.choices[0].message.content || ""

        // Process token usage logging
        if (completion.usage) {
            await logTokenUsage({
                userId: user.id,
                endpoint: `bonus/generate-${type}`,
                promptTokens: completion.usage.prompt_tokens,
                completionTokens: completion.usage.completion_tokens,
                totalTokens: completion.usage.total_tokens,
                model: completion.model,
            })
        }

        // 4. Wrap in standard Word-compatible HTML
        const header = "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><style>body { font-family: 'Arial', sans-serif; line-height: 1.6; color: #333; max-width: 800px; margin: 0 auto; padding: 20px; } h1, h2 { color: #f97316; } table { width: 100%; border-collapse: collapse; margin-top: 20px; } th, td { border: 1px solid #ddd; padding: 12px; text-align: left; } th { background-color: #f97316; color: white; }</style></head><body>"
        const footer = "</body></html>"
        
        // Clean up markdown codeblocks if AI happens to inject them despite instructions
        const cleanHtml = generatedHtml.replace(/```html/gi, '').replace(/```/g, '')
        
        const finalHtml = header + cleanHtml + footer

        return NextResponse.json({ content: finalHtml })
    } catch (error) {
        console.error('Error generating AI bonus document:', error)
        return NextResponse.json({ error: 'Internal server error while generating bonus' }, { status: 500 })
    }
}
