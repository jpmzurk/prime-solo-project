import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import AudioPlayer from '../AudioPlayer/AudioPlayer'
import Typography from "@material-ui/core/Typography";
import SongOutlineMenu from '../SongOutlineMenu/SongOutlineMenu'
import { connect } from 'react-redux';
import { bottom } from '@material-ui/system';

const useStyles = makeStyles(() => ({
    card: {
        marginTop: '2em',
        width: 350,
        maxHeight: 350,
        minHeight: 270,
        marginLeft: '1.5em',
        marginRight: '1.5em',
        flexDirection: 'column',
        position: 'relative', 
    },
    text: {
        display: 'flex',
        width: 295,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        maxHeight: '7.4em',
        // overflow: "scroll",
        lineHeight: '1.8em',
        whiteSpace: 'pre-line',
        fontSize: 14.5,
        paddingBottom: '2em',
    },
    player: {
        position: 'absolute',
        bottom: '0em'
    }
}));

const SongCards = ({ song, directWorkingCard, dispatch }) => {
    const { card, text, player, cardBody }= useStyles();
    
    const handleDoubleClick = () => {
        dispatch({ type: 'SETTING_SONG', payload: song.song_id });
        directWorkingCard()
    }
  
    return (
        <>
           <Card className={card} onDoubleClick={handleDoubleClick} style={{background: (song.color)}} raised={true}>
               <section className={cardBody}>
            <SongOutlineMenu directWorkingCard={directWorkingCard} song={song}/>
                <CardContent >
                    <Typography gutterBottom variant="h5" component="h5" >
                        {song.song_title}
                    </Typography>
            
                    <Typography variant="body2" color="textSecondary" component="p" className={text} >
                        {song.lyrics}
                    </Typography>
                
                </CardContent>
               
                <CardActions className={player}>
                <AudioPlayer song={song}/>
                </CardActions>
                </section>
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






