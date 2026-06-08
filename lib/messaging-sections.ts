import { DocumentSection, parseDocumentSections } from '@/lib/document-structure'

export function serializeSections(sections: DocumentSection[] | null | undefined) {
    if (!sections?.length) {
        return null
    }

    return JSON.stringify(sections)
}

export function deserializeSections(
    rawSections: string | null | undefined,
    fallbackDocument?: string | null
) {
    if (rawSections) {
        try {
            const parsed = JSON.parse(rawSections)
            if (Array.isArray(parsed)) {
                return parsed as DocumentSection[]
            }
        } catch (error) {
            // Fall through to document parsing below.
        }
    }

    if (fallbackDocument) {
        return parseDocumentSections(fallbackDocument)
    }

    return []
}
