'use client';

import { useState } from 'react';
import { generateVideoWithKling } from '../utils/kling';

export default function Page() {
  const [description, setDescription] = useState('');
  const [videoUrl, setVideoUrl] = useState('');

  const handleGenerate = async () => {
    try {
      const url = await generateVideoWithKling(description);
      setVideoUrl(url);
    } catch (error: any) {
      alert("Erreur : " + error.message);
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">🎬 Supervision AI</h1>
      <p className="mb-6 text-center text-gray-700">
        Describe your video scene and generate it using AI
      </p>

      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="e.g. A man walking in the rain"
        className="w-full max-w-xl p-4 rounded border border-gray-300 mb-4"
        rows={4}
      />

      <button
        onClick={handleGenerate}
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
      >
        Generate Video
      </button>

      {videoUrl && (
        <div className="mt-6">
          <p className="mb-2">🎥 Video generated:</p>
          <a
            href={videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            View video
          </a>
        </div>
      )}
    </main>
  );
}
