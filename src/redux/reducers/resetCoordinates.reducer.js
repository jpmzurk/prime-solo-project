const resetCoordinates = (state = null, action) => {
    switch (action.type) {
        case 'RESET_TRUE':
            return true;
        case 'RESET_FALSE':
            return null;
        default:
            return state;
    }
}

export default resetCoordinates;