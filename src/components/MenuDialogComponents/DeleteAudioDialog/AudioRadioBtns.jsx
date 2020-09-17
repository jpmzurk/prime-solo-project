import React, { useState, useEffect }from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(3),
  },
  button: {
    margin: theme.spacing(1, 1, 0, 0),
  },
}));

function RecordingRadios({ handleDelete, handleCancel, recordings, song, dispatch}) {
  const classes = useStyles();
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);
  const [helperText, setHelperText] = useState('');
  const [readyDelete, setReadyDelete] = useState(false);

  useEffect(() => {
    console.log('use effect ran');
    return () => {
      
    };
  }, [recordings]);


  const handleRadioChange = (event) => {
    setValue(event.target.value);
    setHelperText('');
    setError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
     if ((value.length > 0) && (readyDelete === true)) {
      setHelperText('');
      setError(false);
      setReadyDelete(false);
      console.log('song id to be deleted and values to be got', song.id);
      dispatch({type: 'DELETE_AUDIO', payload: {id: Number(value), song_id: song.id }})
      handleDelete();

    }  else if (value.length > 0 ) {
        setHelperText('Are you sure you want to delete this audio', `?`);
        setError(true);
        setReadyDelete(true)

    } else {
      setHelperText('Please select an option.');
      setError(true);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl component="fieldset" error={error} className={classes.formControl}>
        <RadioGroup aria-label="songs to delete" name="recordings" value={value} onChange={handleRadioChange}>
            {    recordings.map((audio, i )=> {
                    return <FormControlLabel value={`${audio.id}`} control={<Radio />} label={audio.title} key={i}/>
                })
            }
        </RadioGroup>
        <FormHelperText>{helperText}</FormHelperText>
        <Button className={classes.button} onClick={handleCancel} >
            Cancel
          </Button>
          <Button type="submit" className={classes.button}>
            Save
          </Button>
      </FormControl>
    </form>
  );
}

const mapStoreToProps = (reduxState) => {
    return {
        song: reduxState.song,
        recordings: reduxState.recordings,
    };
  };
export default connect(mapStoreToProps)(RecordingRadios);