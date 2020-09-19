import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { connect } from 'react-redux';
import { TextField, Button, Typography } from '@material-ui/core';
import { FormControl, FormHelperText } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import AudioUpload from '../AudioUpload/AudioUpload'
import ReactS3Uploader from '../AudioUpload/ReactS3Uploader'
import useStyles from './AddSongStyles'


const AddSong = ({ dispatch, history }) => {
    const { root, inputs, paper, textField, cardContent } = useStyles();
    const { handleSubmit, reset, register } = useForm();
    const [helperText, setHelperText] = useState('');
    const [errorState, setErrorState] = useState(false);
    const [url, setUrl] = useState('no file dropped');

    const onSubmit = (data) => {
        if ((data.song_title === '') || (data.lyrics === '')) {
            setErrorState(true);
            setHelperText('You must enter a title and a few lyrics');
        } else {
            setErrorState(false);
            let songTitle = url.split("_").pop();
            songTitle = songTitle.split("/").pop();
            songTitle = songTitle.split(".mp3").shift();
            let newSong = {...data, src: url, title: songTitle}
            dispatch({ type: 'POST_NEW_SONG', payload: newSong })
            reset();
            setUrl('');
            history.push('/user')
        }
    };

    const uploadComplete = (publicUrl) => {
        setUrl(`${publicUrl}`)
    }

    const toUserHome = () => {
        history.push('/user')
    }

    return (
        <div onDoubleClick={toUserHome}>
            <Paper className={paper} onDoubleClick={e => e.stopPropagation()} elevation={10}>
                <FormControl >
                    <form className={root} onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="off" >
                        <div className={cardContent}> 
                        <Typography variant="h4" component="h5" style={{ marginTop: '.5em' }}>Add A Song</Typography>
                        <TextField label="Title" name="song_title" inputRef={register} multiline className={inputs} error={errorState} style={{width: "16em"}}/>
                        <TextField label="Notes" name="notes" inputRef={register} multiline className={textField} />
                        <TextField label="Lyrics" name="lyrics" inputRef={register} multiline className={textField} error={errorState} />
                        <FormHelperText error={errorState} > {helperText} </FormHelperText>
                        <AudioUpload uploadComplete={uploadComplete} />
                        {/* <ReactS3Uploader uploadComplete={uploadComplete}/> */}
                        <FormControl  >
                            <section>
                            <Button variant="contained"onClick={toUserHome}className={inputs} > CANCEL </Button>
                            <Button variant="contained" type="submit" className={inputs}> Save </Button>
                            </section>
                        </FormControl>
                        </div>
                    </form>
                </FormControl>
            </Paper>
        </div>
    );
}

export default connect()(AddSong);
