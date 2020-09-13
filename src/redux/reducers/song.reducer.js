const songs = (state = [], action) => {
    switch (action.type) {
        case 'SET_SONGS':
            return action.payload;
        // case 'ADD_NEW_SONG':
        //     return [...state, action.payload];
        default:
            return state;
    }
}
  
  // user will be on the redux state at:
  // state.user
  export default songs;