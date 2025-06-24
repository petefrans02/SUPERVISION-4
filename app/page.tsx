// app/page.tsx
"use client";

import { useState } from "react";

export default function Home() {
  const [description, setDescription] = useState("");

  const handleGenerate = () => {
    alert(`You entered: ${description}`);
  };

  return (
    <main style={{ padding: "50px", textAlign: "center" }}>
      <h1>Supervision AI</h1>
      <p>Enter a description and generate a video using AI.</p>
      <input
        type="text"
        placeholder="e.g. A man walking in the rain"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={{ padding: "10px", width: "300px", fontSize: "16px" }}
      />
      <br />
      <button
        onClick={handleGenerate}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        Generate Video
      </button>
    </main>
  );
}
