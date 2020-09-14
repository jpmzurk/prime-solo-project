import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


function* setSong(action) {
    try {
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        };
        const id = action.payload

        const response = yield axios.get(`/api/recording/${id}`, config);
        
        yield put({ type: 'SET_SELECTED_RECORDING', payload: response.data})

    } catch (error) {
        console.log('Song GET request failed', error)
    }
}

function* setSongSaga() {
    yield takeLatest('FETCH_RECORDINGS', setSong);
    // yield takeLatest('FETCH_SONG', getSong);
}

export default setSongSaga;