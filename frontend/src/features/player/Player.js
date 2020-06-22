import ReactAudioPlayer from "react-audio-player";
import React, { useState } from "react";
import BirdAmbience from "../sounds/Birdambience.mp3";

const Player = () => {
    const [audio, setAudio] = useState("");


    
    return (
        <ReactAudioPlayer src={BirdAmbience} autoPlay controls/>
    )
}

export default Player;

// import React from 'react'

// class AudioPlayer extends React.Component {
//   render() {
//     return (
//       <div>
//         <audio ref="audio_tag" src="./static/music/foo.mp3" controls/>
//       </div>
//     );
//   }
// }

// export default AudioPlayer;