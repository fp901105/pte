import React from 'react'
import ReactDOM from 'react-dom'
import AudioPlayer from "react-h5-audio-player";

export const Player = () => (
  <AudioPlayer
    src="./audio/001.mp3"
    onPlay={e => console.log("onPlay")}
    // other props here
  />
);

