import React, {useState} from 'react';
import { connect } from 'react-redux';
import MenuItem from '@material-ui/core/MenuItem';

const ResetCoordinates = ({ song, dispatch, handleClose, resetPosition }) => {

    const resetCoordinates = () => {
        song.x = 0
        song.y = 0
        dispatch({ type: 'UPDATE_XY', payload: song });
        resetPosition()
        handleClose()
    }
   
    return (
        <>
            <MenuItem onClick={resetCoordinates}> Reset Song Position </MenuItem>
        </>
    );
}

const mapStoreToProps = (reduxState) => {
    return {
        song: reduxState.song,
    };
};

export default connect(mapStoreToProps)(ResetCoordinates);