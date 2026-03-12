import { NextResponse } from 'next/server'

export async function POST(request: Request) {
    try {
        const { answers } = await request.json()

        // Simulated AI generation for Unique Mechanism Blueprint
        await new Promise(resolve => setTimeout(resolve, 3000))

        const report = `
UNIQUE MECHANISM BLUEPRINT: THE PROPRIETARY EDGE

THE MARKET LIE: WHAT THEY'VE BEEN TOLD
The industry currently teaches ${answers[0] || "[Common approaches]"}, but these methods are fundamentally flawed because ${answers[1] || "[Flaws]"}. This creates a "Market Lie" that keeps your clients stuck in a loop of ${answers[5] || "[Core frustration]"}.

THE FOUNDATIONAL TRUTH: YOUR NEW STANDARD
Your methodology stands on a different truth: ${answers[6] || "[Foundational truth]"}. This isn't just a different way of doing things; it's a different way of thinking. Ideal clients aren't looking for more ${answers[0] || "[Approaches]"}; they actually want ${answers[2] || "[What they want]"}.

THE CATALYTIC SHIFT: WHY YOU WIN
The one key difference in how you help clients get results is ${answers[7] || "[The shift]"}. By removing the friction of ${answers[8] || "[Friction point]"}, your process makes success not just possible, but inevitable.

THE BRANDED SYSTEM: THE ${answers[10] || "[Mechanism Name]"}
You have now claimed ownership of the "${answers[11] || "[Lane/Category]"}" lane with your proprietary system: **${answers[10] || "[Mechanism Name]"}**. 

Your Step-by-Step Delivery:
${answers[9] || "[Step-by-step process]"}

THE PROPRIETARY EDGE
While others are focused on ${answers[4] || "[Competitor patterns]"}, you can confidently guarantee ${answers[12] || "[The promise]"} because of your unique ${answers[10] || "[Mechanism Name]"}.

IDENTITY TRANSFORMATION
This mechanism doesn't just give your clients a result; it gives them a new identity as ${answers[13] || "[New Identity]"}. They are no longer just ${answers[11] || "[Lane/Category]"} practitioners; they are masters of their results.

CONCLUSION
The ${answers[10] || "[Mechanism Name]"} is your vehicle for market dominance. It solves the frustration of ${answers[5]} and bridges the gap between the industry's flaws and your clients' ultimate desires.
`

        return NextResponse.json({ report: report.trim() })
    } catch (error) {
        return NextResponse.json({ error: 'Generation failed' }, { status: 500 })
    }
}
