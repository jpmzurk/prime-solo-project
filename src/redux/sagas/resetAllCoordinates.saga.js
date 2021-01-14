import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* resetAllXY(action) {
    try {
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        };

        const id = 0
        yield axios.put(`/api/song/reset/${id}`, config);

        yield put({ type: 'FETCH_SONGS' });
        

    } catch (error) {
        console.log('Coordinate reset all request failed', error)
    }
}

function* resetCoordinate() {
    yield takeLatest('RESET_ALL_XY', resetAllXY);
}

export default resetCoordinate;