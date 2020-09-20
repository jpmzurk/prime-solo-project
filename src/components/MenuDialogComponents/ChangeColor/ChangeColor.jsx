import React, { useState } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import MenuItem from '@material-ui/core/MenuItem';
import { CirclePicker } from 'react-color';
import colors from './Colors'

function ChangeColorDialog({ song, handleClose, dispatch }) {
  const [open, setOpen] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState('#969696');

  const colorChange = (color) => {
        console.log(color.rgb);
        console.log(color.rgb.a);
      if (color.rgb.a === 1) {
          setBackgroundColor(color.hex)
      } else 
      {let alpha = (color.rgb.a).toFixed(2)
      alpha = alpha.split(".").pop()
      console.log(alpha);
      setBackgroundColor(color.hex + (Number(alpha) + 20))}
  }

  const dialogOpen = () => {
    setOpen(true);
  };

  const dialogClose = () => {
    setOpen(false);
    handleClose()
  };

  const handleSave = () => {
    console.log(backgroundColor);
    const newColor = {id: song.id, color: backgroundColor};
    dispatch({type: 'UPDATE_COLOR', payload: newColor})
    setOpen(false);
    handleClose();
  }

  const handleCancel = () => {
    setOpen(false);
    handleClose();
  }

  return (
    <div>
      <MenuItem onClick={dialogOpen}> Choose Color </MenuItem>
      <Dialog open={open} onClose={dialogClose} aria-labelledby="Color picker for Cards">
        <DialogTitle id="colorChange">Choose A Color Below</DialogTitle>
        <DialogContent>
          <CirclePicker 
            color={backgroundColor} onChange={colorChange} colors={colors}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel}>
            Cancel
          </Button>
          <Button onClick={handleSave}>
            Save
          </Button>
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
export default connect(mapStoreToProps)(ChangeColorDialog);