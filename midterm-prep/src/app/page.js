"use client";
import { useState } from "react";
import Header from "./components/molecules/Header";
import './styles/styles.css';

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


  const PictureDisplay = () => {
    if (loading) {
      return <section style={{ fontSize: '30px', color: 'black', textAlign: 'right' }}>Loading Artwork...</section>;
    }

    if (error) {
      return <section>{error}</section>;
    }

    if (pictureContents) {
      return (
        <section>
          {pictureContents.map((picture, i) => {
            const imageUrl = `https://www.artic.edu/iiif/2/${picture.image_id}/full/843,/0/default.jpg`;
            const artistName = picture.artist_title ? picture.artist_title : "Unknown Artist";
            return (
              <article key={i}>
                <img src={imageUrl} alt={picture.title} />
                <h2>{picture.title}</h2>
                <p>{artistName}</p>
                <hr />
              </article>
            );
          })}
        </section>
      );
    }
  };
  return (
    <div className="m-8">
      <Header fetchPictures={fetchPictures} loading={loading} pictureContents={pictureContents}/>
      <PictureDisplay />
    </div>
  );
}
