import React, { Component } from 'react';
import { connect } from 'react-redux'
import ReactS3uploader from 'react-s3-uploader'


class AudioUpload extends Component {
    constructor(props) {
      super();
      this.uploader = null;
      this.handleUpload = this.handleUpload.bind(this);
    }

    //use the ref that was created! 
    handleUpload = () => {
      this.uploader.uploadFile();
    }

    //send complete function to AddSong and di
    onFinish = (info) => {
      console.log(info.publicUrl)
      // this.props.dispatch({ type: 'SET_SONG_URL', payload: info.signedUrl})
      this.props.uploadComplete(info.publicUrl)
    }

    render() {
        return (
          <div>
              <ReactS3uploader
                autoUpload={false}
                ref={uploader => { this.uploader = uploader; }}
                // inputRef={cmp => this.uploadInput = cmp}
                signingUrl="/s3/sign"
                signingUrlMethod="GET"
                onDrop={this.handleDrop}
                onProgress={this.onProgress}
                onError={this.onError}
                onFinish={this.onFinish}
                // uploadRequestHeaders={{
                //   'x-amz-acl': 'public-read'
                // }}
                s3path={''}
                // maxSize={1024 * 1024 * 11}
                accept="audio/*"
                // contentDisposition="auto"
                
            />
            <input type="button" value="Upload" onClick={this.handleUpload} />
          </div>
        );
      }
}

export default connect()(AudioUpload);
