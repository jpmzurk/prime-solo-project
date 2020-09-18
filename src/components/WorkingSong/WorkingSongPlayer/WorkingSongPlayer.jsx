import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import AudioPlayer from "react-modular-audio-player";
import playIcon from './icons/play.png'
import pauseIcon from './icons/pause.png'
import skipBack from './icons/skip-previous.png'
import volume from './icons/volume-high.png'
import mute from './icons/volume-off.png'
import loop from './icons/all-inclusive.png'
import skipNext from './icons/skip-next.png'
import { makeStyles } from '@material-ui/core/styles';
import rearrangedPlayer from './PlayerConfig'

const useStyles = makeStyles((theme) => ({
   emptyCard: {
        paddingBottom: '6em'
   }
}));


const Player = ({ recordings, audioPlayer }) => {
    const { emptyCard } = useStyles()
    useEffect(() => {

    }, [recordings, audioPlayer]);

    return (
        <>
            { (!recordings || audioPlayer === true)
                ? <div className={emptyCard}> </div>:
                <div >
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
                </div>
            }
        </>
    );
}

const mapStoreToProps = (reduxState) => {
    return {
        recordings: reduxState.recordings,
        audioPlayer: reduxState.audioPlayer
    };
};
export default connect(mapStoreToProps)(Player);