import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Typography, TextField, FormControl, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';

const useStyles = makeStyles((theme) => ({
    textField: {
        margin: theme.spacing(1),
        width: '40ch',
        marginBottom: '-.2em',
        marginLeft: '30%',
    },
    buttons:  {
        marginLeft: '30%',
        marginBottom: '1em',
    }
}));

const SongLyrics = ({ notes, dispatch, song }) => {
    const {textField, buttons} = useStyles();
    const [ editable, setEditable] = useState(false);
    const { handleSubmit, register } = useForm();

    const handleEditable = () => {
        setEditable(editable => !editable)
    }

    const onSubmit = (data) => {
        data = {...data, id: song.id}
        console.log('in onSubmit lyrics', data);
        setEditable(editable => !editable);
        dispatch({ type: 'EDIT_SONG', payload: data })
    }
    return (
        <>
            {editable ?
                <FormControl>
                    <form onSubmit={handleSubmit(onSubmit)} autoComplete="off"> 
                    <TextField label="notes" name="notes" defaultValue={`${notes}`} onDoubleClick={handleEditable}
                        inputRef={register} margin="dense" multiline className={textField} />
                    <div className={buttons}>
                    <Button onClick={handleEditable}> CANCEL </Button>
                    <Button type="submit"> SAVE </Button>
                    </div>
                    </form>
                </FormControl>
                :
                <Typography variant="body2" component="h5" color="textSecondary"  onDoubleClick={handleEditable} style={{ marginLeft: '1em' }} >
                    Notes: <br />
                    {`${notes}`}
                </Typography>
            }
        </>
    )
}



const mapStoreToProps = (reduxState) => {
    return {
        notes: reduxState.song.notes,
        song: reduxState.song
    };
  };
export default connect(mapStoreToProps)(SongLyrics);