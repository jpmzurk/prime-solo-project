import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from "@material-ui/core/IconButton";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import DeleteAudioDialog from '../../MenuDialogComponents/DeleteAudioDialog/DeleteAudioDialog';
import UploaderMenuDialog from '../../MenuDialogComponents/AddAudioFileDialog/AddAudioFileDialog';

const useStyles = makeStyles((theme) => ({
    moreIcon: {
      '& svg': {
        fontSize: 27
      }
    },
}));

const WorkingCardMenu = ({directUserHome, directOriginalSong, song, dispatch }) => { 
    const {moreIcon} = useStyles();
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

    useEffect(() => {
        
        return () => {
            console.log('cleanup and dispatch ran');
            dispatch({type: 'START_PLAYER'})
        };
    }, [anchorEl, dispatch]);

    return (
        <>
            <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} className={moreIcon}>
                    <MoreVertIcon fontSize={'inherit'}>
                    </MoreVertIcon>
                </IconButton>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >   
                    <MenuItem onClick={goBack}>Go Back</MenuItem>
                    <UploaderMenuDialog handleMenuClose={handleClose}/>
                    <DeleteAudioDialog handleTopMenuClose={handleTopMenuClose} handleClose={handleClose}/>
                    {/* <MenuItem onClick={setEditAll}> Edit </MenuItem> */}
                    <MenuItem onClick={handleClose}>Change Color</MenuItem>
                    <MenuItem onClick={goToOriginal}>Go to Original Idea</MenuItem>
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
