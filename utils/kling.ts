const API_KEY = process.env.KLING_API_KEY; // Assure-toi que la variable est dans ton fichier .env

export async function generateVideoWithKling(description: string): Promise<string> {
  if (!API_KEY) {
    throw new Error('Missing Kling API key');
  }

  const response = await fetch('https://api.kling.ai/v1/generate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${API_KEY}`,
    },
    body: JSON.stringify({
      prompt: description,
      aspect_ratio: '16:9',
      duration: 5, // en secondes
    }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Failed to generate video');
  }

  const data = await response.json();
  return data.video_url; // ou ajuste selon la vraie structure retournée par l’API
}
