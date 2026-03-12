import { NextResponse } from 'next/server'

export async function POST(request: Request) {
    try {
        const { answers } = await request.json()

        // Simulated AI generation for Market Gap report
        await new Promise(resolve => setTimeout(resolve, 2500))

        const report = `
EXECUTIVE SUMMARY: THE MARKET OPPORTUNITY
Based on your analysis, the market for your niche is currently saturated with providers who focus heavily on ${answers[2] || "[Competitor angle]"}, but they are consistently dropping the ball on ${answers[4] || "[Competitor weaknesses]"}. This has created a significant "White Space" for a solution that prioritizes ${answers[6] || "[Missing elements]"}.

COMPETITIVE LANDSCAPE: ANALYSIS
You have identified ${answers[0] || "[Competitors]"} as your primary rivals. While they offer ${answers[1] || "[Offerings]"} at price points ranging from mid to high tier, their focus remains on ${answers[3] || "[Competitor strengths]"}.

THE GAP: WHERE THE BALL IS DROPPING
The biggest weakness in current market offerings is ${answers[4] || "[Gap detail]"}. Deeply frustrated clients are vocal about ${answers[5] || "[Client frustrations]"}, seeking a provider who actually understands their need for ${answers[6] || "[Market wish list]"}.

THE WHITE SPACE: UNCLAIMED TERRITORY
Our analysis reveals a massive opportunity in ${answers[8] || "[The Opportunity]"}. This space is currently unclaimed by major players who are stuck in traditional loops.

YOUR DOMINANCE ANGLE: THE UNIQUE ARCHITECT
Your ${answers[9] || "[Unique strength/process]"} is the "Missing Key" the market has been waiting for. By positioning your ${answers[9]} against the ${answers[4]} of your competitors, you establish instant authority and desirability.

STRATEGIC RECOMMENDATION
Pivot your core messaging to highlight ${answers[8]} immediately. Use your ${answers[9]} as the vehicle to bridge the gap that ${answers[0]} have left wide open.

Conclusion.
This analysis confirms that you are positioned not just to compete, but to lead.
`

        return NextResponse.json({ report: report.trim() })
    } catch (error) {
        return NextResponse.json({ error: 'Generation failed' }, { status: 500 })
    }
}
