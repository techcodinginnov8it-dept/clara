import { NextResponse } from 'next/server'
import OpenAI from 'openai'
import { getCurrentUser } from '@/lib/auth'
import { logTokenUsage } from '@/lib/token-cost'

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
})

export async function POST(request: Request) {
    try {
        const { conversationHistory, messagingData } = await request.json()

        // Build comprehensive prompt for structured data generation
        const systemPrompt = `You are Clara, an expert brand strategist. Generate structured branding data based on the conversation and messaging framework.

MESSAGING FRAMEWORK CONTEXT:
${messagingData ? `
Origin Story: ${messagingData.originStory || 'N/A'}
Market Positioning: ${messagingData.marketGap || 'N/A'}
Target Audience: ${messagingData.tribe || 'N/A'}
Unique Mechanism: ${messagingData.mechanism || 'N/A'}
Value Proposition: ${messagingData.usp || 'N/A'}
Messaging Summary: ${messagingData.summary || 'N/A'}
` : ''}

CONVERSATION INSIGHTS:
${conversationHistory.map((msg: any) => `${msg.role === 'user' ? 'Client' : 'Clara'}: ${msg.content}`).join('\n')}

Generate a JSON object with the following structure. Be specific and actionable:

{
  "companyName": "Extract or infer company name",
  "tagline": "Create a compelling brand tagline",
  "brandPersonality": {
    "traits": ["trait1", "trait2", "trait3", "trait4", "trait5"],
    "archetype": "Primary brand archetype",
    "description": "2-3 sentence description of brand as a person"
  },
  "colorPalette": {
    "primary": [
      { "name": "Primary Color 1", "hex": "#HEXCODE", "usage": "Main brand color" },
      { "name": "Primary Color 2", "hex": "#HEXCODE", "usage": "Secondary brand color" }
    ],
    "secondary": [
      { "name": "Accent 1", "hex": "#HEXCODE", "usage": "Accent color" },
      { "name": "Accent 2", "hex": "#HEXCODE", "usage": "Highlight color" }
    ],
    "neutrals": [
      { "name": "Dark", "hex": "#HEXCODE", "usage": "Text/backgrounds" },
      { "name": "Light", "hex": "#HEXCODE", "usage": "Backgrounds" }
    ]
  },
  "typography": {
    "headline": {
      "font": "Specific Google Font name",
      "weight": "700",
      "usage": "Headlines and hero text"
    },
    "body": {
      "font": "Specific Google Font name",
      "weight": "400",
      "usage": "Body copy and paragraphs"
    },
    "accent": {
      "font": "Specific Google Font name (optional decorative)",
      "weight": "400",
      "usage": "Special accents"
    }
  },
  "logoGuidelines": {
    "style": "Modern/Classic/Minimal/Bold",
    "elements": ["Element 1", "Element 2"],
    "dos": ["Do 1", "Do 2", "Do 3"],
    "donts": ["Don't 1", "Don't 2", "Don't 3"]
  },
  "visualStyle": {
    "photography": "Detailed photography direction",
    "imagery": "Visual mood and style",
    "graphics": "Graphic element style"
  },
  "voiceAndTone": {
    "characteristics": ["Characteristic 1", "Characteristic 2", "Characteristic 3"],
    "professional": "How to sound in professional contexts",
    "social": "How to sound on social media",
    "support": "How to sound in customer support",
    "dos": ["Language do 1", "Language do 2", "Language do 3"],
    "donts": ["Language don't 1", "Language don't 2", "Language don't 3"]
  },
  "messaging": {
    "primary": "Main brand message from USP",
    "supporting": ["Supporting message 1", "Supporting message 2", "Supporting message 3"],
    "proofPoints": ["Proof 1", "Proof 2", "Proof 3"]
  },
  "applications": {
    "website": "Web presence guidelines",
    "social": "Social media guidelines",
    "email": "Email communication guidelines",
    "print": "Print material guidelines"
  }
}

IMPORTANT:
- Use REAL hex color codes (e.g., #3B82F6, not placeholders)
- Use REAL Google Font names (e.g., "Inter", "Playfair Display")
- Be specific and actionable
- Ensure colors work well together
- Choose fonts that match the brand personality
- Return ONLY valid JSON, no markdown formatting`

        // Call OpenAI to generate structured data
        const completion = await openai.chat.completions.create({
            model: 'gpt-4o-mini',
            messages: [
                { role: 'system', content: systemPrompt }
            ],
            temperature: 0.7,
            max_tokens: 3000,
            response_format: { type: "json_object" }
        })

        const brandingData = JSON.parse(completion.choices[0].message.content || '{}')

        // Log token usage
        const user = await getCurrentUser()
        if (user && completion.usage) {
            await logTokenUsage({
                userId: user.id,
                endpoint: 'branding/generate-document',
                promptTokens: completion.usage.prompt_tokens,
                completionTokens: completion.usage.completion_tokens,
                totalTokens: completion.usage.total_tokens,
                model: 'gpt-4o-mini'
            })
        }

        return NextResponse.json({
            brandingData
        })

    } catch (error: any) {
        console.error('Document generation error:', error)
        return NextResponse.json(
            { error: error.message || 'Failed to generate document' },
            { status: 500 }
        )
    }
}
