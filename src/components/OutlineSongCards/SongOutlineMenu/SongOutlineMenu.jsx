import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { connect } from 'react-redux';
import NameChangeDialog from '../../MenuDialogComponents/NameChangeDialog/NameChangeDialog'
import DeleteCardDialog from '../../MenuDialogComponents/DeleteCardDialog/DeleteCardDialog'
import ChangeColorDialog from '../../MenuDialogComponents/ChangeColor/ChangeColor'

const OutlineCardMenu = ({ directWorkingCard, song, dispatch}) => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
        dispatch({ type: 'SETTING_SONG', payload: song.song_id })
        dispatch({ type: 'FETCH_RECORDINGS', payload: song.song_id })
    };
    const handleClose = () => {
        setAnchorEl(null)
    };

    const handleCardSelect = () => {
        console.log('in handleCardSelect');
        handleClose();
        directWorkingCard()
    }

    const handleMenuClose = () => {
        setAnchorEl(null)
    };
    
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
                <NameChangeDialog handleClose={handleClose}/>
                <ChangeColorDialog handleClose={handleClose}/>
                <DeleteCardDialog handleMenuClose={handleMenuClose}/>
            </Menu>
        </>
    );
}


// const mapStoreToProps = (reduxState) => {
//     return {
//         song: reduxState.song,
//     };
// };
export default connect()(OutlineCardMenu);
