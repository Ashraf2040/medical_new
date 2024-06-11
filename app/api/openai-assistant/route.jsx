import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

// Enable Edge Functions in Vercel
export const runtime = "edge";

// Post a new message and stream OpenAI Assistant response
export async function POST(request) {
    // 1. Parse the message from the POST request
    const newMessage = await request.json();

    // 2. Create OpenAI client
    const openai = new OpenAI();

    // 3. Thread Handling
    // - If no thread ID, create a new OpenAI thread
    if (newMessage.threadId == null) {
        const thread = await openai.beta.threads.create();
        newMessage.threadId = thread.id;
    }

    // 4. Add new message to thread
    await openai.beta.threads.messages.create(
        newMessage.threadId,
        {
            role: "user",
            content: newMessage.content
        }
    );

    // 5. Create and Stream Run
    const stream = await openai.beta.threads.runs.create(
        newMessage.threadId,
        { assistant_id: newMessage.assistantId, stream: true }
    );

    // 6. Return response with the stream
    return new Response(stream.toReadableStream());
}