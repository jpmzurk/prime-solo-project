import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Typography, TextField, FormControl, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        alignContent: 'center',
    },
    textField: {
        margin: theme.spacing(1),
        width: '40ch',
        marginBottom: '1em',
        marginLeft: '20%',
    },
    subheading: {
        marginLeft: '30%',
        marginBottom: '.75em',
        marginTop: '-.75em'
    },
    buttons:  {
        marginLeft: '30%',
        marginBottom: '1em',
    }
}));

const SongTitle = ({ title, dispatch, song }) => {
    const { textField, subheading, buttons } = useStyles();
    const [ editable, setEditable] = useState(false);
    const { handleSubmit, register } = useForm();

    const handleEditable = () => {
        setEditable(editable => !editable)
    }

    const onSubmit = (data) => {
        data = {...data, id: song.id}
        console.log('in onSubmit title', data);
        dispatch({ type: 'EDIT_SONG', payload: data })
        setEditable(editable => !editable);
    }
    return (
        // < div className={root}>
        <>
            {editable ?
                <FormControl  >
                    <form onSubmit={handleSubmit(onSubmit)} autoComplete="off" >
                        <TextField 
                            label="title" name="song_title" defaultValue={`${title}`} onDoubleClick={handleEditable}
                            margin="dense" inputRef={register} multiline className={textField} />
                        <div className={buttons}> 
                        <Button onClick={handleEditable}> CANCEL </Button>
                        <Button type="submit"> SAVE </Button>
                        </div>
                    </form>
                </FormControl>
                :
                <div onDoubleClick={handleEditable}>
                    <Typography variant="h5" component="h5" className={textField} >
                        {`${title}`}
                    </Typography>
                </div>
            }
            <Typography variant="body2" color="textSecondary" component="p" className={subheading}>
                (Working Song)
             </Typography>
        </>
        // </div>
    )
}



const mapStoreToProps = (reduxState) => {
    return {
        title: reduxState.song.song_title,
        song: reduxState.song
    };
};
export default connect(mapStoreToProps)(SongTitle);