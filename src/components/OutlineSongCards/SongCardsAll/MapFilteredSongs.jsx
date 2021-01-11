import React from 'react';
import SongOutlineCard from '../SongOutlineCard/SongOutlineCard';

const MapFilteredSongs = ({ allSongs, query, directWorkingCard }) => {
    
    const titleAndLyricFilter = song => {
        return (song.song_title.toLowerCase().includes(query.toLowerCase()) || song.lyrics.toLowerCase().includes(query.toLowerCase()))
    }

    const songs = (song) => {
        return <SongOutlineCard song={song} directWorkingCard={directWorkingCard} />
    }

    return (
        <>
            {
                allSongs.filter(titleAndLyricFilter).map(songs)
            }
        </>
    );
}

export default MapFilteredSongs;
