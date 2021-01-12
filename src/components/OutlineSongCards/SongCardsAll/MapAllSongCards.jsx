import React from 'react';
import SongOutlineCard from '../SongOutlineCard/SongOutlineCard'
import { connect } from 'react-redux';

const MapSongCards = ({ songs, directWorkingCard }) => {

    return (
        <>
            {songs.length > 0 &&
                <>
                    {songs.map((song, i) => {
                        return <SongOutlineCard key={i} song={song} directWorkingCard={directWorkingCard} />
                    })}
                </>
            }

        </>

    )
}

const mapStoreToProps = (reduxState) => {
    return {
        updatedSong: reduxState.song,
    };
};
export default connect(mapStoreToProps)(MapSongCards);