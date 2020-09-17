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
    preLoad: {
        margin: '25em'
    }
}));

const UserHome = ({ dispatch, songs, history }) => {
    const {root, preLoad}= useStyles();

    useEffect(() => {
        dispatch({ type: 'FETCH_SONGS' })
    }, [dispatch]);

    const directWorkingCard = () => {
        history.push('/workingsong')
    }
                        //FIND A WAY TO KEEP HEADER DOWN WHILE GETTING INFO FROM SERVER
    return (
        <> 
       { songs ? <div className={root}>
            {songs.map((song, i) => {
            return <SongOutlineCard key={i} song={song} directWorkingCard={directWorkingCard}/>
             })}
        </div> : <div className={preLoad} ></div>  } 
        </> 
    );
}

const mapStoreToProps = (reduxState) => {
    return {
        songs: reduxState.songs,
    };
  };
export default connect(mapStoreToProps)(UserHome);
