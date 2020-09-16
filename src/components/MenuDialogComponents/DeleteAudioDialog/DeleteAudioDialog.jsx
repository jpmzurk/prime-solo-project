import React, { useState }from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { connect } from 'react-redux';
import MenuItem from '@material-ui/core/MenuItem';
import AudioRadioBtns from './AudioRadioBtns'

function DeleteAudioDialog({song, handleTopMenuClose, handleClose}) {
  const [open, setOpen] = useState(false);

  const openDialog = () => {
    if (song.id === null){
      setOpen(false)
    } else
    setOpen(true);
  };

  const closeDialog = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    console.log('song delete successfully clicked');
    setOpen(false);
    handleTopMenuClose()
  }

  const handleCancel = () => {
    closeDialog();
    handleClose();
  }

  return (
    <div>
      <MenuItem onClick={openDialog}> Delete An Audio File</MenuItem>
      <Dialog open={open} onClose={closeDialog} aria-labelledby="Rename song title input">
        <DialogTitle id="dialogTitle">Delete Audio File?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Select an audio file to delete:
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <AudioRadioBtns handleDelete={handleDelete} handleCancel={handleCancel}/>
        </DialogActions>
      </Dialog>
    </div>
  );
}

const mapStoreToProps = (reduxState) => {
    return {
        song: reduxState.song,
    };
  };
export default connect(mapStoreToProps)(DeleteAudioDialog);