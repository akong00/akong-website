import * as ActionTypes from 'Store/actionTypes.js';

export function setNextPage(nextPage) {
    return {
        type: ActionTypes.SET_NEXT_PAGE,
        payload: { nextPage }
    };
}

export function setNewPost(field, data) {
    return {
        type: ActionTypes.SET_NEW_POST,
        payload: { field, data }
    }
}