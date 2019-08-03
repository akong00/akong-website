import * as ActionTypes from 'Store/actionTypes';
import fbParse from 'Utils/fbParse';

export function createPost(post) {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make async call
        const firestore = getFirestore();
        firestore.collection('blogs').doc(post.title).set(post)
        .then(() => {
            dispatch({
                type: ActionTypes.CREATE_POST,
                payload: { post }
            });
        }).catch(e => {
            console.log('error: ', e)
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
            console.log('error: ', e);
        });
    }
}