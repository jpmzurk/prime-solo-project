import React, { useEffect, useState } from 'react';
import SongOutlineCard from '../SongOutlineCard/SongOutlineCard'
import { connect } from 'react-redux';

const MapSongCards = ({ songs, directWorkingCard, resetCoordinates}) => {

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
        songs: reduxState.songs,
        resetCoordinates: reduxState.resetCoordinates,
    };
};
export default connect(mapStoreToProps)(MapSongCards);