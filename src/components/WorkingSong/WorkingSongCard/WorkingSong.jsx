import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from 'react-redux';
import { Card, CardContent, Typography, CardActions } from '@material-ui/core';
import WorkingSongPlayer from '../WorkingSongPlayer/WorkingSongPlayer';
import WorkingCardMenu from '../WorkingCardMenu/WorkingCardMenu';
import SongTitle from './WorkingSongComponents/SongTitle';
import SongLyrics from './WorkingSongComponents/SongLyrics';
import SongNotes from './WorkingSongComponents/SongNotes';

const useStyles = makeStyles((theme) => ({
    card: {
        marginTop: '2em',
        backgroundColor: "#EBEBEB",
        width: 500,
        // height: 500,
    },
    root: {
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
        marginTop: '3em',
        marginBottom: '6em',
    }
}));

const WorkingSong = ({ song, history, dispatch }) => {
    const { card, root } = useStyles();

    const directUserHome = () => {
        console.log('clicked to home');
        history.push('/user')
    }

    const directOriginalSong = () => {
        console.log('clicked to home');
        history.push('/originalsong')
    }

    useEffect(() => {
        updateStore()
    }, [song]);

    const updateStore = () => {
        console.log('in update store');
        dispatch({ type: 'FETCH_RECORDINGS', payload: song.id })
    }

    return (
        <div className={root} onDoubleClick={directUserHome}>
            <div onDoubleClick={e => e.stopPropagation()}>
                <Card className={card} >
                    <WorkingCardMenu directUserHome={directUserHome} directOriginalSong={directOriginalSong} />
                    <CardContent>
                        <SongTitle />
                        <SongLyrics />
                        <SongNotes />
                    </CardContent>
                    <WorkingSongPlayer />
                    <CardActions>
                    </CardActions>
                </Card>
            </div>
        </div>
    );
}

const mapStoreToProps = (reduxState) => {
    return {
        song: reduxState.song,
    };
};
export default connect(mapStoreToProps)(WorkingSong);
