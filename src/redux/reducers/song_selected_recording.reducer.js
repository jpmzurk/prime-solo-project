
const song_selected_recording = (state = [], action) => {
    switch (action.type) {
        case 'SET_SELECTED_RECORDING':
            return action.payload;
        default:
            return state;
    }
}
  
  // user will be on the redux state at:
  // state.user
  export default song_selected_recording;