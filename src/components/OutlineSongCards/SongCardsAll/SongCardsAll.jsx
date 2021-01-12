import React, { useEffect, useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { connect } from 'react-redux';
import SearchBar from '../Search/Search';
import MapAllSongCards from './MapAllSongCards';
import MapFilteredSongs from './MapFilteredSongs';

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        padding: '2em',
        paddingBottom: '7em'
    },
    search: {
        display: 'relative',
        top: '0%',
        right: '0%'
    }
}));

const UserHome = ({ dispatch, songs, history }) => {
    const { root, search } = useStyles();
    const [query, setQuery] = useState();

    useEffect(() => {
        dispatch({ type: 'FETCH_SONGS' })
    }, [dispatch]);


    const directWorkingCard = () => {
        history.push('/workingsong')
    }   
    

    return (
        <div >
            <SearchBar className={search} setQuery={setQuery} />
            <div className={root}>  
                {query ?
                    <MapFilteredSongs songs={songs} directWorkingCard={directWorkingCard} query={query}/>
                    :
                    <MapAllSongCards songs={songs} directWorkingCard={directWorkingCard} />
                }
            </div>
        </div>
    );
}

const mapStoreToProps = (reduxState) => {
    return {
        songs: reduxState.songs,
    };
};
export default connect(mapStoreToProps)(UserHome);
