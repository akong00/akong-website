let initialState = {
    uid: '',
    role: '',
    firstName: '',
    lastName: '',
};

function setUser(state, action) {
    var nextState = {
        ...state,
        uid: action.payload.uid,
        role: action.payload.role,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
    }
    localStorage.setItem('uid', action.payload.uid);

    return nextState;
}

function user(state = initialState, action) {
    switch (action.type) {
        case 'SET_USER':
            return setUser(state, action);

        default:
            return state;
    }
}

export default user;