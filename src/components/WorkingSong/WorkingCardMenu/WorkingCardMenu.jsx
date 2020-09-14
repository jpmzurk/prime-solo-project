import React, { useState } from "react";
import { connect } from 'react-redux';
import IconButton from "@material-ui/core/IconButton";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import DeleteAudioDialog from '../../MenuDialogComponents/DeleteAudioDialog/DeleteAudioDialog';
import UploaderMenuDialog from '../../MenuDialogComponents/AddAudioFileDialog/AddAudioFileDialog';
// import NameChangeDialog from '../MenuDialogComponents/NameChangeDialog/NameChangeDialog';

const WorkingCardMenu = ({ directUserHome, directOriginalSong, selectedSong }) => {
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
        if (selectedSong.song_id === null){
           return
        } else {
        directOriginalSong();
        handleClose();
        }
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
                    {/* <NameChangeDialog /> */}
                    <MenuItem onClick={goBack}>Go Back To All Songs</MenuItem>
                    <MenuItem onClick={goToOriginal}>Go to Original Idea</MenuItem>
                    <MenuItem onClick={handleClose}>Change Color</MenuItem>
                    <DeleteAudioDialog handMenuClose={handleClose} />
                </Menu>  
        </>
    );
}

const mapStoreToProps = (reduxState) => {
    return {
        selectedSong: reduxState.selectedSong,
    };
  };
export default connect(mapStoreToProps)(WorkingCardMenu);
