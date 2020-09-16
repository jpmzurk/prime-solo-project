import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* editCardColor(action) {
    try {
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        };
        
        const songId = action.payload.id;
        
        const response = yield axios.put(`/api/song/color/${songId}`, action.payload, config);
        console.log(response);
        yield put ({type: 'SETTING_SONG', payload: songId})
        yield put({ type: 'FETCH_SONGS'})
    } catch (error) {
        console.log('Song POST request failed', error)
    }
}

function* updateColor() {
    yield takeLatest('UPDATE_COLOR', editCardColor);
}

export default updateColor;