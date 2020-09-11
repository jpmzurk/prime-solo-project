import React, { useEffect } from 'react';
import { makeStyles} from "@material-ui/core/styles";
import { connect } from 'react-redux';
import SongOutlineCard from '../SongOutlineCard/SongOutlineCard'

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
    },
}));

const UserHome = ({ dispatch, songs, history }) => {
    const classes = useStyles();
    const getSongs = () => {
        dispatch({ type: 'FETCH_SONGS' })
    }

    useEffect(getSongs, []);

    const directWorkingCard = () => {
        history.push('/workingsong')
        console.log('clicked to working card');
    }
    return (
        <div className={classes.root}>
            {songs.map((song, i) => {
            return <SongOutlineCard key={i} song={song} directWorkingCard={directWorkingCard}/>
             })}
        </div>
    );
}

const mapStoreToProps = (reduxState) => {
    return {
        songs: reduxState.songs,
    };
  };
export default connect(mapStoreToProps)(UserHome);
