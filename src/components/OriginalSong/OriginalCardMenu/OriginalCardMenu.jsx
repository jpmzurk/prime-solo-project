import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import UploaderMenuDialog from '../../MenuDialogComponents/AddAudioFileDialog/AddAudioFileDialog';

const OriginalCardMenu = ({ directUserHome, directToWorking }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null)
    };

    const goHome = () => {
        directUserHome();
        handleClose();
    }

    const goToWorking = () => {
        directToWorking();
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
                    <UploaderMenuDialog/>
                    <MenuItem onClick={handleClose}>Change the original Audio</MenuItem>
                    <MenuItem onClick={goToWorking}>Go to Working Song</MenuItem>
                    <MenuItem onClick={goHome}>Go Home</MenuItem>
                </Menu>  
        </>
    );
}

export default OriginalCardMenu;
