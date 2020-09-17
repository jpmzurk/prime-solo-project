import React, { Component } from 'react';
import { connect } from 'react-redux'
import ReactS3uploader from 'react-s3-uploader'


class AudioUpload extends Component {
    //use the ref that was created! 
    // handleUpload = () => {
    //   this.uploader.uploadFile();
    // }

    // state = {
    //   completed : 0
    // }
    
    // onProgress(percent){
    //   console.log(percent);

    //   // this.setState({completed: });
    // }
  
    //send complete function to AddSong and di
    onFinish = (info) => {
      console.log(info.publicUrl)
      this.props.uploadComplete(info.publicUrl)
    }

    render() {
        return (
          <>
          <div>
              <ReactS3uploader
                // autoUpload={false}
                // ref={uploader => { this.uploader = uploader; }}
                signingUrl="/s3/sign"
                signingUrlMethod="GET"
                onDrop={this.handleDrop}
                onProgress={this.onProgress}
                onError={this.onError}
                onFinish={this.onFinish}
                // scrubFilename={(filename) => filename.replace(/[^\w\d_\-.]+/ig, '')}
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
