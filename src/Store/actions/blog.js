import * as ActionTypes from 'Store/actionTypes.js';

export function createPost(post) {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make async call
        const firestore = getFirestore();
        firestore.collection('blogs').add({
            ...post,
            authorFirstName: 'Albert',
            authorLastName: 'Kong',
            tags: 'asdf1, asdf2, asdf3',
        }).then(() => {
            dispatch({
                type: ActionTypes.CREATE_POST,
                payload: { post }
            });
        }).catch((e) => {
            console.log('error: ', e)
        })
    }
}