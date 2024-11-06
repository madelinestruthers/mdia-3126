import React from "react"

export default function Header ({ fetchPictures, loading, pictureContents }) {
    return (
        <header>
        <h1>Art Through the Ages</h1>
        {!loading && !pictureContents && (
          <button
            disabled={loading}
            className="border-2 p-2"
            onClick={fetchPictures}
          >
            Discover Artwork
          </button>
        )}
      </header>
    );
  }