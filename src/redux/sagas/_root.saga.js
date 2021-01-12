import { all } from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
import getSongs from './getSongs.saga';
import postSong from './postSong.saga';
import postRecording from './postRecording.saga';
import updateSong from './updateSong';
import updateCardColor from './updateCardColor';
import deleteSong from './deleteSong.saga';
import deleteAudio from './deleteAudio.saga';
import setSelectedAudio from './setSelectedAudio.saga';
import setSelectedSong  from './setSelectedSong.saga';
import updateCoordinates from './updateCoordinates.saga';
// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(), // login saga is now registered
    registrationSaga(),
    userSaga(),
    getSongs(),
    postSong(),
    postRecording(),
    updateSong(),
    updateCardColor(),
    deleteSong(),
    deleteAudio(),
    setSelectedAudio(),
    setSelectedSong(),
    updateCoordinates(),
  

  ]);
}
