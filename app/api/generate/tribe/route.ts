import { NextResponse } from 'next/server'

export async function POST(request: Request) {
    try {
        const { answers } = await request.json()

        // Simulated AI generation for Tribal Identity Synthesis
        await new Promise(resolve => setTimeout(resolve, 3000))

        const report = `
TRIBAL IDENTITY & DEEP DIVE ANALYSIS: THE SYNTHESIS

AUDIENCE ARCHETYPE: THE UNHEARD VISIONARY
Your tribe in the ${answers[0] || "[Industry]"} space is primarily composed of ${answers[1] || "[Specialized Segment]"}. They are high-performers struggling with ${answers[2] || "[Pain points]"}, feeling like they are "running on a treadmill" despite their best efforts.

CORE EMOTIONAL DRIVERS: THE ENERGY DRAIN
The average day for your tribe is an emotional roller coaster of ${answers[13] || "[Emotions]"}. They are drained by ${answers[9] || "[Daily frustrations]"}, which keeps them in a state of ${answers[10] || "[Deepest fear]"}. Their secret wish is simply to ${answers[8] || "[Secret wish]"}, yet they tell themselves "${answers[17] || "[Sticking story]"}" to justify their current stagnation.

THE IDENTITY GAP: FROM STUCK TO SOARING
Right now, they see themselves as ${answers[11] || "[Current identity]"}, feeling ${answers[11] || "[ Feelings about identity]"}. They desperately want to become ${answers[12] || "[Target identity]"}, a version of themselves that feels ${answers[12] || "[Target feelings]"}.

MESSAGING TONE GUIDE: SPEAKING THEIR LANGUAGE
To resonate, your messaging must adopt a ${answers[19] || "[Tone]"} tone. You must bridge the gap between their misconception that "${answers[15] || "[Misconceptions]"}" and the reality that their ultimate desire is ${answers[14] || "[Ultimate desire]"}.

THE CATALYTIC TRANSFORMATION: YOUR UNIQUE IMPACT
After working with you, your tribe will no longer behave as ${answers[11] || "[Old behavior]"}; instead, they will adopt the new identity of ${callToIdentity(answers)}. They will feel ${answers[20] || "[New feelings]"} and finally move past the ${answers[16] || "[Common mistakes]"} that held them back.

AUDIENCE DEEP DIVE SUMMARY: THE PATH FORWARD
${answers[22] || "[Manual Summary Output]"}
`

        function callToIdentity(ans: string[]) {
            return ans[21] || "[New Identity]"
        }

        return NextResponse.json({ report: report.trim() })
    } catch (error) {
        return NextResponse.json({ error: 'Generation failed' }, { status: 500 })
    }
}
