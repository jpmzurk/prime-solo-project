import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* editSong(action) {
    try {
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        };
        
        const songId = action.payload.id;
        console.log(action.payload);
        
        const response = yield axios.put(`/api/song/${songId}`, action.payload, config);
        console.log(response);
        yield put ({type: 'SETTING_SONG', payload: songId})
        yield put({ type: 'FETCH_SONGS'})
    } catch (error) {
        console.log('Song POST request failed', error)
    }
}

function* songEdit() {
    yield takeLatest('EDIT_SONG', editSong);
}

export default songEdit;