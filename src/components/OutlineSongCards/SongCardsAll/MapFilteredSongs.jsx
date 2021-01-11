import React from 'react';
import SongOutlineCard from '../SongOutlineCard/SongOutlineCard';

const MapFilteredSongs = ({ allSongs, query, directWorkingCard }) => {
    
    const titleFilter = song => {
        return song.song_title.toLowerCase().includes(query.toLowerCase())
    }

    const lyricFilter = song => {
        return song.lyrics.toLowerCase().includes(query.toLowerCase())
    }

    const songs = (song, i ) => {
        return <SongOutlineCard key={i} song={song} directWorkingCard={directWorkingCard} />
    }

    return (
        <>
            {
                (allSongs.filter(titleFilter) && allSongs.filter(lyricFilter))
                    .map(songs)
            }
        </>
    );
}

export default MapFilteredSongs;
