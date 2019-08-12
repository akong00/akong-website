import * as ActionTypes from 'Store/actionTypes.js';

export function setNextPage(nextPage) {
    return {
        type: ActionTypes.SET_NEXT_PAGE,
        payload: { nextPage }
    };
}

export function setNewPostField(field, data) {
    return {
        type: ActionTypes.SET_NEW_POST_FIELD,
        payload: { field, data }
    }
}

export function setNewPost(post) {
    return {
        type: ActionTypes.SET_NEW_POST,
        payload: { post }
    }
}