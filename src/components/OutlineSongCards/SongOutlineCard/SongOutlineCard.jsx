import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import AudioPlayer from '../AudioPlayer/AudioPlayer'
import Typography from "@material-ui/core/Typography";
import SongOutlineMenu from '../SongOutlineMenu/SongOutlineMenu'
import { connect } from 'react-redux';
import Draggable from 'react-draggable';

const useStyles = makeStyles(() => ({
    card: {
        marginTop: '2em',
        marginLeft: '1.5em',
        marginRight: '1.5em',
        width: 350,
        maxHeight: 350,
        minHeight: 270,
        flexDirection: 'column',
        position: 'relative',
        zIndex: 0.5
    },
    text: {
        display: 'flex',
        width: 295,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        maxHeight: '7.4em',
        lineHeight: '1.8em',
        whiteSpace: 'pre-line',
        fontSize: 14.5,
        paddingBottom: '2em',
    },
    player: {
        position: 'absolute',
        bottom: '0em'
    },
    title: {
        fontFamily: 'Lato, sansSerif',
    }
}));

const SongCards = ({ song, directWorkingCard, dispatch, updatedSong, resetCoordinates, songs }) => {
    const { card, text, player, title } = useStyles();
    const [reset, setReset] = useState(null);


    useEffect(() => {
        if (reset) {
            setReset(null)
        }
        if (resetCoordinates) {
            setReset(null)
            dispatch({ type: 'RESET_FALSE' })
        }
    }, [updatedSong, songs])


    const handleDoubleClick = () => {
        dispatch({ type: 'SETTING_SONG', payload: song.song_id });
        directWorkingCard()
    }

    const updatePosition = (data) => {
        song.id = song.song_id
        song.x = data.lastX
        song.y = data.lastY

        dispatch({ type: 'UPDATE_XY', payload: song });
    }

    const resetPosition = () => {
        console.log('in resetPosition');
        setReset(true)
    }

    return (
        <>
            { song && 
                <Draggable
                    bounds="parent"
                    defaultPosition={{ x: song.position_x, y: song.position_y }}
                    position={(reset || resetCoordinates) && { x: updatedSong.position_x, y: updatedSong.position_y }}
                    onStop={(e, data) => updatePosition(data)}
                    
                >
                    <div style={{transform: `translate(0px, 0px)`}}> 
                    <Card className={card} 
                            onDoubleClick={handleDoubleClick} style={{ background: (song.color) }} raised={true}>
                        <section >
                            <SongOutlineMenu directWorkingCard={directWorkingCard} song={song} resetPosition={resetPosition} />
                            <CardContent >
                                <Typography gutterBottom variant="h5" component="h5" className={title}>
                                    {song.song_title}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p" className={text} >
                                    {song.lyrics}
                                </Typography>

                            </CardContent>

                            <CardActions className={player}>
                                <AudioPlayer song={song} />
                            </CardActions>
                        </section>
                    </Card>
                    </div>
                </Draggable>}


        </>
    );
}


const mapStoreToProps = (reduxState) => {
    return {
        updatedSong: reduxState.song,
        resetCoordinates: reduxState.resetCoordinates,
        songs: reduxState.songs
    };
};
export default connect(mapStoreToProps)(SongCards);