const initialSongState = {
    id: '',
    date: '', 
    song_title: 'No song selected yet!',
    lyrics: 'There are no lyrics for an empty song. Sad. Go back and select a song.',
    notes: '',
    org_date: '',
    org_title: '',
    org_notes: '',
    org_lyrics: '',
    original_audio: '',
    preview_audio: '',
    src: '',
    title: '',
    image: 'images/blackhole.gif',
}



const songs = (state = initialSongState, action) => {
    switch (action.type) {
        case 'SETTING_SELECTED_SONG':
            return action.payload[0];
        default:
            return state;
    }
}
  
  // user will be on the redux state at:
  // state.user
  export default songs;