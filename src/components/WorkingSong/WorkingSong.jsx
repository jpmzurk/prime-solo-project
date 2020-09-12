import React from "react";
import { makeStyles} from "@material-ui/core/styles";
// import { useState } from 'react'
import { connect } from 'react-redux';
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import DetailsPlayer from '../WorkingSongPlayer/WorkingSongPlayer';
import WorkingCardMenu from '../WorkingCardMenu/WorkingCardMenu';
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

const WorkingSong = ({ selectedSong, history }) => {
    const {card, root} = useStyles();
    console.log(selectedSong.song_id, selectedSong.array_agg);

    const directUserHome = () => {
        console.log('clicked to home');
        history.push('/user')
    }

    const directOriginalSong = () => {
        console.log('clicked to home');
        history.push('/originalsong')
    }
    return (
        <div className={root}>
          <Card className={card}>
              <WorkingCardMenu directUserHome={directUserHome} directOriginalSong={directOriginalSong}/>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h5" style={{ marginLeft: '25%' }}>
                        {selectedSong.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" style={{ marginLeft: '30%', marginBottom: '.75em', marginTop: '-.75em' }}>
                        (Working Song)
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" style={{ marginLeft: '1em' }}>
                    {selectedSong.lyrics}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" style={{ marginLeft: '1em' }}>
                    {selectedSong.notes}
                    </Typography>
                </CardContent>
                <DetailsPlayer selectedSong={selectedSong}/>
                <CardActions>
                </CardActions>
            </Card>
        </div>
    );
}

const mapStoreToProps = (reduxState) => {
    return {
        selectedSong: reduxState.selectedSong,
    };
  };
export default connect(mapStoreToProps)(WorkingSong);
