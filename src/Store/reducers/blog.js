let initialState = {
    posts: {},
};

function createPost(state, action) {
    var nextState = state;
    return nextState;
}

function getPosts(state, action) {
    var nextState = {
        ...state,
        posts: action.payload.posts,
    }
    return nextState;
}

function blog(state = initialState, action) {
    switch (action.type) {
        case 'CREATE_POST':
            return createPost(state, action);
        case 'GET_POSTS':
            return getPosts(state, action);

        default:
            return state;
    }
}

export default blog;