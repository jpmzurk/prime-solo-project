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

function DeleteAudioDialog({selectedSong}) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    if (selectedSong.song_id === null){
      setOpen(false)
    } else
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    console.log('song save successfully clicked');
    setOpen(false);
    
  }
  // console.log(selectedSong.song_id);
  return (
    <div>
      <MenuItem onClick={handleClickOpen}> Delete An Audio File</MenuItem>
      <Dialog open={open} onClose={handleClose} aria-labelledby="Rename song title input">
        <DialogTitle id="dialogTitle">Delete Audio File?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Select an audio file to delete:
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <AudioRadioBtns handleDelete={handleDelete} handleClose={handleClose}/>
        </DialogActions>
      </Dialog>
    </div>
  );
}

const mapStoreToProps = (reduxState) => {
    return {
        selectedSong: reduxState.selectedSong,
    };
  };
export default connect(mapStoreToProps)(DeleteAudioDialog);