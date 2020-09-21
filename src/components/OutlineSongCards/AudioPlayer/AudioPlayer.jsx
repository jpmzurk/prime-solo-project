import React from 'react';
import AudioPlayer from "react-modular-audio-player";
import playIcon from './icons/play.png'
import pauseIcon from './icons/pause.png'
import skipBack from './icons/skip-previous.png'
import volume from './icons/volume-high.png'
import mute from './icons/volume-off.png'
import loop from './icons/all-inclusive.png'
import skipNext from './icons/skip-next.png'

//for rearrange prop
let rearrangedPlayer = [
    {   //only one line of audio player needed here
        className: "top",
        style: { display: 'flex', float: 'center', marginLeft: "2rem", marginBottom: '.75rem', width: '100%', marginTop: '-.5em' },
        innerComponents: [
            {   //accessing different built-in props of audio player
                type: "play",
            },
            {
                type: "seek",
                style: { width: "500%", paddingRight: '1rem' }
            },
            {
                type: "time",
            }
        ]
    },
];

// updated song get route to include array agg to create a key of all current uploaded audio files. created 
const Player = ({ song }) => {
    //local state to help with which audio files
  
    return (
        <> 
           { song.preview_audio &&
           <AudioPlayer
                audioFiles={[{ src: song.preview_audio }]}
                rearrange={rearrangedPlayer}
                iconSize="1.5rem"
                playIcon={playIcon}
                pauseIcon={pauseIcon}
                rewindIcon={skipBack}
                forwardIcon={skipNext}
                volumeIcon={volume}
                muteIcon={mute}
                loopIcon={loop}
                fontFamily="sans-serif"
                fontSize="1rem"
                playerWidth="auto"
            />}
        </>
    );
}

export default Player;