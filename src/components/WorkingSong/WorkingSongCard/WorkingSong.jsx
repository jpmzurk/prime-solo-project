import React, { useEffect } from "react";
import { makeStyles} from "@material-ui/core/styles";
import { connect } from 'react-redux';
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import WorkingSongPlayer from '../WorkingSongPlayer/WorkingSongPlayer';
import WorkingCardMenu from '../WorkingCardMenu/WorkingCardMenu';
// import AudioUpload from '../AudioUpload/AudioUpload';

const useStyles = makeStyles(() => ({
    card: {
        marginTop: '2em',
        backgroundColor: "#EBEBEB",
        width: 500,
        // height: 500,
    },
    root: {
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
        marginTop: '3em',
        marginBottom: '6em',
    },
}));

const WorkingSong = ({ song, history, dispatch }) => {
    const {card, root} = useStyles();

    const directUserHome = () => {
        console.log('clicked to home');
        history.push('/user')
    }

    const directOriginalSong = () => {
        console.log('clicked to home');
        history.push('/originalsong')
    }

    console.log(song);

    useEffect(() => {
       updateStore()
    }, [song]);

    const updateStore = () => {
        console.log('in update store');
    dispatch({ type: 'FETCH_RECORDINGS', payload: song.id })
    }
   
    return (
        <div className={root} onDoubleClick={directUserHome}>
         { song &&
         <div onDoubleClick={e => e.stopPropagation()}>
         <Card className={card} >
              <WorkingCardMenu directUserHome={directUserHome} directOriginalSong={directOriginalSong}/>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h5" style={{ marginLeft: '25%' }}>
                        {song.song_title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" style={{ marginLeft: '30%', marginBottom: '.75em', marginTop: '-.75em' }}>
                        (Working Song)
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" style={{ marginLeft: '1em' }}>
                    Lyrics: <br/>
                    {song.lyrics}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" style={{ marginLeft: '1em' }}>
                        Notes: <br/>
                    {song.notes}
                    </Typography>
                </CardContent>
                <WorkingSongPlayer />
                <CardActions>
                </CardActions>
            </Card>
            </div>}
            
        </div>
    );
}

const mapStoreToProps = (reduxState) => {
    return {
        song: reduxState.song,
        recordings: reduxState.recordings,
    };
  };
export default connect(mapStoreToProps)(WorkingSong);
