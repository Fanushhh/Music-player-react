import React from "react";

export default function LibrarySong({
  song,
  songs,
  setCurrentSong,
  setIsPlaying,
  audio,
  setSongs,
  id,
}) {
  const handleChangeSong = async () => {
    await setCurrentSong(song);
    audio.current.play();
    setIsPlaying(true);
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
    setSongs(newSongs);
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
