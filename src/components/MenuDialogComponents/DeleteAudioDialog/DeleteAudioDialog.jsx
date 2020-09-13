import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { connect } from 'react-redux';
import MenuItem from '@material-ui/core/MenuItem';

function DeleteAudioDialog({selectedSong}) {
  const [open, setOpen] = React.useState(false);

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
    setOpen(false);
    
  }
  // console.log(selectedSong.song_id);
  return (
    <div>
      <MenuItem onClick={handleClickOpen}> Delete Current Audio </MenuItem>
      <Dialog open={open} onClose={handleClose} aria-labelledby="Rename song title input">
        <DialogTitle id="dialogTitle">Delete Audio File?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this audio from the song?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>
            No
          </Button>
          <Button onClick={handleDelete}>
            Yes
          </Button>
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