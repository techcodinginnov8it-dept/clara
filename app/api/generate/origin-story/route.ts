import { NextResponse } from 'next/server'

export async function POST(request: Request) {
    try {
        const { answers } = await request.json()

        // In a real environment, we would call Gemini or another LLM here.
        // For this demonstration, I will simulate a high-quality AI response 
        // based on the user's specific answers and the requested format.

        // Constructing a detailed prompt (simulated)
        const prompt = `
      Format this story based on these answers:
      ${answers.map((a: string, i: number) => `Q${i + 1}: ${a}`).join('\n')}
      
      Requested Format:
      INTRO: The Man or Woman Behind the Mission
      STAGE 1: The Shift — My body isn’t broken. It’s blocked.
      STAGE 2: The Leap — I can do better.
      STAGE 3: The Setbacks — The mission isn’t in the building.
      STAGE 4: The Revelation — The body knows how to heal.
      STAGE 5: The Rise — This is just the beginning.
      WHY THIS STORY MATTERS
      Conclusion.
    `

        // Simulating AI Processing delay
        await new Promise(resolve => setTimeout(resolve, 2000))

        const simulatedStory = `
INTRO: The Man or Woman Behind the Mission
Before the accolades and the business growth, my life was defined by ${answers[0] || "[Life before business details]"}. I was searching for a path that matched my inner drive, but I hadn't found the vehicle yet.

STAGE 1: The Shift — My body isn’t broken. It’s blocked.
The turning point came when ${answers[1] || "[The epiphany/realization]"}. It was a moment of profound clarity where I realized that my potential wasn't broken, it was just blocked by the circumstances I was in.

STAGE 2: The Leap — I can do better.
I decided to take the leap. The first steps involved ${answers[2] || "[Initial actions taken]"}. I knew deep down that I could do better, not just for myself, but for the people I wanted to serve.

STAGE 3: The Setbacks — The mission isn’t in the building.
Success didn't come easily. Right away, I hit ${answers[3] || "[Early challenges]"}. There was even a moment when ${answers[4] || "[The moment of almost giving up]"} and I nearly walked away from it all. But then ${answers[5] || "[Finding the strength to continue]"} helped me find the strength to keep going.

STAGE 4: The Revelation — The body knows how to heal.
My breakthrough came when ${answers[6] || "[The 'aha' moment]"}. This revelation changed everything. I learned that ${answers[7] || "[Personal growth details]"}. I realized that the "Golden Thread" tying my whole journey together is ${answers[8] || "[The core theme/Golden Thread]"}.

STAGE 5: The Rise — This is just the beginning.
Since that moment, I've achieved ${answers[9] || "[Results and milestones]"}. But this is just the beginning of the mission.

WHY THIS STORY MATTERS
This story isn't just about me. It matters because ${answers[10] || "[How it inspires and connects]"}. It is a testament to the fact that when we align our mission with our unique journey, we become unstoppable.

Conclusion.
Thank you for being part of this journey. Together, we are building something that lasts.
`

        return NextResponse.json({ story: simulatedStory.trim() })

    } catch (error) {
        console.error('AI Generation error:', error)
        return NextResponse.json({ error: 'Failed to generate story' }, { status: 500 })
    }
}
