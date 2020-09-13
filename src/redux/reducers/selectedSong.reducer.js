const initialSongState = {
        song_id: null,
        array_agg: '',
        date: '', 
        title: 'No song selected yet!',
        lyrics: 'There are no lyrics for an empty song. Sad. Go back and select a song.',
        notes: '',
        org_date: '',
        org_title: '',
        org_notes: '',
        org_lyrics: '',
        original_audio: '',
        preview_audio: '',
        image: 'images/blackhole.gif',

}
//used to store one specific song that user clicks on 

const selectedSong = (state = initialSongState, action) => {
    switch (action.type) {
        case 'SET_SELECTED_SONG':
            return action.payload;        
        default:
            return state;
    }
}
  
  // user will be on the redux state at:
  // state.user
  export default selectedSong;


  
