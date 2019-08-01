let initialState = {
    curType: '',
    posts: {},
    curPost: {},
};

function createPost(state, action) {
    var nextState = state;
    console.log('post is:', action.payload.post)
    return nextState;
}

function blog(state = initialState, action) {
    switch (action.type) {
        case 'CREATE_POST':
            return createPost(state, action);

        default:
            return state;
    }
}

export default blog;