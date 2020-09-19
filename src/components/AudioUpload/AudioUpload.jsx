import React, { useState } from 'react';
import ProgressBar from '../MenuDialogComponents/AddAudioFileDialog/ProgressBar';
import DropzoneS3Uploader from 'react-dropzone-s3-uploader'

const AudioUpload = ({ uploadComplete, settingPublicUrl }) => {
    const [progress, setProgress] = useState(0);
    const [progressTitle, setProgressTitle] = useState('')

    const handleFinishedUpload = info => {
        console.log(info);
        console.log('Access it on s3 at', info.publicUrl);
        uploadComplete(info.publicUrl);
        settingPublicUrl(info.publicUrl);
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

    return (
        <>
            <ProgressBar progress={progress} progressTitle={progressTitle} />
            <DropzoneS3Uploader
                onProgress={onProgress}
                onFinish={handleFinishedUpload}
                s3Url={s3Url}
                onError={onError}
                maxSize={1024 * 1024 * 11}
                upload={uploadOptions}
                accept="audio/*"
            />

        </>
    )
}

export default AudioUpload;
