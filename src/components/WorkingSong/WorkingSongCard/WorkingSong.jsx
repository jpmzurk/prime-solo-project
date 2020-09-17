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
        marginTop: '2em',
        width: 700,
        marginBottom: '-1em',
    },
    root: {
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
        marginTop: '3em',
        marginBottom: '3em',
    },
    emptyCard: {
        marginTop: '20em',
        marginBottom: '35em'
    }
}));

const WorkingSong = ({ song, history, dispatch, recordings }) => {
    const { card, root, emptyCard } = useStyles();
    const [updated, setUpdated ] = useState(false);
    const [oldSongId, setOldSongId ] = useState(false);

    const directUserHome = () => {
        history.push('/user')
    }

    const directOriginalSong = () => {
        history.push('/originalsong');
    }

    useEffect(() => {
        console.log('working card ran useEffect');
        if (song.id === oldSongId){ 
            setUpdated(true)
            console.log('old songId same as "new" song id, updated was false');
        } else if ( song.id !== oldSongId){
            setOldSongId(song.id);
            console.log('song.id is different than oldSongId, updated was true', oldSongId);
            setUpdated(false);
            dispatch({ type: 'FETCH_RECORDINGS', payload: song.id })
        }
         return () => {
            console.log('ran cleanup');
            setUpdated(false)
        };
    }, [song.id, oldSongId, dispatch, updated, recordings]);

    return (
        <>
        {  (updated === true) ? 
        
        <div className={root} onDoubleClick={directUserHome}>
            <div onDoubleClick={e => e.stopPropagation()}>
                <Card className={card} style={{backgroundColor: song.color}}>
                    <WorkingCardMenu directUserHome={directUserHome} directOriginalSong={directOriginalSong} />
                    <CardContent>
                        <SongTitle />
                        <SongLyrics  />
                        <SongNotes />
                    </CardContent>
                    <WorkingSongPlayer />
                    <CardActions>
                    </CardActions>
                </Card>
            </div>
        </div> 
        
        : <div className={emptyCard} > </div>  }
        
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
