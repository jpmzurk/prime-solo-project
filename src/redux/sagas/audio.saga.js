import axios from 'axios';
import { takeLatest } from 'redux-saga/effects';

function* postAudio(action) {
    try {
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        };

        const data = {
            imageUrl: action.payload
        }

        const response = yield axios.post('/api/aws', data, config);
        console.log(response);
        
        //make get here? 
    } catch (error) {
        console.log('Audio post request failed', error)
    }
}
function* audioSaga() {
    yield takeLatest('POST_AUDIO', postAudio);
}

export default audioSaga;