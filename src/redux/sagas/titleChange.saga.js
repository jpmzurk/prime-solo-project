import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* putTitle(action) {
    try {
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        };
        
        const response = yield axios.put(`/api/song/`, action.payload, config);
        console.log(response);

        yield put({ type: 'FETCH_SONGS'})
    } catch (error) {
        console.log('Song POST request failed', error)
    }
}

function* editTitle() {
    yield takeLatest('EDIT_TITLE', putTitle);
}

export default editTitle;