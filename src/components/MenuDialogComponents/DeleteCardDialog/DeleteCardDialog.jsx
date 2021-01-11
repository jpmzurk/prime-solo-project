import React, { useState } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import MenuItem from '@material-ui/core/MenuItem';

function DeleteCardDialog({ song , handleMenuClose, dispatch }) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    const id = song.id;
    setOpen(false);
    handleMenuClose();
    dispatch({type: 'DELETE_SONG', payload: id})
  }

  const handleCancel = () => {
    setOpen(false);
    handleMenuClose();
  }

  return (
    <div>
      <MenuItem onClick={handleClickOpen}> Delete Song </MenuItem>
      <Dialog open={open} onClose={handleClose} aria-labelledby="Rename song title input">
        <DialogTitle id="dialogTitle">Delete This Card?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this card entirely? It is irrecoverable.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel}>
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
        song: reduxState.song,
    };
  };
export default connect(mapStoreToProps)(DeleteCardDialog);