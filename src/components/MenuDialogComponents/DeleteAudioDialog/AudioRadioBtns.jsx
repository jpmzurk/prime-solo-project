import React, { useState }from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(3),
  },
  button: {
    margin: theme.spacing(1, 1, 0, 0),
  },
}));

function RecordingRadios({handleClose, handleDelete}) {
  const classes = useStyles();
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);
  const [helperText, setHelperText] = useState('');
  const [readyDelete, setReadyDelete] = useState(false);

  const handleRadioChange = (event) => {
    setValue(event.target.value);
    setHelperText('');
    setError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (value.length > 0 ) {
      setHelperText('Are you sure you want to delete ', 'audioTitleHere ?');
      setError(true);
      setReadyDelete(true)
    } else if ((value.length > 0) && (readyDelete === true)) {
      setHelperText('');
      setError(false);
      setReadyDelete(false)
      handleDelete();
    } else {
      setHelperText('Please select an option.');
      setError(true);
    }

    
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl component="fieldset" error={error} className={classes.formControl}>
        <FormLabel component="legend">Recording To Delete</FormLabel>
        <RadioGroup aria-label="songs to delete" name="recordings" value={value} onChange={handleRadioChange}>

          <FormControlLabel value="No goodbyes" control={<Radio />} label="The best!" />
          <FormControlLabel value="no goodbyes demo" control={<Radio />} label="The worst." />
        </RadioGroup>
        <FormHelperText>{helperText}</FormHelperText>
        {/* <Button type="submit" variant="outlined" color="primary" className={classes.button}>
          Check Answer
        </Button> */}
        <Button className={classes.button} onClick={handleClose}>
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
        selectedSong: reduxState.selectedSong,
    };
  };
export default connect(mapStoreToProps)(RecordingRadios);