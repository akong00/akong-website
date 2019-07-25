import * as ActionTypes from 'Store/actionTypes.js';

export function setNextPage(nextPage) {
    return {
        type: ActionTypes.SET_NEXT_PAGE,
        payload: { nextPage }
    };
}