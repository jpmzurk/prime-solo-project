import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getSong(action) {
    try {
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        };

        const response = yield axios.get('/api/song', config);
        console.log(response);
        yield put({ type: 'SET_SONGS', payload: response.data})
        //make get here? 
    } catch (error) {
        console.log('Song GET request failed', error)
    }
}
function* getSongSaga() {
    yield takeLatest('FETCH_SONGS', getSong);
}

export default getSongSaga;