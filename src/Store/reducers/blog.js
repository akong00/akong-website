let initialState = {
    curPostKey: '',
    posts: {},
};

function createPost(state, action) {
    window.alert('sucessfully created new blog: ', action.payload.post.title)
    return state;
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