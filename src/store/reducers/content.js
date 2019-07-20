let initialState = {
    home: {
        layer1: false
    }
};

function setLayer1(state, action) {
    let nextState = {
        ...state,
        home: {
            ...state.home,
            layer1: action.payload.data,
        }
    }

    return nextState
}

function content(state = initialState, action) {
    switch (action.type) {
        case 'SET_LAYER_1':
            return setLayer1(state, action);
        
        default:
            return state;
    }
}

export default content;