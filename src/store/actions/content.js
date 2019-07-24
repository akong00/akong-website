import * as ActionTypes from 'Store/actionTypes.js';

export function setNextPage(componentId, id, nextPage) {
    return {
        type: ActionTypes.SET_NEXT_PAGE,
        payload: { componentId, id, nextPage }
    };
}