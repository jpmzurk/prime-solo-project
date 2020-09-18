const initialSongState = {
    id: 1.1,
    date: '', 
    song_title: 'No song selected yet!',
    lyrics: 'There are no lyrics for an empty song. Sad. Go back and select a song.',
    notes: '',
    org_date: '',
    org_title: 'No song selected yet!',
    org_notes: '',
    org_lyrics: 'There are no lyrics for an empty song. Sad. Go back and select a song.',
    original_audio: '',
    preview_audio: '',
    src: '',
    title: 'nada',
    color: '#607d8b96',
    image: 'images/blackhole.gif',
}



const songs = (state = initialSongState, action) => {
    switch (action.type) {
        case 'SETTING_SELECTED_SONG':
            return action.payload[0];
        case 'CLEAR_SELECTED_SONG':
            return initialSongState;
        default:
            return state;
    }
}

export default songs;