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
        paddingBottom: '2em'
    },
    preLoad: {
        marginTop : '40em'
    }
}));

const UserHome = ({ dispatch, songs, history }) => {
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
    return (
        <>
            { songs.length > 1 ?
                <div className={root}>
                    {songs.map((song, i) => {
                        return <SongOutlineCard key={i} song={song} directWorkingCard={directWorkingCard} />
                    })}
                </div> : <div className={preLoad} ></div>}
        </>
    );
}

const mapStoreToProps = (reduxState) => {
    return {
        songs: reduxState.songs,
    };
};
export default connect(mapStoreToProps)(UserHome);
