import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from 'react-redux';
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import OriginalCardPlayer from '../OriginalSongPlayer/OriginalSongPlayer';
import OriginalCardMenu from '../OriginalCardMenu/OriginalCardMenu'

const useStyles = makeStyles(() => ({
    card: {
        marginTop: '2em',
        width: 700,
        marginBottom: '4em',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
    },
    root: {
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
        marginTop: '5em',
    },
    words: {
        width: '75%'
    },
    title: {
        fontFamily: 'Lato, sansSerif',

    }
}));

const OriginalSongIdea = ({ song, history }) => {
    const { card, root, words, title } = useStyles();

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
            <Card onDoubleClick={e => e.stopPropagation()} style={{ backgroundColor: song.color }} raised={true}>
                <OriginalCardMenu directUserHome={directUserHome} directToWorking={directToWorking} />
                <CardContent className={card} >
                    <Typography gutterBottom variant="h5" component="h5" >
                        {song.org_title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" style={{ marginBottom: '.75em' }}>
                        (Original Song)
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" className={words}>
                        Lyrics: {song.org_lyrics}
                    </Typography>
                    <br />
                    <Typography variant="body2" color="textSecondary" component="p" >
                        Notes: {song.org_notes}
                    </Typography>
                </CardContent>
                <OriginalCardPlayer />
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