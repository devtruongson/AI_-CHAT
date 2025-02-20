import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    const { q } = await req.json();
    const apiKey = 'AIzaSyCHIId7Q80cEF4PFDaJt6JwIG5EQuKUqvU';
    const genAI = new GoogleGenerativeAI(apiKey);

    const model = genAI.getGenerativeModel({
        model: 'gemini-1.5-flash',
    });

    const chatSession = model.startChat({
        generationConfig: {
            temperature: 1,
            topP: 0.95,
            topK: 64,
            maxOutputTokens: 8192,
            responseMimeType: 'text/plain',
        },
        history: [],
    });

    const res = await chatSession.sendMessage(q);
    return NextResponse.json(res);
}
