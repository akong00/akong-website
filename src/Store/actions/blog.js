import * as ActionTypes from 'Store/actionTypes';
import fbParse from 'Utils/fbParse';

export function createPost(post) {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make async call
        const firebase = getFirebase();
        const state = getState();
        firebase.firestore().collection('blogs').doc(post.title).set({
            ...post,
            author: state.user.firstName + ' ' + state.user.lastName,
            authorId: state.user.uid,
        })
        .then(() => {
            dispatch({
                type: ActionTypes.CREATE_POST,
                payload: { post }
            });
        }).catch(e => {
            dispatch({
                type: ActionTypes.SET_ERROR_ALERT,
                payload: {
                    error: e
                }
            })
        })
    }
}

export function getPosts(params) {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        let query = getFirestore().collection('blogs');
        if(params.type) query = query.where('type', '==', params.type);
        if(params.tags) params.tags.map(t => query = query.where('tags', 'array-contains', t));
        if(params.after) query = query.where('ts', '>=', params.after);
        if(params.before) query = query.where('ts', '<=', params.before);

        query.get().then(results => {
            const posts = fbParse(results);
            dispatch({
                type: ActionTypes.GET_POSTS,
                payload: { posts }
            });
        })
        .catch(e => {
            dispatch({
                type: ActionTypes.SET_ERROR_ALERT,
                payload: {
                    error: e
                }
            })
        });
    }
}