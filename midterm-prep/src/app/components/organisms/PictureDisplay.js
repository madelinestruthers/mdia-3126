import React from 'react';


export default function PictureDisplay({ loading, error, pictureContents }) {
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
            </article>
          );
        })}
      </section>
    );
  }

  return null; 
}
