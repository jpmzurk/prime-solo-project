import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { connect } from 'react-redux';
import TitleChangeDialog from '../MenuDialogComponents/NameChangeDialog/NameChangeDialog'
import DeleteCardDialog from '../MenuDialogComponents/DeleteCardDialog/DeleteCardDialog'

const OutlineCardMenu = ({ directWorkingCard, song, dispatch, history}) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null)
    };

    const handleCardSelect = () => {
        console.log('in handleCardSelect');
        handleClose();
        dispatch({ type: 'SET_SELECTED_SONG', payload: song })
        directWorkingCard()
    }
    
    return (
        <>
            <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleMenuClick}>
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
                <MenuItem onClick={handleCardSelect}>Open Card</MenuItem>
                <TitleChangeDialog/>
                <MenuItem onClick={handleClose}>Choose Color</MenuItem>
                <DeleteCardDialog />
            </Menu>
        </>
    );
}


const mapStoreToProps = (reduxState) => {
    return {
        songs: reduxState.songs,
    };
};
export default connect(mapStoreToProps)(OutlineCardMenu);
