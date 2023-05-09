import LibrarySong from "./librarySong";

export default function Library({
  songs,
  setCurrentSong,
  setIsPlaying,
  audio,
  setSongs,
  libraryStatus,
}) {
  return (
    <div className={`song-library ${libraryStatus ? "active" : ""}`}>
      <h2>Library</h2>
      {songs.map((song) => (
        <LibrarySong
          audio={audio}
          setIsPlaying={setIsPlaying}
          songs={songs}
          setCurrentSong={setCurrentSong}
          id={song.id}
          key={song.id}
          song={song}
          setSongs={setSongs}
        />
      ))}
    </div>
  );
}
