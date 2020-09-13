
const audio = (state = [], action) => {
    switch (action.type) {
        case 'SET_AUDIO_FILES':
            return action.payload;
        // case 'CLEAR_AUDIO_FILES':
        //     return state = [];
        default:
            return state;
    }
}
  
  // user will be on the redux state at:
  // state.user
  export default audio;