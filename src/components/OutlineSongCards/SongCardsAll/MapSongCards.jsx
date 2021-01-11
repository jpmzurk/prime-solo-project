import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import SongOutlineCard from '../SongOutlineCard/SongOutlineCard'

const useStyles = makeStyles(() => ({
    preLoad: {
        marginTop: '40em'
    },
}));

const MapSongCards = ({ allSongs, directWorkingCard}) => {
    const { preLoad  } = useStyles();
    
    return (
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

    )
}

export default MapSongCards;