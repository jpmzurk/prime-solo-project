import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { connect } from 'react-redux';
import MenuItem from '@material-ui/core/MenuItem';

function NameChangeDialog({selectedSong, handleClose, dispatch}) {
  const [open, setOpen] = useState(false);
  const [newTitle, setNewTitle] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
    handleClose();
  };

  const handleSave = () => {
    let song = {id : selectedSong.song_id}
    song = {...song, title: newTitle}
    setOpen(false);
    handleClose();
    dispatch({ type: 'EDIT_TITLE', payload: song})
    // setTimeout(() => {
    //   dispatch({ type: 'FETCH_SONGS'})
    // }, 800)
    //pop up that the title has been successfully changed ?
  };
  const handleChange = (e) => {
    setNewTitle(e.target.value)
  }

  return (
    <div>
      <MenuItem onClick={handleClickOpen}> Rename Song Title </MenuItem>
      <Dialog open={open} onClose={() => handleCloseDialog()} aria-labelledby="Rename song title input">
        <DialogTitle id="dialogTitle">Song Title</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Write your new song title and click save when finish.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="songTitle"
            label="Song Title"
            type="text"
            defaultValue={selectedSong.title}
            fullWidth
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleCancel()}>
            Cancel
          </Button>
          <Button onClick={() => handleSave()}>
            Save
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
export default connect(mapStoreToProps)(NameChangeDialog);