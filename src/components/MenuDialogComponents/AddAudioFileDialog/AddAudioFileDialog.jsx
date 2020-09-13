import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { connect } from 'react-redux';
import MenuItem from '@material-ui/core/MenuItem';
import Uploader from './UploaderForDialog'

function NameChangeDialog({selectedSong, dispatch }) {
  const [open, setOpen] = useState(false);
  const [publicUrl, setPublicUrl] = useState('')

  const handleClickOpen = () => {
    if (selectedSong.song_id === null){
      setOpen(false)
    } else
    setOpen(true);
  };

  const handleSave = () => {
    let newAudio = {song_id : selectedSong.song_id, url_path: publicUrl }
    console.log(newAudio);
    dispatch({ type: 'ADD_RECORDING', payload: newAudio})
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const settingPublicUrl = (url) => {
    setPublicUrl(url)
    console.log(selectedSong);
  }

  console.log(selectedSong.song_id);
  console.log(publicUrl);
  return (
    <div>
      <MenuItem onClick={handleClickOpen}> Add New Audio File </MenuItem>
      <Dialog open={open} onClose={handleCancel} aria-labelledby="Rename song title input">
        <DialogTitle id="dialogTitle">New Audio File</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Select a file to upload. 
          </DialogContentText>
        <Uploader setPublicUrl={settingPublicUrl}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel}>
            Cancel
          </Button>
          <Button onClick={handleSave} >
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