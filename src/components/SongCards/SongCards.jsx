import React from "react";
import { makeStyles} from "@material-ui/core/styles";
import {  useState } from 'react'
import IconButton from "@material-ui/core/IconButton";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AudioPlayer from '../AudioPlayer/AudioPlayer'
import Typography from "@material-ui/core/Typography";
import DetailsPlayer from '../DetailsPlayer/DetailsPlayer';
import AudioUpload from '../AudioUpload/AudioUpload';

const useStyles = makeStyles(() => ({
    card: {
        marginTop: '2em',
        backgroundColor: "#EBEBEB",
        width: 300,
        maxHeight: 300
    },
    cardTwo: {
        marginTop: '2em',
        backgroundColor: "#EBEBEB",
        width: 300,
    },
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
    },
 
}));

const SongCards = (props) => {
    const classes = useStyles();
    const [anchorElly, setAnchorElly] = useState(null);
    const [anchorEl, setAnchorEl] = useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleMenuClick = (event) => {
        setAnchorElly(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
        setAnchorElly(null)
    };
    // const handleChange = (event, newValue) => {
    //     setValue(newValue);
    // };
    // const [value, setValue] = useState(30);

    
    return (
        <div className={classes.root}>
            <Card className={classes.card}>
                <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleMenuClick}>
                    <MoreVertIcon>
                    </MoreVertIcon>
                </IconButton>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorElly}
                    keepMounted
                    open={Boolean(anchorElly)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose} >Rename Title</MenuItem>
                    <MenuItem onClick={handleClose}>Choose Color</MenuItem>
                    <MenuItem onClick={handleClose}>Open Card</MenuItem>
                    <MenuItem onClick={handleClose}>Delete Card</MenuItem>
                </Menu>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h5" style={{ marginLeft: '2.5em' }}>
                        Atlantic City
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" style={{ marginLeft: '1em' }}>
                        Well they blew up the chicken man in Philly Last night <br />
                        Now they blew up his house too <br />
                        Down on the boardwalk they're gettin' ready for a fight gonna see what them racket boys can do ...
                    </Typography>
                </CardContent>
                <AudioPlayer />
                <CardActions>
                </CardActions>
            </Card>

            <Card className={classes.cardTwo}>
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
                    <MenuItem onClick={handleClose} >Add New Audio File</MenuItem>
                    <MenuItem onClick={handleClose}>Make this the original Audio</MenuItem>
                    <MenuItem onClick={handleClose}>Delete Current Audio</MenuItem>
                    <MenuItem onClick={handleClose} >Rename Title</MenuItem>
                    <MenuItem onClick={handleClose}>Change Color</MenuItem>
                    <MenuItem onClick={handleClose}>Go Back</MenuItem>
                    <MenuItem onClick={handleClose}>Delete Card</MenuItem>
                </Menu>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h5" style={{ marginLeft: '2.5em' }}>
                        Atlantic City
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" style={{ marginLeft: '1em' }}>
                        Well they blew up the chicken man in Philly Last night <br />
                        Now they blew up his house too <br />
                        Down on the boardwalk they're gettin' ready for a fight gonna see what them racket boys can do ...
                    </Typography>
                </CardContent>
            
                <DetailsPlayer />
                
                <CardActions>
                <div style={{paddingLeft : '3em' }}> 
                <AudioUpload />
                </div>
                </CardActions>
            </Card>
        </div>
    );
}

export default SongCards;






