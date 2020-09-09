import React from 'react';
import AudioPlayer from "react-modular-audio-player";
import playIcon from './icons/play.png'
import pauseIcon from './icons/pause.png'
import skipBack from './icons/skip-previous.png'
import volume from './icons/volume-high.png'
import mute from './icons/volume-off.png'
import loop from './icons/all-inclusive.png'
import skipNext from './icons/skip-next.png'
// import More from './MoreMenu/more'

let audioFiles = [
    {
        src: "https://freesound.org/data/previews/532/532991_4397472-lq.mp3",
        title: "atlantic city demo",
    },
    {
        src: "https://freesound.org/data/previews/532/532774_6738752-lq.mp3",
        title: "atlantic first idea",
    },
];

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

const Player = () => {
    return (
        <>
            <AudioPlayer
                audioFiles={audioFiles}
                rearrange={rearrangedPlayer}
                iconSize="1.5rem"
                playIcon={playIcon}
                // playHoverIcon={bigPlay}
                pauseIcon={pauseIcon}
                rewindIcon={skipBack}
                forwardIcon={skipNext}
                volumeIcon={volume}
                muteIcon={mute}
                loopIcon={loop}
                fontFamily="sans-serif"
                fontSize="1rem"
            // playerWidth="auto"
            />
        </>
    );
}

export default Player;





















// import React, { Component } from 'react'
// import AudioPlayer from '../src/index'

// const playlist = [
//   { name: '枝芽', src: 'https://hanzluo.s3-us-west-1.amazonaws.com/music/zhiya.mp3' },
//   { name: '自由女神', src: 'https://hanzluo.s3-us-west-1.amazonaws.com/music/ziyounvshen.mp3' },
//   { name: '无雨无晴', src: 'https://hanzluo.s3-us-west-1.amazonaws.com/music/wuyuwuqing.mp3' },
//   { name: '碎片', src: 'https://hanzluo.s3-us-west-1.amazonaws.com/music/suipian.mp3' },
//   { name: '永恒的港湾', src: 'https://hanzluo.s3-us-west-1.amazonaws.com/music/yonghengdegangwan.mp3' },
// ]


// class PlayList extends Component {
//   state = {
//     currentMusicIndex: 0,
//   }

//   handleClickPrevious = () => {
//     this.setState((prevState) => ({
//       currentMusicIndex: prevState.currentMusicIndex === 0 ? playlist.length - 1 : prevState.currentMusicIndex - 1,
//     }))
//   }

//   handleClickNext = () => {
//     this.setState((prevState) => ({
//       currentMusicIndex: prevState.currentMusicIndex < playlist.length - 1 ? prevState.currentMusicIndex + 1 : 0,
//     }))
//   }

//   render() {
//     const { currentMusicIndex } = this.state
//     return (
//       <div>
//         <p>currentMusicIndex: {currentMusicIndex}</p>
//         <AudioPlayer
//           autoPlayAfterSrcChange={true}
//           showSkipControls={true}
//           showJumpControls={false}
//           src={playlist[currentMusicIndex].src}
//           onClickPrevious={this.handleClickPrevious}
//           onClickNext={this.handleClickNext}
//         />
//       </div>
//     )
//   }
// }

// export default PlayList