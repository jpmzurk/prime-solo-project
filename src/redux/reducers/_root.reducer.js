import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import songs from './song.reducer';
import recordings from './selected_recordings.reducer';
import song from './SettingSong.reducer'
// rootReducer bundles up all of the other reducers so our project can use them.
// its imported in index.js as rootSaga

const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  songs, // has all songs for of user
  recordings, // audio files that have names cleaned up by workingSongPlayer
  song,
});

export default rootReducer;
