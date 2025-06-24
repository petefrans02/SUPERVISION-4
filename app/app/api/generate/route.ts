import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const body = await req.json();
  const { prompt } = body;

  const apiKey = process.env.KLING_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: 'Missing API key' }, { status: 500 });
  }

  const response = await fetch('https://api.kling.ai/v1/generate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      prompt,
      aspect_ratio: '16:9',
      duration: 5,
    }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    return NextResponse.json({ error: errorData.message || 'Failed to generate video' }, { status: 500 });
  }

  const data = await response.json();
  return NextResponse.json({ url: data.video_url });
}
