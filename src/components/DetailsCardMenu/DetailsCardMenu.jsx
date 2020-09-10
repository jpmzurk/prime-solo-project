import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const DetailsCardMenu = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null)
    };
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
                    <MenuItem onClick={handleClose}>Add New Audio File</MenuItem>
                    <MenuItem onClick={handleClose}>Go to Original Idea</MenuItem>
                    <MenuItem onClick={handleClose}>Rename Title</MenuItem>
                    <MenuItem onClick={handleClose}>Make this the original Audio</MenuItem>
                    <MenuItem onClick={handleClose}>Delete Current Audio</MenuItem>
                    <MenuItem onClick={handleClose}>Change Color</MenuItem>
                    <MenuItem onClick={handleClose}>Delete Card</MenuItem>
                    <MenuItem onClick={handleClose}>Go Back</MenuItem>
                </Menu>  
        </>
    );
}

export default DetailsCardMenu;
