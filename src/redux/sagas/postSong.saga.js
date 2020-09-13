import axios from 'axios';
import { takeLatest } from 'redux-saga/effects';

function* postSong(action) {
    try {
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        };

        const response = yield axios.post('/api/song', action.payload, config);
        console.log(response);
        // yield put({ type: 'ADD_NEW_SONG', payload: response.data})

    } catch (error) {
        console.log('Song POST request failed', error)
    }
}
function* addSong() {
    yield takeLatest('POST_NEW_SONG', postSong);
}

export default addSong;