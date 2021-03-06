import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from 'react-redux';
import { Card, CardContent, CardActions } from '@material-ui/core';
import WorkingSongPlayer from '../WorkingSongPlayer/WorkingSongPlayer';
import WorkingCardMenu from '../WorkingCardMenu/WorkingCardMenu';
import SongTitle from './WorkingSongComponents/SongTitle';
import SongLyrics from './WorkingSongComponents/SongLyrics';
import SongNotes from './WorkingSongComponents/SongNotes';

const useStyles = makeStyles((theme) => ({
    card: {
        width: 700,
        marginBottom: '1em',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
    },
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        marginTop: '4em',
        marginBottom: '3em',
    },
    emptyCard: {
        marginTop: '20em',
        marginBottom: '35em'
    },
    noCard: {
        marginBottom: '20em'
    }
}));

const WorkingSong = ({ song, history, dispatch, recordings }) => {
    const { card, root, emptyCard, noCard } = useStyles();
    const [updated, setUpdated] = useState(false);
    const [oldSongId, setOldSongId] = useState(false);

    const directUserHome = () => {
        dispatch({type: 'CLEAR_SELECTED_SONG'})
        history.push('/user');
    }

    const directOriginalSong = () => {
        history.push('/originalsong');
    }

    useEffect(() => {
        if (song.id === oldSongId) {
            setUpdated(true)

        } else if (song.id !== oldSongId) {
            setOldSongId(song.id);
            setUpdated(false);
            dispatch({ type: 'FETCH_RECORDINGS', payload: song.id })
        }
        return () => {
            setUpdated(false)
        };
    }, [song.id, oldSongId, dispatch, updated, recordings]);

    return (
        <>  

            {  (updated) ?
                <div className={root} onDoubleClick={directUserHome}>
                    <div onDoubleClick={e => e.stopPropagation()}>
                        <Card style={{ backgroundColor: song.color }} raised={true}>
                            <WorkingCardMenu directUserHome={directUserHome} directOriginalSong={directOriginalSong} />
                            <section >
                                <CardContent className={card}>
                                    <SongTitle />
                                    <SongLyrics />
                                    <SongNotes />
                                </CardContent>
                            </section>
                            <WorkingSongPlayer />
                            <CardActions>
                            </CardActions>
                        </Card>
                    </div>
                </div>

                : <div className={emptyCard} > </div>}
            {song.id === 1.1 && <div className={noCard} > </div>}
        </>
    );
}


const mapStoreToProps = (reduxState) => {
    return {
        song: reduxState.song,
        recordings: reduxState.recordings,
    };
};
export default connect(mapStoreToProps)(WorkingSong);
