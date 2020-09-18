import React, { useState } from 'react';
import { connect } from 'react-redux'
import ReactS3uploader from 'react-s3-uploader';
import ProgressBar from '../MenuDialogComponents/AddAudioFileDialog/ProgressBar';

const AudioUpload = ({ uploadComplete }) => {
  const [progress, setProgress] = useState(0);
  const [progressTitle, setProgressTitle] = useState('')

  const onFinish = (info) => {
    uploadComplete(info.publicUrl)
  }

  const onProgress = (percent, event) => {
    setProgress(percent)
    setProgressTitle(event)
  }

  const onError = (error) => {
    alert(error)
  }

  return (
    <div>
      <ProgressBar progress={progress} progressTitle={progressTitle}/>
      <ReactS3uploader
        signingUrl="/s3/sign"
        signingUrlMethod="GET"
        onProgress={onProgress}
        onError={onError}
        onFinish={onFinish}
        accept="audio/*"
      />
    </div>
  );
}

export default connect()(AudioUpload);
