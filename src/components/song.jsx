import React from "react";

export default function Song({ song }) {
  return (
    <div className="song-container">
      <img src={song.cover} alt="album image" />
      <h1>{song.name}</h1>
      <p>{song.artist}</p>
    </div>
  );
}
