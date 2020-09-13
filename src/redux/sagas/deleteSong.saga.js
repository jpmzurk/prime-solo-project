import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* songDelete(action) {
    try {
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        };
        
        const response = yield axios.delete(`/api/song/${action.payload}`, config);
        console.log(response);
    
        yield put({ type: 'FETCH_SONGS'})
    } catch (error) {
        console.log('Song POST request failed', error)
    }
}

function* deleteSong() {
    yield takeLatest('DELETE_SONG', songDelete);
}

export default deleteSong;