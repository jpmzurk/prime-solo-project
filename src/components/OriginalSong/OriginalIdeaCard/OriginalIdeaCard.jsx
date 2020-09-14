import React from "react";
import { makeStyles} from "@material-ui/core/styles";
// import { useState } from 'react'
import { connect } from 'react-redux';
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import OriginalCardPlayer from '../OriginalSongPlayer/OriginalSongPlayer';
import OriginalCardMenu from '../OriginalCardMenu/OriginalCardMenu'

// import CardMedia from '@material-ui/core/CardMedia';
// import AudioUpload from '../AudioUpload/AudioUpload';

const useStyles = makeStyles(() => ({
    card: {
        marginTop: '2em',
        backgroundColor: "#EBEBEB",
        width: 500,
        height: 500,
    },
    root: {
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
    },
}));

const WorkingSong = ({ song, history }) => {
    const {card, root} = useStyles();
    
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
          <Card className={card} onDoubleClick={e => e.stopPropagation()}>
              <OriginalCardMenu directUserHome={directUserHome} directToWorking={directToWorking}/>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h5" style={{ marginLeft: '25%' }}>
                        {song.org_title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" style={{ marginLeft: '30%', marginBottom: '.75em', marginTop: '-.75em' }}>
                        (Original Song)
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" style={{ marginLeft: '1em' }}>
                        {song.org_lyrics}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" style={{ marginLeft: '1em' }}>
                        {song.org_notes}
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
export default connect(mapStoreToProps)(WorkingSong);