import React, { useEffect, useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { connect } from 'react-redux';
import SongOutlineCard from '../SongOutlineCard/SongOutlineCard'
import SearchBar from '../Search/Search'

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
    },
    search: {
        display: 'relative',
        top: '0%',
        right: '0%'
    }
}));

const UserHome = ({ dispatch, allSongs, history }) => {
    const { root, preLoad, search } = useStyles();
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

                    (allSongs.filter(song => {
                        return song.song_title.toLowerCase().includes(query.toLowerCase())
                    })).map((song, i) => {
                        return <SongOutlineCard key={i} song={song} directWorkingCard={directWorkingCard} />
                    })
                    :
                    <>
                        {allSongs.length > 1 ?
                            <>
                                {allSongs.map((song, i) => {
                                    return <SongOutlineCard key={i} song={song} directWorkingCard={directWorkingCard} />
                                })}
                            </>
                            :
                            <div className={preLoad} ></div>}
                    </>

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
