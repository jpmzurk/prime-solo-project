import React, { useState } from 'react';
import { connect } from 'react-redux';
import ReactS3uploader from 'react-s3-uploader';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});

const DialogUploader = ({settingPublicUrl}) => {
  const {root} = useStyles();
  const [progress, setProgress] = useState(0);
  const [progressTitle, setProgressTitle] = useState('')

  const onFinish = (info) => {
    settingPublicUrl(info.publicUrl)
  }

  const onProgress = (percent, event) => {
    console.log(percent, event);
    setProgress(percent)
    setProgressTitle(event)
  }

  const onError = (error) => {
    alert(error)
  }

  return (
    <div>
      <> 
     { progress > 0 && 
        <Typography> 
          {progressTitle}
      </Typography>}
      </> 

      <div className={root}>
        { progress > 0 && <LinearProgress variant="determinate" value={progress} />}
      </div>
        <ReactS3uploader
          signingUrl="/s3/sign"
          signingUrlMethod="GET"
          // onDrop={handleDrop}
          onProgress={onProgress}
          onError={onError}
          onFinish={onFinish}
          accept="audio/*"                
      />
    </div>
  );
}


export default connect()(DialogUploader);
