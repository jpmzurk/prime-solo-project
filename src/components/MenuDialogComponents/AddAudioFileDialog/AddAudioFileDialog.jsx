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

function AddAudioDialog({song, handleMenuClose, dispatch }) {
  const [open, setOpen] = useState(false);
  const [publicUrl, setPublicUrl] = useState('')

  const handleClickOpen = () => {
    if (song.id === null){
      setOpen(false)
    } else
    setOpen(true);
  };

  const handleSave = () => {
    let newTitle = publicUrl.split("_").pop();
    newTitle = newTitle.split(".mp3").shift();
    let newAudio = {song_id : song.id, src: publicUrl, title: newTitle}
    dispatch({ type: 'SETTING_SONG', payload: song.song_id })
    dispatch({ type: 'ADD_RECORDING', payload: newAudio})   
    handleMenuClose();
    setOpen(false);
    setPublicUrl('');
  };

  const handleCancel = () => {
    setOpen(false);
    handleMenuClose();
    setPublicUrl('');
  };

  const settingPublicUrl = (url) => {
    setPublicUrl(url)
  }

  return (
    <div>
      <MenuItem onClick={handleClickOpen}> Add New Audio File </MenuItem>
      <Dialog open={open} onClose={handleCancel} aria-labelledby="Rename song title input">
        <DialogTitle id="newAudio">New Audio File</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Select a file to upload. 
          </DialogContentText>
        <Uploader settingPublicUrl={settingPublicUrl}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel}>
            Cancel
          </Button>
          { publicUrl.length > 0 &&  <Button onClick={handleSave} >
            Save
          </Button>}
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
export default connect(mapStoreToProps)(AddAudioDialog);