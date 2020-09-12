import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useForm } from "react-hook-form";
import { connect } from 'react-redux';
import { TextField, Button, Typography } from '@material-ui/core';
import { FormControl, FormHelperText } from '@material-ui/core';
import { Paper } from '@material-ui/core';
// import AudioUpload from '../AudioUpload/AudioUpload'
import ReactS3Uploader from '../AudioUpload/ReactS3Uploader'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    inputs: {
        margin: theme.spacing(1),
        width: '22ch',
        marginBottom: '1em',
        marginTop: '1.5em'
    },
    paper: {
        margin: 'auto',
        backgroundColor: '#EBEBEB',
        paddingBottom: '16em',
        marginTop: '1em',
        width: '60ch',
    },
    textField: {
        margin: theme.spacing(1),
        width: '40ch',
        marginBottom: '1em'
    }
}));

const AddSong = ({ dispatch, history }) => {
    const { root, inputs, paper, textField } = useStyles();
    const { handleSubmit, reset, register } = useForm();
    const [helperText, setHelperText] = useState('');
    const [errorState, setErrorState] = useState(false);
    const [complete, setComplete] = useState(false);
    const [url, setUrl] = useState('no file dropped');

    const onSubmit = (data) => {
        if ((data.title === '') || (data.lyrics === '')) {
            setErrorState(true);
            setHelperText('You must enter a title and a few lyrics');
        } else {
            setErrorState(false);
            data = {...data, url_path: url}
            console.log(data);
            dispatch({ type: 'POST_NEW_SONG', payload: data })
            reset();
            setUrl('');
            setComplete(false)
        }
    };

    const uploadComplete = (signedUrl) => {
        setComplete(true)
        setUrl(`${signedUrl}`)
    }

    console.log(complete);
    console.log(url);
    const toUserHome = () => {
        history.push('/user')
    }

    return (
        <>
            <Paper className={paper} >
                <FormControl >
                    <form className={root} onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="off" >
                        <Typography variant="h4" component="h5" style={{ marginTop: '1em' }}>Add A Song</Typography>
                        <TextField label="title" name="title" inputRef={register} multiline className={inputs} error={errorState} />
                        <TextField label="notes" name="notes" inputRef={register} multiline className={textField} />
                        <TextField label="lyrics" name="lyrics" inputRef={register} multiline className={textField} error={errorState} />
                        <FormHelperText error={errorState} > {helperText} </FormHelperText>
                        <ReactS3Uploader uploadComplete={uploadComplete}/>
                        <FormControl className={inputs}>
                            <section className={inputs}>
                                <Button type="submit" > Save </Button>
                                <Button onClick={toUserHome}> CANCEL </Button>
                            </section>
                        </FormControl>
                    </form>
                </FormControl>
            </Paper>
        </>
    );
}

export default connect()(AddSong);
