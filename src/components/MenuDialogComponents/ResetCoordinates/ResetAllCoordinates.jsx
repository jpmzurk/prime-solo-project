import React, { useState } from 'react';
import { connect } from 'react-redux';
import MenuItem from '@material-ui/core/MenuItem';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const ResetAllPositions = ({ dispatch, handleClose, resetPosition, song }) => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleCloseMenu = () => {
        setOpen(false);
    };

    const resetAllPositions = async () => {
        setOpen(false);
        song.x = 0;
        song.y = 0;
        await dispatch({ type: 'UPDATE_XY', payload: song });

        resetPosition();
        handleClose();

        await dispatch({ type: 'RESET_ALL_XY' });
        await dispatch({ type: 'RESET_TRUE' });

    }

    const handleCancel = () => {
        setOpen(false);
        handleClose();
    }


    return (
        <div>
            <>
                <MenuItem onClick={handleClickOpen}> Reset All Songs Positions </MenuItem>
            </>
            <Dialog open={open} onClose={handleCloseMenu} aria-labelledby="Rename song title input">
                <DialogTitle id="dialogTitle">Reset every song's position?!</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Wait. Are you sure you want to reset all of your songs to their original positions? This cannot be undone.
                </DialogContentText>
                </DialogContent>
                <DialogActions>

                    <Button onClick={handleCancel} variant="outlined">
                        Cancel
                    </Button>
                    <form >
                        <Button onClick={resetAllPositions} variant="outlined">
                            Yes, I am sure
                    </Button>
                    </form>
                </DialogActions>
            </Dialog>
        </div >
    );
}

const mapStoreToProps = (reduxState) => {
    return {
        song: reduxState.song,
        songs: reduxState.songs
    };
};
export default connect(mapStoreToProps)(ResetAllPositions);