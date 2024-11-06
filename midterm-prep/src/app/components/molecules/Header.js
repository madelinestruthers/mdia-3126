import React from "react"

export default function Header ({ fetchPictures, loading, pictureContents }) {
    return (
        <header>
        <h1>Chicago Institute of Art</h1>
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