let initialState = {
    searchable : false,
    keyword: '',
}

const search = (state = initialState, action) => {
    switch (action.type) {
        case 'STOP_SEARCHABLE':
            return {...state, searchable: true};
        case 'START_SEARCHABLE':
            return {...state, searchable: false};
        case 'SET_KEYWORD':
            return {...state, keyword: action.payload};
        default:
            return state;
    }
}

export default search;