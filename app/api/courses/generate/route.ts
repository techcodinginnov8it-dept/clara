import { NextResponse } from 'next/server'
import OpenAI from 'openai'
import { getCurrentUser } from '@/lib/auth'
import prisma from '@/lib/prisma'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { conversationHistory, messagingData, moduleCount, tone } = body

    // Build comprehensive prompt for structured course generation
    const systemPrompt = `You are Clara, an expert course architect and instructional designer. Generate a comprehensive, structured online course based on the conversation and messaging framework.

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
${conversationHistory.map((msg: any) => `${msg.role === 'user' ? 'Student' : 'Clara'}: ${msg.content}`).join('\n')}

COURSE PARAMETERS:
- Number of Modules: ${moduleCount}
- Delivery Tone: ${tone}

Generate a JSON object with the following structure:

{
  "title": "Compelling course title",
  "description": "2-3 sentence course description",
  "summary": "4-5 sentence summary of learning outcomes",
  "intro": "3-4 paragraph engaging introduction",
  "modules": [
    {
      "title": "Module title",
      "outcome": "Clear learning outcome",
      "lessons": [
        {
          "title": "Lesson 1: Specific lesson title",
          "content": "2-3 paragraphs of lesson content with practical examples and key concepts. Keep it concise but informative."
        }
      ],
      "quiz": [
        {
          "question": "Question text",
          "options": ["A", "B", "C", "D"],
          "correctAnswer": 0,
          "explanation": "Why this is correct"
        }
      ]
    }
  ],
  "conclusion": "2-3 paragraph empowering conclusion"
}

CRITICAL REQUIREMENTS:
- Create exactly ${moduleCount} modules
- Each module: 4-6 lessons with BOTH title AND content (2-3 paragraphs each)
- Each module: 3-5 quiz questions
- Lesson content must be educational, practical, and concise
- Use ${tone} tone throughout
- Return ONLY valid JSON`

    // Call OpenAI
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [{ role: 'system', content: systemPrompt }],
      temperature: 0.7,
      max_tokens: 8000,
      response_format: { type: "json_object" }
    })

    const courseContent = JSON.parse(completion.choices[0].message.content || '{}')

    // Log token usage
    const user = await getCurrentUser()
    if (user && completion.usage) {
      await prisma.tokenUsage.create({
        data: {
          userId: user.id,
          endpoint: 'courses/generate',
          promptTokens: completion.usage.prompt_tokens,
          completionTokens: completion.usage.completion_tokens,
          totalTokens: completion.usage.total_tokens,
          model: 'gpt-4o-mini'
        }
      })
    }

    return NextResponse.json({ content: courseContent })

  } catch (error: any) {
    console.error('Course generation error:', error)
    return NextResponse.json({
      error: error.message || 'Failed to generate course'
    }, { status: 500 })
  }
}
