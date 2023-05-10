import "./styles/app.scss";
import React, { useState, useRef, useEffect } from "react";
import Player from "./components/player";
import Song from "./components/song";
import "./styles/app.scss";
import data from "./utils";
import Library from "./components/library";
import { Nav } from "./components/nav";
function App() {
  //Ref
  const audioRef = useRef(null);

  //States
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [libraryStatus, setLibraryStatus] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationProc: 0,
  });

  //time handler
  const timeHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    const roundedCurrent = Math.round(current);
    const durationCurrent = Math.round(duration);
    const animationProc = Math.round((roundedCurrent / durationCurrent) * 100);
    setSongInfo({
      ...songInfo,
      currentTime: current,
      duration: duration,
      animationProc,
    });
  };

  const handleEndSong = async () => {
    const currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    setTimeout(() => {
      if (isPlaying) {
        audioRef.current.play();
      }
    }, 500);
  };

  return (
    <div className={`App ${libraryStatus ? "library-active" : ""}`}>
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song song={currentSong} />
      <Player
        setSongs={setSongs}
        setCurrentSong={setCurrentSong}
        currentSong={currentSong}
        songs={songs}
        audioRef={audioRef}
        setSongInfo={setSongInfo}
        songInfo={songInfo}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
      <Library
        audio={audioRef}
        setIsPlaying={setIsPlaying}
        songs={songs}
        setCurrentSong={setCurrentSong}
        setSongs={setSongs}
        libraryStatus={libraryStatus}
        isPlaying={isPlaying}
      />
      <audio
        onLoadedMetadata={timeHandler}
        onTimeUpdate={timeHandler}
        ref={audioRef}
        src={currentSong.audio}
        onEnded={handleEndSong}
      />
    </div>
  );
}

export default App;
