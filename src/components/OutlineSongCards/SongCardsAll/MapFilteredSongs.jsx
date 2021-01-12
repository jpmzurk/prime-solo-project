import React from 'react';
import SongOutlineCard from '../SongOutlineCard/SongOutlineCard';


const MapFilteredSongs = ({ allSongs, query, directWorkingCard }) => {

    const titleAndLyricFilter = song => {
        return (song.song_title.toLowerCase().includes(query.toLowerCase()) || song.lyrics.toLowerCase().includes(query.toLowerCase()))
    }

    return (
        <>
            {
                allSongs.filter(titleAndLyricFilter).map(song => {
                    return <SongOutlineCard song={song} directWorkingCard={directWorkingCard} />
                })
            }
        </>
    );
}

export default MapFilteredSongs;
