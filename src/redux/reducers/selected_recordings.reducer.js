let initialState = [{
    src: '', title: ''
}]


const song_selected_recording = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_SELECTED_RECORDING':
            return action.payload;
        default:
            return state;
    }
}

export default song_selected_recording;