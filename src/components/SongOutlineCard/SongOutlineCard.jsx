import React from "react";
import { makeStyles} from "@material-ui/core/styles";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import AudioPlayer from '../AudioPlayer/AudioPlayer'
import Typography from "@material-ui/core/Typography";
import SongOutlineMenu from '../SongOutlineMenu/SongOutlineMenu'
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
// { useState }

const useStyles = makeStyles(() => ({
    card: {
        marginTop: '2em',
        backgroundColor: "#EBEBEB",
        width: 300,
        maxHeight: 300
    }
}));

const SongCards = (props) => {
    const classes = useStyles();
   
    return (
        <> 
            <Card className={classes.card}>
                <SongOutlineMenu />
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
        </>
    );
}

export default connect(mapStoreToProps)(SongCards);






