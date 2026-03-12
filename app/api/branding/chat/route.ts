import { NextResponse } from 'next/server'
import OpenAI from 'openai'

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
})

interface Message {
    role: 'user' | 'assistant'
    content: string
}

export async function POST(request: Request) {
    try {
        const { messages, userMessage, messagingData } = await request.json()

        // Build system prompt with messaging framework context
        const systemPrompt = `You are Clara, an expert brand strategist helping to create a comprehensive brand identity guide.

CONTEXT - MESSAGING FRAMEWORK:
The user has already completed their messaging framework. Here's their company messaging:

${messagingData ? `
ORIGIN STORY: ${messagingData.originStory || 'Not available'}

MARKET POSITIONING: ${messagingData.marketGap || 'Not available'}

TARGET AUDIENCE: ${messagingData.tribe || 'Not available'}

UNIQUE MECHANISM: ${messagingData.mechanism || 'Not available'}

VALUE PROPOSITION: ${messagingData.usp || 'Not available'}

MESSAGING SUMMARY: ${messagingData.summary || 'Not available'}
` : 'Messaging framework data not available.'}

YOUR ROLE:
You are conducting a conversational interview to gather branding insights. Ask strategic questions about:
1. Brand Essence (personality, emotions, core values)
2. Visual Identity (colors, style preferences, visual inspiration)
3. Tone & Voice (communication style, language preferences)
4. Differentiation (what makes them visually unique)

GUIDELINES:
- Ask ONE question at a time
- Be conversational and friendly
- Reference their messaging framework when relevant
- Ask 10-12 questions total across all categories
- After gathering sufficient information, let them know you're ready to generate their branding document
- Keep questions strategic and insightful, not generic

QUESTION FLOW:
- Start by acknowledging you've reviewed their messaging framework
- Ask about brand essence first (3-4 questions)
- Then visual identity (3-4 questions)
- Then tone & voice (2-3 questions)
- Finally differentiation (2-3 questions)
- When you've asked enough questions, say: "I have everything I need to create your brand identity guide. Would you like me to generate it now?"

Keep responses concise and engaging. You're building rapport while gathering strategic insights.`

        // Build conversation
        const conversationMessages: any[] = [
            { role: 'system', content: systemPrompt }
        ]

        // Add message history
        messages.forEach((msg: Message) => {
            conversationMessages.push({
                role: msg.role,
                content: msg.content
            })
        })

        // Add current user message
        conversationMessages.push({
            role: 'user',
            content: userMessage
        })

        // Call OpenAI
        const completion = await openai.chat.completions.create({
            model: 'gpt-4o-mini',
            messages: conversationMessages,
            temperature: 0.8,
            max_tokens: 500
        })

        const aiResponse = completion.choices[0].message.content || 'Sorry, I could not generate a response.'

        // Check if AI is ready to generate document
        const canGenerate = aiResponse.toLowerCase().includes('generate') &&
            (aiResponse.toLowerCase().includes('ready') ||
                aiResponse.toLowerCase().includes('everything i need'))

        return NextResponse.json({
            message: aiResponse,
            canGenerate
        })

    } catch (error: any) {
        console.error('Branding chat error:', error)
        return NextResponse.json(
            { error: error.message || 'Failed to process chat' },
            { status: 500 }
        )
    }
}
