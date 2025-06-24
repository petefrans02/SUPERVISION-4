export async function generateVideoWithKling(prompt: string): Promise<string> {
  const API_KEY = 'ee7411e9f4ca4f95a5a7e1082a417c7f7cde531e7924ec141cfaa536813228ab';

  try {
    const response = await fetch('https://api.kling.ai/v1/videos/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        prompt: prompt,
        aspect_ratio: '16:9',     // ou '9:16' si tu veux du format TikTok
        duration: 5,              // durée de la vidéo (en secondes)
        language: 'en',           // ou 'fr' si Kling le supporte
      }),
    });

    if (!response.ok) {
      throw new Error(`Erreur API Kling: ${response.statusText}`);
    }

    const data = await response.json();
    return data.video_url || '';
  } catch (error) {
    console.error('Erreur lors de la génération de la vidéo :', error);
    return '';
  }
}
