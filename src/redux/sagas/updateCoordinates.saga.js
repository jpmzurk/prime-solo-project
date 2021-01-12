import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* editCoordinates(action) {
    try {
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        };

        const songId = action.payload.id;

        yield axios.put(`/api/song/coordinates/${songId}`, action.payload, config);


        yield put({ type: 'FETCH_SONGS' });
        yield put({ type: 'SETTING_SONG', payload: songId })

    } catch (error) {
        console.log('Coordinate POST request failed', error)
    }
}

function* updateCoordinate() {
    yield takeLatest('UPDATE_XY', editCoordinates);
}

export default updateCoordinate;