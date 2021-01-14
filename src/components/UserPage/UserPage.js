import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    margin: '0 1.5em',
    width: 450,
    alignContent: 'center',
    background: '#14342B50',
    marginTop: '-3em',
    minHeight: '20em'
  },
  text: {
    margin: '0 auto',
    lineHeight: '1.8em',
    fontSize: 14.5,
    padding: '1em 0',
    
  },
  title: {
    paddingTop: '2em',
    fontSize: 25.5,
},

}));

const UserPage = ({ user, songs, dispatch }) => {
  const { card, text, root, title } = useStyles();

  useEffect(() => {
    dispatch({ type: 'FETCH_SONGS' })
}, [dispatch]);

  console.log(songs);
  
  return (
    <div className="formSpacer">
      <div className={root} >
        <Card className={card} raised={true} >
          <Typography gutterBottom variant="h5" component="h5" align="center" className={title} id="welcome">
            Welcome, {user.username}!
          </Typography>
          <Typography variant="body2" component="p" className={text} align="center"> 
             Your ID is: {user.id}
             </Typography>
             <Typography variant="body2" component="p" className={text} align="center"> 
             Your are working on {songs.length} songs right now
             </Typography>
        </Card>
      </div>
    </div>
  );

}

const mapStoreToProps = (reduxState) => {
  return {
      songs: reduxState.songs,
      user: reduxState.user
  };
};
export default connect(mapStoreToProps)(UserPage);