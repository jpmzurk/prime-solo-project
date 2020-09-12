// import React, { useState} from 'react';
// import { connect } from 'react-redux'
// import DropzoneS3Uploader from 'react-dropzone-s3-uploader'

// const AudioUpload = ({dispatch, register}) => {
//     // const [url_path, setUrl_path] = useState('');

//     const handleFinishedUpload = info => {
//         console.log(info);
//         // console.log('File uploaded with filename', info.filename)
//         console.log('Access it on s3 at', info.fileUrl)
//         dispatch({type: 'POST_AUDIO', payload: info.fileUrl})

//     }

//     const uploadOptions = {
//         server: 'http://localhost:5000',
//         // signingUrlQueryParams: { uploadType: 'avatar' },
//     }

//     const s3Url = 'https://primesonglybucket.s3.amazonaws.com';

//     console.log('POSTING AUDIO');
//     console.log(register);

//     return (
//         <>
//             <DropzoneS3Uploader
//                 ref={register}
//                 onFinish={handleFinishedUpload}
//                 s3Url={s3Url}
//                 maxSize={1024 * 1024 * 11}
//                 upload={uploadOptions}
//                 accept="audio/*"
                
//             />
        
//         </>
//     )
// }

// export default connect()(AudioUpload);
