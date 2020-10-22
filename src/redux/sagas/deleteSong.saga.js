import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* songDelete(action) {
    try {
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        };
        
        yield axios.delete(`/api/song/${action.payload}`, config);
        yield put({ type: 'FETCH_SONGS'})
        
    } catch (error) {
        console.log('Song DELETE request failed', error)
    }
}

function* deleteSong() {
    yield takeLatest('DELETE_SONG', songDelete);
}

export default deleteSong;