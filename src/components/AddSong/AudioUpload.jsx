import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import ProgressBar from '../MenuDialogComponents/AddAudioFileDialog/ProgressBar';
import DropzoneS3Uploader from 'react-dropzone-s3-uploader'

const dropStyles = {
    height: "3em",
    background: '#EBEBEB',
    borderRadius: "4px",
    boxShadow: '0 2px 3px rgb(0, 0, 0, 0.4)',
    marginBottom: '2em',
    marginTop: '1em'
}

const AudioUpload = ({ uploadComplete }) => {
    const [progress, setProgress] = useState(0);
    const [progressTitle, setProgressTitle] = useState('')
    
    const handleFinishedUpload = info => {
        console.log(info);
        console.log('Access it on s3 at', info.publicUrl);
        uploadComplete(info.publicUrl);
    }

    const onProgress = (percent, event) => {
        setProgress(percent);
        setProgressTitle(event);
    }

    const onError = (error) => {
        alert(error);
    }

    const uploadOptions = {
        server: 'http://localhost:5000',
    }

    const s3Url = 'https://primesonglybucket.s3.amazonaws.com';

    const innerElement = (
        <div 
            style={{paddingTop: '.25rem'}} >
            <Button> Click or Drag Files to upload</Button>
        </div>
    )

    return (
        <div style={{paddingTop: '2em'}}>
            <ProgressBar progress={progress} progressTitle={progressTitle} />
            <DropzoneS3Uploader
                passChildrenProps={false}
                style={dropStyles}
                onProgress={onProgress}
                onFinish={handleFinishedUpload}
                s3Url={s3Url}
                onError={onError}
                maxSize={1024 * 1024 * 11}
                upload={uploadOptions}
                accept="audio/*"
                children={innerElement}
            />
        </div>
    )
}

export default AudioUpload;
