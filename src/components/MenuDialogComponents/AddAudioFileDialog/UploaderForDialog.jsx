import React, { useState } from 'react';
import { connect } from 'react-redux';
import DropzoneS3Uploader from 'react-dropzone-s3-uploader'
import ProgressBar from './ProgressBar';
import Button from '@material-ui/core/Button';

const dropStyles = {
    height: "6em",
    width:'20em',
    border: '1px',
    borderStyle: 'dashed',
    borderRadius: "4px",
    // marginBottom: '2em',
    // marginTop: '1em'
}

const zoneStyles = {
    paddingTop: '1.5rem',
    paddingLeft: '2em'
}

const DialogUploader = ({ settingPublicUrl }) => {
  const [progress, setProgress] = useState(0);
  const [progressTitle, setProgressTitle] = useState('')

  const handleFinishedUpload = info => {
      console.log(info);
      console.log('Access it on s3 at', info.publicUrl);
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

  const uploader = (
        <div  style={zoneStyles}>
         <Button> Click or Drag Files Here</Button>
        </div>
  )

  return (
      <>
          <ProgressBar progress={progress} progressTitle={progressTitle} />
          <DropzoneS3Uploader
              style={dropStyles}
              passChildrenProps={false}
              onProgress={onProgress}
              onFinish={handleFinishedUpload}
              s3Url={s3Url}
              onError={onError}
              maxSize={1024 * 1024 * 11}
              upload={uploadOptions}
              accept="audio/*"
              children={uploader}
          />
         

      </>
  )
}

export default connect()(DialogUploader);
