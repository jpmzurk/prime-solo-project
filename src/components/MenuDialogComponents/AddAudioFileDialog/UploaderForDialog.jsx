import React, { Component } from 'react';
import { connect } from 'react-redux'
import ReactS3uploader from 'react-s3-uploader'


class UploaderForDialog extends Component {
  
    //send complete function to AddSong and di
    onFinish = (info) => {
      console.log(info.publicUrl)
      this.props.settingPublicUrl(info.publicUrl)
      // add confirmation popup on success!
    }

    render() {
        return (
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
                // s3path={''}
                accept="audio/*"                
            />
            {/* <input type="button" value="Upload" onClick={this.handleUpload} /> */}
          </div>
        );
      }
}

export default connect()(UploaderForDialog);
