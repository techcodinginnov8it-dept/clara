export type DocumentSection = {
    id: string
    heading: string
    baseHeading: string
    headingSuffix: string | null
    content: string
}

const STRUCTURED_HEADING_PATTERN = /^(INTRO|CONCLUSION|WHY THIS STORY MATTERS|STAGE\s+\d+|STEP\s+\d+|PHASE\s+\d+|MODULE\s+\d+|SECTION\s+\d+|ACT\s+\d+)\b/i

function slugify(value: string) {
    return value
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '_')
        .replace(/^_+|_+$/g, '')
}

function parseHeadingParts(heading: string) {
    const segments = heading.split(/\s+[—-]\s+/)
    if (segments.length > 1) {
        return {
            baseHeading: segments[0].trim(),
            headingSuffix: segments.slice(1).join(' - ').trim() || null,
        }
    }

    return {
        baseHeading: heading.trim(),
        headingSuffix: null,
    }
}

function isLikelyHeading(line: string) {
    const trimmed = line.trim()
    if (!trimmed || trimmed.length > 120) {
        return false
    }

    if (STRUCTURED_HEADING_PATTERN.test(trimmed)) {
        return true
    }

    if (/^[A-Z][A-Z0-9\s"'&().,:;!?/-]+$/.test(trimmed) && trimmed.length <= 90) {
        return true
    }

    if (/^[A-Z][^.!?]{0,80}$/.test(trimmed) && /:/.test(trimmed)) {
        return true
    }

    return false
}

function buildSection(heading: string, contentLines: string[]): DocumentSection {
    const { baseHeading, headingSuffix } = parseHeadingParts(heading)

    return {
        id: slugify(baseHeading || heading),
        heading: heading.trim(),
        baseHeading,
        headingSuffix,
        content: contentLines.join('\n').trim(),
    }
}

export function parseDocumentSections(copy: string) {
    const normalizedCopy = copy.replace(/\r\n/g, '\n').trim()

    if (!normalizedCopy) {
        return []
    }

    const lines = normalizedCopy.split('\n')
    const sections: DocumentSection[] = []
    let currentHeading: string | null = null
    let currentContent: string[] = []

    for (const line of lines) {
        if (isLikelyHeading(line)) {
            if (currentHeading) {
                sections.push(buildSection(currentHeading, currentContent))
            } else if (currentContent.some(contentLine => contentLine.trim())) {
                sections.push(buildSection('DOCUMENT', currentContent))
            }

            currentHeading = line.trim()
            currentContent = []
            continue
        }

        currentContent.push(line)
    }

    if (currentHeading) {
        sections.push(buildSection(currentHeading, currentContent))
    } else if (currentContent.some(contentLine => contentLine.trim())) {
        sections.push(buildSection('DOCUMENT', currentContent))
    }

    return sections.filter((section) => section.heading || section.content)
}

export function rebuildDocumentFromSections(sections: DocumentSection[]) {
    return sections
        .map((section) => {
            const heading = section.heading.trim()
            const content = section.content.trim()

            if (!content) {
                return heading
            }

            return `${heading}\n${content}`
        })
        .join('\n\n')
        .trim()
}

function buildAliases(section: DocumentSection) {
    const aliases = new Set<string>()
    const fullHeading = section.heading.toLowerCase()
    const baseHeading = section.baseHeading.toLowerCase()

    aliases.add(fullHeading)
    aliases.add(baseHeading)
    aliases.add(baseHeading.replace(/[^a-z0-9\s]/g, ' ').replace(/\s+/g, ' ').trim())

    const stageMatch = baseHeading.match(/(stage|step|phase|module|section|act)\s+(\d+)/i)
    if (stageMatch) {
        aliases.add(`${stageMatch[1].toLowerCase()} ${stageMatch[2]}`)
    }

    if (baseHeading.startsWith('intro')) {
        aliases.add('introduction')
        aliases.add('intro')
    }

    if (baseHeading.startsWith('conclusion')) {
        aliases.add('conclusion')
        aliases.add('ending')
    }

    return [...aliases].filter(Boolean)
}

export function inferTargetSections(userMessage: string, sections: DocumentSection[]) {
    const lowerMessage = userMessage.toLowerCase()

    if (!sections.length) {
        return []
    }

    if (/(whole document|entire document|whole thing|entire thing|all sections|all stages|every section|everything)/i.test(lowerMessage)) {
        return sections.map((section) => section.id)
    }

    const matchedSectionIds = sections
        .filter((section) => buildAliases(section).some((alias) => alias && lowerMessage.includes(alias)))
        .map((section) => section.id)

    return matchedSectionIds.length ? matchedSectionIds : sections.map((section) => section.id)
}

export function applySectionUpdates(
    sections: DocumentSection[],
    updates: Array<{ sectionId: string, content?: string, headingSuffix?: string | null }>
) {
    const updatesById = new Map(updates.map((update) => [update.sectionId, update]))

    return sections.map((section) => {
        const update = updatesById.get(section.id)

        if (!update) {
            return section
        }

        const nextHeadingSuffix = update.headingSuffix === undefined
            ? section.headingSuffix
            : (update.headingSuffix?.trim() || null)

        const nextHeading = nextHeadingSuffix
            ? `${section.baseHeading} — ${nextHeadingSuffix}`
            : section.baseHeading

        return {
            ...section,
            headingSuffix: nextHeadingSuffix,
            heading: nextHeading,
            content: typeof update.content === 'string' ? update.content.trim() : section.content,
        }
    })
}
