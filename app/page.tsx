const handleGenerate = async () => {
  const res = await fetch('/api/generate-video', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ prompt: description }),
  });

  const data = await res.json();
  setVideoUrl(data.url);
};
