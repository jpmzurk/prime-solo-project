import React, {useState, useEffect} from 'react';
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

const Player = ({ selectedSong }) => {
  
    const [recordings, setRecordings ] = useState([
        selectedSong ?
        {
            src: selectedSong.array_agg,
            title: 'no title provided',
        } 
        :
        {
            src: '',
            title: '',
        } 

    ])

     
    const titleFix = () => {
        let songTitle = ''
        if (selectedSong.array_agg.length > 0 ) {
        songTitle = String(selectedSong.array_agg[0]);
        songTitle = songTitle.split("/").pop()
        console.log(songTitle);
        setRecordings([{title: songTitle}])
        console.log(recordings);
        }
        
   }
  
    const onLoad = () => {
        let recordingsList = [];
        if (selectedSong.array_agg.length > 1 ){
            console.log('if statement is true');
            selectedSong.array_agg.map(recording => {
                return recordingsList.push({src: recording, title: 
                    
                    (recording.split("/").pop())})
            })
            console.log(recordingsList);
            setRecordings(recordingsList)
        }
    }
    useEffect(() => {
        titleFix();
        onLoad();
    }, []);

    // useEffect(onLoad, []);
    console.log(recordings);

    return (
        <>
        { recordings &&
            <AudioPlayer
                audioFiles={recordings}
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

export default Player;