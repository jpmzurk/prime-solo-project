import React from 'react';
import { connect } from 'react-redux';
import AudioPlayer from "react-modular-audio-player";
import playIcon from './icons/play.png'
import pauseIcon from './icons/pause.png'
import skipBack from './icons/skip-previous.png'
import volume from './icons/volume-high.png'
import mute from './icons/volume-off.png'
import loop from './icons/all-inclusive.png'
import skipNext from './icons/skip-next.png'
// import More from './MoreMenu/more'

//for rearrange prop
let rearrangedPlayer = [
    {
        className: "top",
        style: { marginBottom: "0.2rem" },
        innerComponents: [
            {
                type: "name",
                style: { width: "55%", paddingLeft: '4rem' }
            },
        ]
    },
    {
        className: "middle",
        style: { width: '65%', marginTop: "0.8rem", paddingRight: '1em' },
        innerComponents: [
            {
                type: "play",
            },
            {
                type: "rewind",
            },
            {
                type: "forward",
            },
            {
                type: "volume",
                style: { width: "120.5%" }
            },

        ]
    },
    {
        className: "bottom",
        style: { marginTop: "1rem", width: '75%' },
        innerComponents: [
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

const Player = ({ song }) => {

    return (
        <>
        { song  &&
            <AudioPlayer
                audioFiles={[{src : song.preview_audio}]}
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
        }
        </>
    );
}

const mapStoreToProps = (reduxState) => {
    return {
        song: reduxState.song,
    };
};
export default connect(mapStoreToProps)(Player);