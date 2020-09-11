import React from "react";
import { makeStyles } from "@material-ui/core/styles";
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
        maxHeight: 300,
        overflow: "scroll",
        marginLeft: '1.5em',
        marginRight: '1.5em',
    },
    text: {
        display: 'flex',
        // flexDirection: 'column',
        // alignItems: "center",
        width: 200,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        maxHeight: '5.4em',
        lineHeight: '1.8em'
    },

}));

const SongCards = ({ song, directWorkingCard }) => {
    const classes = useStyles();
    console.log(song);
    console.log(song.array_agg.length);
    return (
        <>
            <Card className={classes.card}>
                <SongOutlineMenu directWorkingCard={directWorkingCard} />
                <CardContent >
                    <Typography gutterBottom variant="h5" component="h5"  >
                        {song.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" className={classes.text} >
                        {song.lyrics}
                    </Typography>
                </CardContent>
                <AudioPlayer song={song}/>
                <CardActions>
                </CardActions>
            </Card>
        </>
    );
}

export default connect(mapStoreToProps)(SongCards);






