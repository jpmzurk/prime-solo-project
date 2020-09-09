import React from 'react';
import AudioPlayer from "react-modular-audio-player";
import playIcon from './icons/play.png'
import pauseIcon from './icons/pause.png'
import skipBack from './icons/skip-previous.png'
import volume from './icons/volume-high.png'
import mute from './icons/volume-off.png'
import loop from './icons/all-inclusive.png'
import skipNext from './icons/skip-next.png'

let audioFiles = [
    {
        src: "https://freesound.org/data/previews/532/532774_6738752-lq.mp3",
        title: "atlantic ",
        // artist: "unknown"
    },
    {
        src: "https://freesound.org/data/previews/532/532991_4397472-lq.mp3",
        title: "atlantic city demo",
    },
];

//for rearrange prop
let rearrangedPlayer = [
    {
        className: "top",
        style: { marginRight: "-.25rem", width: '85%' },
        innerComponents: [
            {
                type: "play",
            },
            {
                type: "seek",
                style: { width: "300%", paddingRight: '1rem' }
            },
            {
                type: "time",
            }
        ]
    },
];

const Player = () => {
    return (
        <>
            <AudioPlayer
                audioFiles={audioFiles}
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
            />
        </>
    );
}

export default Player;