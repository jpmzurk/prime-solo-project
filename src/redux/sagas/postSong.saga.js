import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* postSong(action) {
    try {
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        };

        const response = yield axios.post('/api/song', action.payload, config);
        console.log(response);
        yield put({ type: 'FETCH_SONGS' })

    } catch (error) {
        yield put({ type: 'FETCH_SONGS' })
        console.log('Song POST request failed', error)
    }
}
function* addSong() {
    yield takeLatest('POST_NEW_SONG', postSong);
}

export default addSong;