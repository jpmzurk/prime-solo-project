import React, { useEffect } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { connect } from 'react-redux';
import SongOutlineCard from '../SongOutlineCard/SongOutlineCard'

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        paddingBottom: '2em',
    },
    preLoad: {
        marginTop: '40em'
    }
}));

const UserHome = ({ dispatch, songs, history, keyword }) => {
    const { root, preLoad } = useStyles();

    useEffect(() => {
        dispatch({ type: 'FETCH_SONGS' })
    }, [dispatch]);

    useEffect(() => {
        dispatch({ type: 'START_SEARCHABLE' })
    }, [dispatch]);


    const directWorkingCard = () => {
        history.push('/workingsong')
    }

    const filteredSongs =
        songs.filter(song => {
            return song.song_title.toLowerCase().includes(keyword.toLowerCase())
        })
    


    return (
        <div>
            { 
                <>
                    { songs.length > 1 ?
                        <div className={root}>
                            {songs.map((song, i) => {
                                return <SongOutlineCard key={i} song={song} directWorkingCard={directWorkingCard} />
                            })}
                        </div> : <div className={preLoad} ></div>}
                </>
            }

        </div>
    );
}

const mapStoreToProps = (reduxState) => {
    return {
        songs: reduxState.songs,
        keyword: reduxState.search.keyword
    };
};
export default connect(mapStoreToProps)(UserHome);
