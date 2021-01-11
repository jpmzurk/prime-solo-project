import React from 'react';
import SongOutlineCard from '../SongOutlineCard/SongOutlineCard'


const MapSongCards = ({ allSongs, directWorkingCard }) => {

    return (
        <>
            {allSongs.length > 1 &&
                <>
                    {allSongs.map((song, i) => {
                        return <SongOutlineCard key={i} song={song} directWorkingCard={directWorkingCard} />
                    })}
                </>
            }

        </>

    )
}

export default MapSongCards;