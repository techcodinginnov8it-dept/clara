import { NextResponse } from 'next/server'
import OpenAI from 'openai'
import { getCurrentUser } from '@/lib/auth'
import prisma from '@/lib/prisma'

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
})

interface Message {
    role: 'user' | 'assistant'
    content: string
}

export async function POST(request: Request) {
    try {
        const { originalCopy, conversationHistory, userMessage, moduleType } = await request.json()

        // Build the system prompt for copy refinement
        const systemPrompt = `You are Clara, an expert copywriting assistant helping to refine marketing copy for the "${moduleType}" module.

Your role is to:
1. Listen carefully to the user's requests about how they want to modify their copy
2. Make the requested changes to the copy
3. Explain what you changed and why
4. Be conversational, helpful, and professional

CRITICAL FORMATTING RULES:
- PRESERVE ALL ORIGINAL FORMATTING: Keep section headers, capitalization, bold text, line breaks, and structure EXACTLY as they appear
- If the original has "INTRO:" keep it as "INTRO:" (all caps with colon)
- If the original has "Conclusion." keep it as "Conclusion." (capitalized with period)
- Maintain all blank lines and spacing
- Keep the same structure and organization
- Only modify the CONTENT of the sections the user asks you to change, not the formatting

IMPORTANT RULES:
- When the user asks you to make changes (e.g., "make it more professional", "shorten it", "make the conclusion longer"), you MUST modify the copy and return the updated version
- Always return the COMPLETE updated copy with ALL original formatting preserved
- Be specific about what you changed
- If the user asks questions or wants advice without requesting changes, provide guidance without modifying the copy

When returning updated copy, wrap it in triple backticks like this:
\`\`\`
[complete updated copy here with all formatting preserved]
\`\`\`

Current copy to work with:
---
${originalCopy}
---`

        // Build conversation messages for OpenAI
        const messages: any[] = [
            { role: 'system', content: systemPrompt }
        ]

        // Add conversation history
        conversationHistory.forEach((msg: Message) => {
            messages.push({
                role: msg.role,
                content: msg.content
            })
        })

        // Add current user message
        messages.push({
            role: 'user',
            content: userMessage
        })

        // Call OpenAI API
        const completion = await openai.chat.completions.create({
            model: 'gpt-4o-mini',
            messages: messages,
            temperature: 0.7,
            max_tokens: 2000
        })

        const aiResponse = completion.choices[0].message.content || 'Sorry, I could not generate a response.'

        // Detect if the AI made changes to the copy
        // We'll use a simple heuristic: if the response contains a code block or the word "updated"
        const hasChanges = aiResponse.toLowerCase().includes('here') ||
            aiResponse.toLowerCase().includes('updated') ||
            aiResponse.toLowerCase().includes("i've") ||
            aiResponse.includes('---')

        let updatedCopy = originalCopy

        let extractionUsage: OpenAI.Completions.CompletionUsage | undefined;
        // Try to extract updated copy from the response
        if (hasChanges) {
            // Look for copy between --- markers or code blocks
            const codeBlockMatch = aiResponse.match(/```(?:markdown|text)?\n([\s\S]*?)\n```/)
            const dashesMatch = aiResponse.match(/---\n([\s\S]*?)\n---/)

            if (codeBlockMatch) {
                updatedCopy = codeBlockMatch[1].trim()
            } else if (dashesMatch) {
                updatedCopy = dashesMatch[1].trim()
            } else {
                // Ask AI to provide just the updated copy
                const extractionCompletion = await openai.chat.completions.create({
                    model: 'gpt-4o-mini',
                    messages: [
                        { role: 'system', content: 'Extract and return ONLY the updated copy from the following response. Return the complete copy without any explanations or markdown formatting.' },
                        { role: 'user', content: `Original copy:\n${originalCopy}\n\nAI Response:\n${aiResponse}\n\nReturn only the updated copy:` }
                    ],
                    temperature: 0.3,
                    max_tokens: 2000
                })
                extractionUsage = extractionCompletion.usage

                const extracted = extractionCompletion.choices[0].message.content?.trim()
                if (extracted && extracted.length > 50 && extracted !== originalCopy) {
                    updatedCopy = extracted
                }
            }
        }

        // Log token usage
        const user = await getCurrentUser()
        if (user && completion.usage) {
            let prompt_tokens = completion.usage.prompt_tokens
            let completion_tokens = completion.usage.completion_tokens
            let total_tokens = completion.usage.total_tokens

            if (extractionUsage) {
                prompt_tokens += extractionUsage.prompt_tokens
                completion_tokens += extractionUsage.completion_tokens
                total_tokens += extractionUsage.total_tokens
            }

            await prisma.tokenUsage.create({
                data: {
                    userId: user.id,
                    endpoint: 'refine-copy',
                    promptTokens: prompt_tokens,
                    completionTokens: completion_tokens,
                    totalTokens: total_tokens,
                    model: 'gpt-4o-mini'
                }
            })
        }

        return NextResponse.json({
            message: aiResponse,
            updatedCopy: hasChanges && updatedCopy !== originalCopy ? updatedCopy : null,
            hasChanges: hasChanges && updatedCopy !== originalCopy
        })

    } catch (error: any) {
        console.error('Copy refinement error:', error)
        return NextResponse.json(
            { error: error.message || 'Failed to process request' },
            { status: 500 }
        )
    }
}
