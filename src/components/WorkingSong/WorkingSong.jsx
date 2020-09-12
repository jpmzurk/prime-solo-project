import React from "react";
import { makeStyles} from "@material-ui/core/styles";
// import { useState } from 'react'
import { connect } from 'react-redux';
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import DetailsPlayer from '../DetailsPlayer/DetailsPlayer';
import DetailsCardMenu from '../DetailsCardMenu/DetailsCardMenu';
import CardMedia from '@material-ui/core/CardMedia';

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
    return (
        <div className={root}>
          <Card className={card}>
              <DetailsCardMenu directUserHome={directUserHome}/>
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
                {/* <div style={{paddingLeft : '3em' }}> 
                <AudioUpload />
                </div> */}
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
