import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import DeleteAudioDialog from '../../MenuDialogComponents/DeleteAudioDialog/DeleteAudioDialog';
import UploaderMenuDialog from '../../MenuDialogComponents/AddAudioFileDialog/AddAudioFileDialog';
// import NameChangeDialog from '../MenuDialogComponents/NameChangeDialog/NameChangeDialog';

const WorkingCardMenu = ({ directUserHome, directOriginalSong }) => {
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
        directOriginalSong();
        handleClose();
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
                    <MenuItem onClick={goBack}>Go Back To All Songs</MenuItem>
                    <UploaderMenuDialog/>
                    {/* <NameChangeDialog /> */}
                    {/* <MenuItem onClick={handleClose}>Make This The original Audio</MenuItem> */}
                    <DeleteAudioDialog />
                    <MenuItem onClick={handleClose}>Change Color</MenuItem>
                    <MenuItem onClick={goToOriginal}>Go to Original Idea</MenuItem>
                    
                </Menu>  
        </>
    );
}

export default WorkingCardMenu;
