import { generateVideoWithKling } from '../utils/kling';

const handleGenerate = async () => {
  try {
    const url = await generateVideoWithKling(description);
    setVideoUrl(url);
  } catch (error: any) {
    alert("Erreur : " + error.message);
  }
};
