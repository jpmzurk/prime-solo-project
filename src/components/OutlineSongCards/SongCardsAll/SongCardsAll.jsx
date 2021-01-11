import React, { useEffect, useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { connect } from 'react-redux';
import SearchBar from '../Search/Search';
import MapAllSongCards from './MapSongCards';
import MapFilteredSongs from './MapFilteredSongs';

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        paddingBottom: '2em',
    },
    search: {
        display: 'relative',
        top: '0%',
        right: '0%'
    }
}));

const UserHome = ({ dispatch, allSongs, history }) => {
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
                    <MapFilteredSongs allSongs={allSongs} directWorkingCard={directWorkingCard} query={query}/>
                    :
                    <MapAllSongCards allSongs={allSongs} directWorkingCard={directWorkingCard} />
                }
            </div>
        </div>
    );
}

const mapStoreToProps = (reduxState) => {
    return {
        allSongs: reduxState.songs,
    };
};
export default connect(mapStoreToProps)(UserHome);
