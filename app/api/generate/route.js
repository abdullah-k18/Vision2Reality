import { NextResponse } from "next/server";
import OpenAI from "openai";

const systemPrompt = `
You are an expert at breaking down tasks into small actionable goals to achieve them.

Format the response in the following JSON structure:
{
  "tasks": [
    {
      "goals": [
        "Goal 1",
        "Goal 2",
        "Goal 3"
      ]
    }
  ]
}

Ensure the goals are concise, actionable, and directly relevant to the provided task.
`;

export async function POST(req) {
  try {
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const data = await req.json();

    if (!data.text) {
      return NextResponse.json({ error: "Input text is required." }, { status: 400 });
    }

    const completion = await openai.chat.completions.create({
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: data.text },
      ],
      model: "gpt-4o-mini",
      stream: false,
    });

    const responseContent = completion.choices[0].message.content;

    let tasks;
    try {
      tasks = JSON.parse(responseContent);
    } catch (error) {
      return NextResponse.json({ error: "Failed to parse AI response." }, { status: 500 });
    }

    return NextResponse.json(tasks);
  } catch (error) {
    console.error("Error creating tasks:", error);
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
  }
}
