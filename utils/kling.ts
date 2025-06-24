// utils/kling.ts

export async function generateVideoWithKling(prompt: string) {
  const response = await fetch("https://api.piapi.ai/kling/generate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ee7411e9f4ca4f95a5a7e1082a417c7f7cde531e7924ec141cfaa536813228ab`,
    },
    body: JSON.stringify({
      prompt: prompt,
      duration: 5, // durée en secondes
      resolution: "720p", // ou 1080p
      style: "realistic", // ou "anime", "cinematic", etc.
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || "Échec de la génération vidéo");
  }

  return data.video_url; // ou ajuster selon ce que l’API retourne
}
