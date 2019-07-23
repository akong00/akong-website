import * as ActionTypes from 'Store/actionTypes.js';

export function setLayer1(data) {
    return {
        type: ActionTypes.SET_LAYER_1,
        payload: { data }
    };
}