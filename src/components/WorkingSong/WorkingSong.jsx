import React from "react";
import { makeStyles} from "@material-ui/core/styles";
// import { useState } from 'react'
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import DetailsPlayer from '../DetailsPlayer/DetailsPlayer';
import DetailsCardMenu from '../DetailsCardMenu/DetailsCardMenu'
// import AudioUpload from '../AudioUpload/AudioUpload';

const useStyles = makeStyles(() => ({
    card: {
        marginTop: '2em',
        backgroundColor: "#EBEBEB",
        width: 300,
    },
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
    },
}));

const WorkingSong = () => {
    const classes = useStyles();

    return (
        <>
          <Card className={classes.card}>
              <DetailsCardMenu/>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h5" style={{ marginLeft: '25%' }}>
                        Atlantic City
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" style={{ marginLeft: '30%', marginBottom: '.75em', marginTop: '-.75em' }}>
                        (Working Song)
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" style={{ marginLeft: '1em' }}>
                        Well they blew up the chicken man in Philly Last night 
                        Now they blew up his house too 
                        Down on the boardwalk they're gettin' ready for a fight gonna see what them racket boys can do
                    </Typography>
                </CardContent>
                <DetailsPlayer />
                <CardActions>
                {/* <div style={{paddingLeft : '3em' }}> 
                <AudioUpload />
                </div> */}
                </CardActions>
            </Card>
        </>
    );
}

export default WorkingSong;
