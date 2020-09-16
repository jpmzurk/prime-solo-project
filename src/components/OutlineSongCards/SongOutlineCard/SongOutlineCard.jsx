import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import AudioPlayer from '../AudioPlayer/AudioPlayer'
import Typography from "@material-ui/core/Typography";
import SongOutlineMenu from '../SongOutlineMenu/SongOutlineMenu'
import { connect } from 'react-redux';

const useStyles = makeStyles(() => ({
    card: {
        marginTop: '2em',
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
    media: {
        width: 300,
        height: 300,
    },
}));

const SongCards = ({ song, directWorkingCard, dispatch }) => {
    const classes = useStyles();
    
    const handleDoubleClick = () => {
        dispatch({ type: 'SETTING_SONG', payload: song.song_id })
        directWorkingCard()
    }

    return (
        <>
            
           { <Card className={classes.card} onDoubleClick={handleDoubleClick} style={{background: (song.color)}}>
                <SongOutlineMenu directWorkingCard={directWorkingCard} song={song}/>
                <CardContent >
              
                    <Typography gutterBottom variant="h5" component="h5"  >
                        {song.song_title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" className={classes.text} >
                        {song.lyrics}
                    </Typography>
                </CardContent>
                <AudioPlayer song={song}/>
                <CardActions>
                </CardActions>
            </Card>}
        </>
    );
}


// const mapStoreToProps = (reduxState) => {
//     return {
//         color: reduxState.color
//     };
//   };
export default connect()(SongCards);






