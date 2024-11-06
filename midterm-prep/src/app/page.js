"use client";
import { useState } from "react";
import Header from "./components/molecules/Header";
import './styles/styles.css';
import PictureDisplay from "./components/organisms/PictureDisplay";

export default function Home() {
  const [pictureContents, setPictureContents] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchPictures() {
    setLoading(true);
    setError(null);
    setPictureContents(null);

    const API_URL = "https://api.artic.edu/api/v1/artworks";

    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error("Network response is bad");
      }
      const data = await response.json();
      setPictureContents(data.data);
    } catch (error) {
      setError("Failed to load artwork. Better luck next time.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="m-8">
      <Header fetchPictures={fetchPictures} loading={loading} pictureContents={pictureContents} />
      <PictureDisplay loading={loading} error={error} pictureContents={pictureContents} />
    </div>
  );
}
