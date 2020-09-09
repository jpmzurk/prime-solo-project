import axios from 'axios';
import { takeLatest } from 'redux-saga/effects';

function* postImage(action) {
    try {
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        };

        const data = {
            imageUrl: action.payload
        }

        const response = yield axios.post('/api/image', data, config);
        console.log(response);
        
        //make get here? 
    } catch (error) {
        console.log('Image post request failed', error)
    }
}
function* imageSaga() {
    yield takeLatest('POST_IMAGE', postImage);
}

export default imageSaga;