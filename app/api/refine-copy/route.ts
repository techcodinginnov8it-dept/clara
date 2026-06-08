import { NextResponse } from 'next/server'
import OpenAI from 'openai'
import { getCurrentUser } from '@/lib/auth'
import { logTokenUsage } from '@/lib/token-cost'
import { applySectionUpdates, inferTargetSections, parseDocumentSections, rebuildDocumentFromSections } from '@/lib/document-structure'

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
})

interface Message {
    role: 'user' | 'assistant'
    content: string
}

export async function POST(request: Request) {
    try {
        const { originalCopy, documentSections, conversationHistory, userMessage, moduleType } = await request.json()
        const availableSections = Array.isArray(documentSections) && documentSections.length
            ? documentSections
            : parseDocumentSections(originalCopy)
        const normalizedSections = availableSections.length ? availableSections : [
            {
                id: 'document',
                heading: 'DOCUMENT',
                baseHeading: 'DOCUMENT',
                headingSuffix: null,
                content: originalCopy.trim(),
            }
        ]
        const targetSectionIds = inferTargetSections(userMessage, normalizedSections)
        const editableSections = normalizedSections.filter((section) => targetSectionIds.includes(section.id))
        const recentConversation = Array.isArray(conversationHistory)
            ? conversationHistory.slice(-6)
            : []

        const systemPrompt = `You are Clara, an expert copywriting assistant helping to refine marketing copy for the "${moduleType}" module.

You are editing a STRUCTURED document section-by-section to reduce token cost and preserve the framework.

NON-NEGOTIABLE STRUCTURE RULES:
- Never remove, reorder, merge, or add sections.
- Preserve the base section headings and section order exactly.
- If a heading has a subtitle after an em dash, you may refine ONLY the subtitle after the dash, while preserving the base heading.
- Do not rewrite untouched sections.
- Keep the voice and formatting consistent with the existing document.

EDITING RULES:
- If the request names a section like Intro, Stage 2, Conclusion, or a specific heading, edit only that section.
- If the request is broad, edit all sections listed as editable.
- You may improve clarity, tone, persuasiveness, and length inside the editable sections only.
- You must not output the full document.
- Return valid JSON only.

DOCUMENT OUTLINE:
${normalizedSections.map((section, index) => `${index + 1}. ${section.heading} [${section.id}]`).join('\n')}

EDITABLE SECTIONS:
${editableSections.map((section) => `SECTION ID: ${section.id}
BASE HEADING: ${section.baseHeading}
CURRENT HEADING: ${section.heading}
CURRENT CONTENT:
${section.content || '[No body content]'}
`).join('\n')}

CRITICAL:
- Return updates ONLY for the editable sections listed above.
- Do not include updates for any other section IDs.

Return JSON in this exact shape:
{
  "reply": "Brief explanation of what changed",
  "updates": [
    {
      "sectionId": "section_id_here",
      "headingSuffix": "optional updated subtitle after the dash only, or null if unchanged",
      "content": "updated section body only"
    }
  ]
}`

        const messages: any[] = [
            { role: 'system', content: systemPrompt }
        ]

        recentConversation.forEach((msg: Message) => {
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
            temperature: 0.4,
            max_tokens: 1400,
            response_format: { type: 'json_object' }
        })

        const parsedResponse = JSON.parse(completion.choices[0].message.content || '{}')
        const editableSectionIdSet = new Set(editableSections.map((section) => section.id))
        const updates = Array.isArray(parsedResponse.updates)
            ? parsedResponse.updates.filter((update: any) =>
                typeof update?.sectionId === 'string' &&
                editableSectionIdSet.has(update.sectionId)
            )
            : []
        const updatedSections = applySectionUpdates(normalizedSections, updates)
        const updatedCopy = rebuildDocumentFromSections(updatedSections)
        const hasChanges = updatedCopy.trim() !== originalCopy.trim()
        const aiResponse = parsedResponse.reply || 'I updated the requested section(s) while preserving your document structure.'

        // Log token usage
        const user = await getCurrentUser()
        if (user && completion.usage) {
            await logTokenUsage({
                userId: user.id,
                endpoint: 'refine-copy',
                promptTokens: completion.usage.prompt_tokens,
                completionTokens: completion.usage.completion_tokens,
                totalTokens: completion.usage.total_tokens,
                model: 'gpt-4o-mini'
            })
        }

        return NextResponse.json({
            message: aiResponse,
            updatedCopy: hasChanges ? updatedCopy : null,
            hasChanges,
            editedSections: editableSections.map((section) => section.heading),
            updatedSections
        })

    } catch (error: any) {
        console.error('Copy refinement error:', error)
        return NextResponse.json(
            { error: error.message || 'Failed to process request' },
            { status: 500 }
        )
    }
}
