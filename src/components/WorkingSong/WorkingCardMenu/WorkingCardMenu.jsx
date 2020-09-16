import React, { useState } from "react";
import { connect } from 'react-redux';
import IconButton from "@material-ui/core/IconButton";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import DeleteAudioDialog from '../../MenuDialogComponents/DeleteAudioDialog/DeleteAudioDialog';
import UploaderMenuDialog from '../../MenuDialogComponents/AddAudioFileDialog/AddAudioFileDialog';

const WorkingCardMenu = ({directUserHome, directOriginalSong, song, dispatch }) => { 
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null)
    };

    const goBack = () => {
        directUserHome();
        handleClose();
    }

    const goToOriginal = () => {
        if (song.id === null){
           return
        } else {
        directOriginalSong();
        handleClose();
        }
    }

    const handleTopMenuClose = () => {
        dispatch({ type: 'SETTING_SONG', payload: song.song_id });
        setAnchorEl(null)
    };

    const setEditAll = () => { 
        handleClose()
    }

    return (
        <>
            <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                    <MoreVertIcon>
                    </MoreVertIcon>
                </IconButton>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >   
                    <UploaderMenuDialog handleMenuClose={handleClose}/>
                    <DeleteAudioDialog handleTopMenuClose={handleTopMenuClose} handleClose={handleClose}/>
                    <MenuItem onClick={setEditAll}> Edit </MenuItem>
                    <MenuItem onClick={handleClose}>Change Color</MenuItem>
                    <MenuItem onClick={goToOriginal}>Go to Original Idea</MenuItem>
                    <MenuItem onClick={goBack}>Go Back To All Songs</MenuItem>
                </Menu>  
        </>
    );
}

const mapStoreToProps = (reduxState) => {
    return {
        song: reduxState.song,
    };
  };
export default connect(mapStoreToProps)(WorkingCardMenu);
