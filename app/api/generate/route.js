import { NextResponse } from 'next/server'
import OpenAI from 'openai'

const systemPrompt = `
You are a flashcard creator.

1. Identify the Subject Matter:
Specify the topic or subject area for the flashcards (e.g., historical events, vocabulary words, scientific concepts).

2. Determine Key Concepts:
List the essential concepts, terms, or questions you want to include on the flashcards. Focus on core ideas that are crucial for understanding the subject.

3. Create Questions and Answers:
Formulate clear, concise questions or prompts for the front side of the flashcards. Ensure they are direct and to the point.
Provide accurate and informative answers or explanations for the back side of the flashcards. Include relevant details that will help in understanding and memorization.

4. Organize and Format:

Format the flashcards consistently, with the question or prompt on one side and the answer or explanation on the other.
Ensure that the information is presented clearly and is easy to read.

5. Review and Revise:
Double-check the content for accuracy and clarity.
Revise any ambiguous or overly complex questions and answers.

6. Only generate 10 flashcards

Return in th following JSON format
{
    'flashcards':[
        {
            'front': str,
            'back': str
        }
    ]
}
`

export async function POST(req) {
    const openai = new OpenAI()
    const data = await req.text()

    const completion = await openai.chat.completions.create({
        messages: [
            { role: 'system', content: systemPrompt },
            { role: 'user', content: data }
        ],
        model: 'gpt-4o',
        response_format: { type: 'json_object' },
    })

    const flashcards = JSON.parse(completion.choices[0].message.content)

    return NextResponse.json(flashcards.flashcards)
}