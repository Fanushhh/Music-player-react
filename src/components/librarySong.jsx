import React from "react";

export default function LibrarySong({
  song,
  songs,
  isPlaying,
  setCurrentSong,
  setIsPlaying,
  audio,
  setSongs,
  id,
}) {
  const handleChangeSong = async () => {
    await setCurrentSong(song);

    const newSongs = songs.map((song) => {
      if (song.id === id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });
    await setSongs(newSongs);
    if (isPlaying) audio.current.play();
  };

  return (
    <div
      onClick={handleChangeSong}
      className={`library-song ${song.active ? "selected" : ""}`}
    >
      <img src={song.cover} alt="album image" />
      <div className="song-description">
        <h1>{song.name}</h1>
        <h3>{song.artist}</h3>
      </div>
    </div>
  );
}
