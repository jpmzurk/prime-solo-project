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
        width: 330,
        maxHeight: 330,
        overflow: "scroll",
        marginLeft: '1.5em',
        marginRight: '1.5em',
    },
    text: {
        display: 'flex',
        width: 275,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        maxHeight: '5.4em',
        lineHeight: '1.8em',
        whiteSpace: 'pre-line',
        // color: '#585F5F',
        fontSize: 14.5,
    },
    media: {
        width: 300,
        height: 300,
    },
}));

const SongCards = ({ song, directWorkingCard, dispatch }) => {
    const { card, text }= useStyles();
    
    const handleDoubleClick = () => {
        dispatch({ type: 'SETTING_SONG', payload: song.song_id });
        directWorkingCard()
    }
  
    return (
        <>
           <Card className={card} onDoubleClick={handleDoubleClick} style={{background: (song.color)}} raised={true}>
            <SongOutlineMenu directWorkingCard={directWorkingCard} song={song}/>
                <CardContent >
                    <Typography gutterBottom variant="h5" component="h5"  >
                        {song.song_title}
                    </Typography>
            
                    <Typography variant="body2" color="textSecondary" component="p" className={text} >
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


// const mapStoreToProps = (reduxState) => {
//     return {
//         color: reduxState.color
//     };
//   };
export default connect()(SongCards);






