import React, { Component } from 'react';
import { connect } from 'react-redux'
import ReactS3uploader from 'react-s3-uploader'


class AudioUpload extends Component {
    // constructor(props) {
    //   super();
    //   this.uploader = null;
    //   this.handleUpload = this.handleUpload.bind(this);
    // }

  
    //use the ref that was created! 
    // handleUpload = () => {
    //   this.uploader.uploadFile();
    // }

    state = {
      completed : 0
    }
    
    onUploadProgress(percent){
      console.log(percent);
      this.setState({completed: percent});
    }
  
    //send complete function to AddSong and di
    onFinish = (info) => {
      console.log(info.publicUrl)
      this.props.uploadComplete(info.publicUrl)
    }

    // componentDidUpdate = () => {
    //   this.onUploadProgress()
    // }
    // onProgress = (percent, progress, onProgress, event) => {
    //  console.log(percent, progress, onProgress, event, event.progress);
    // }

    

    render() {
      console.log(this.state.upload);
        return (
          <>
          <div>
              <ReactS3uploader
                // autoUpload={false}
                // ref={uploader => { this.uploader = uploader; }}
                signingUrl="/s3/sign"
                signingUrlMethod="GET"
                onDrop={this.handleDrop}
                onProgress={this.onUploadProgress}
                onError={this.onError}
                onFinish={this.onFinish}
                scrubFilename={(filename) => filename.replace(/[^\w\d_\-.]+/ig, '')}
            
                s3path={''}
                accept="audio/*"                
            />
            {/* <input type="button" value="Upload" onClick={this.handleUpload} /> */}
            {/* <input type="file" onChange={this.uploadFile}/> */}
             
          </div>
          {/* <p> {this.onProgress}</p> */}
          </>
        );
      }
}

export default connect()(AudioUpload);
