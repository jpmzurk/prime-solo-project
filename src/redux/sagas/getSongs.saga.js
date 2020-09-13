import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getSongs() {
    try {
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        };

        const response = yield axios.get('/api/song', config);
    
        yield put({ type: 'SET_SONGS', payload: response.data})

    } catch (error) {
        console.log('Song GET request failed', error)
    }
}
function* getSong(action) {
    try {
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        };
        const url = action.payload

        const response = yield axios.get(`/api/song/:${url}`, config);
    
        yield put({ type: 'SET_SELECTED_SONG', payload: response.data})

    } catch (error) {
        console.log('Song GET request failed', error)
    }
}
function* getSongsSaga() {
    yield takeLatest('FETCH_SONGS', getSongs);
    yield takeLatest('FETCH_SONG', getSong);
}

export default getSongsSaga;