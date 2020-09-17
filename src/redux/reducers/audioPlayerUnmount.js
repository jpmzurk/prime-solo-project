const playerStop = (state = false, action) => {
    switch (action.type) {
        case 'STOP_PLAYER':
            return true;
        case 'START_PLAYER':
            return false;
        default:
            return state;
    }
}

export default playerStop;