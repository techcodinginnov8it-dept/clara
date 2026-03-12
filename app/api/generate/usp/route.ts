import { NextResponse } from 'next/server'

export async function POST(request: Request) {
    try {
        const { answers } = await request.json()

        // Simulated AI generation for USP Transformation Blueprint
        await new Promise(resolve => setTimeout(resolve, 3000))

        const report = `
USP TRANSFORMATION BLUEPRINT: THE "I HELP" STATEMENT

THE CORE TRANSFORMATION
You serve ${answers[0] || "[Ideal Client]"} who are currently overwhelmed by ${answers[1] || "[Struggle]"}. Your mission is to move them into a state of ${answers[2] || "[Deep Desire]"}, delivering the specific result of ${answers[3] || "[Transformation result]"}.

IMPACT ANALYSIS: EMOTIONAL & FINANCIAL
By eliminating the problem of ${answers[4] || "[Big Problem]"}, you enable a shift that matters because ${answers[5] || "[Reason it matters]"}. This isn't just about the logistics; it's about the emotional freedom and financial stability that follows.

YOUR PROPRIETARY EDGE
While others offer generic solutions that fail, your ${answers[6] || "[Approach/Mechanism]"} succeeds because it specifically addresses ${answers[7] || "[Why it works]"}. This creates a level of consistency and speed that the market simply hasn't seen before.

THE FINAL USP ("I HELP") STATEMENT
"${answers[14] || answers[8] || "[Final USP Statement]"}"

QUALITY CHECK: THE 3 C'S
- Clear: YES. Even a 12-year-old can see how you help ${answers[0]} achieve ${answers[3]}.
- Compelling: YES. It focuses on the high-value transformation of ${answers[2]}.
- Credible: YES. It relies on the proprietary ${answers[6]} rather than generic hype.

NEXT STEPS
Deploy this statement across all marketing channels. It is the lighthouse for your tribe.
`

        return NextResponse.json({ report: report.trim() })
    } catch (error) {
        return NextResponse.json({ error: 'Generation failed' }, { status: 500 })
    }
}
