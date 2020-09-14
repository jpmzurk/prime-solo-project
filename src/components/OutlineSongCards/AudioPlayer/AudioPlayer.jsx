import React, { useState, useEffect } from 'react';
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
        style: { marginRight: "-.25rem", width: '85%' },
        innerComponents: [
            {   //accessing different built-in props of audio player
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

// updated song get route to include array agg to create a key of all current uploaded audio files. created 
const Player = ({ song }) => {
    //local state to help with which audio files
    const [preview, setPreview] = useState('')

    const previewSong = () => {
        setPreview(song.preview_audio)
        // if statement to check if there are indeed multiple audio files and then to use the preview_audio file. 
        // if not, the only audio file provided 
        // song.array_agg.length > 1 ?  setPreview(song.preview_audio) :  setPreview(song.array_agg[0]) 
    }
    // prevent constant reRenders of function above
    useEffect(previewSong, []);

    return (
        <> 
            <AudioPlayer
                audioFiles={[{ src: preview }]}
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