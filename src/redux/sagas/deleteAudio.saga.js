import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* audioDelete(action) {
    try {
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        };
        let src = encodeURIComponent(action.payload);
        console.log('in audio Delete payload: ', src);
        
        const response = yield axios.delete(`/api/recording/${src}`, config);
        console.log(response.rows);
    
        // yield put({ type: 'FETCH_SONGS'})
    } catch (error) {
        console.log('Song DELETE request failed', error)
    }
}

function* deleteAudio() {
    yield takeLatest('DELETE_AUDIO', audioDelete);
}

export default deleteAudio;