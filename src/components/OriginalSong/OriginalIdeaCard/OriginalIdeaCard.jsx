import React from "react";
import { makeStyles} from "@material-ui/core/styles";
import { connect } from 'react-redux';
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import OriginalCardPlayer from '../OriginalSongPlayer/OriginalSongPlayer';
import OriginalCardMenu from '../OriginalCardMenu/OriginalCardMenu'
// import CardMedia from '@material-ui/core/CardMedia';
// import AudioUpload from '../AudioUpload/AudioUpload';


// marginTop: '2em',
//         width: 700,
//         marginBottom: '-1em',
const useStyles = makeStyles(() => ({
    card: {
        marginTop: '2em',
        backgroundColor: "#EBEBEB",
        width: 700,
        marginBottom: '4em',
    },
    root: {
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
        marginTop: '3em',
    },
    headings: {
        display: 'flex',
        alignContent: 'column',
    },
    words: {
        alignText: 'center',
        justifyContent: 'center',
    }
}));

const OriginalSongIdea = ({ song, history }) => {
    const {card, root, words} = useStyles();
    
    const directUserHome = () => {
        console.log('clicked to home');
        history.push('/user')
    }

    const directToWorking = () => {
        console.log('clicked to WorkingSong');
        history.push('/workingsong')
    }
    return (
        <div className={root} onDoubleClick={directUserHome}>
          <Card className={card} onDoubleClick={e => e.stopPropagation()} style={{backgroundColor: song.color}}>
              <OriginalCardMenu directUserHome={directUserHome} directToWorking={directToWorking}/>
                <CardContent >
                    <Typography gutterBottom variant="h5" component="h5" className={words}>
                        {song.org_title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" className={words} style={{marginBottom: '.75em', marginTop: '-.75em' }}>
                        (Original Song)
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" style={{ alignText: 'left' }}>
                        Lyrics: {song.org_lyrics}
                    </Typography>
                    <br/>
                    <Typography variant="body2" color="textSecondary" component="p" style={{ alignText: 'left' }}>
                        Notes: {song.org_notes}
                    </Typography>
                </CardContent>
                <OriginalCardPlayer/>
                <CardActions>
                </CardActions>
            </Card>
        </div>
    );
}

const mapStoreToProps = (reduxState) => {
    return {
        song: reduxState.song,
    };
  };
export default connect(mapStoreToProps)(OriginalSongIdea);