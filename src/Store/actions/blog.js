import * as ActionTypes from 'Store/actionTypes';
import fbParse from 'Utils/fbParse';
import { pageLoadStyle } from '../../Utils/loadStyles';

export function createPost(post) {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make async call
        const firebase = getFirebase();
        console.log(firebase)
        const state = getState();
        let pDate = new Date(post.ts)
        if(post.images) {
            firebase.uploadFiles('blogs/' + post.title.split(' ').join('-'), post.images).then(e => {
                console.log(e)
                let imgArray = []
                let uploadedCount = 0;
                e.map((f, i) => {
                    f.uploadTaskSnapshot.ref.getDownloadURL().then(img => {
                        imgArray.push({src: img, alt: post.images[i].name});
                        uploadedCount += 1;
                        return uploadedCount === post.images.length;
                    })
                    .then(isComplete => {
                        if(!isComplete) return;
                        console.log('2',imgArray)
                        firebase.firestore().collection('blogs').doc(post.title).set({
                            ...post,
                            images: imgArray,
                            date: pDate.toLocaleString('en-US',{day: 'numeric', month: 'short', year: 'numeric'}),
                            published: post.published === 'true',
                            author: state.user.firstName + ' ' + state.user.lastName,
                            authorId: state.user.uid,
                        })
                        .then(() => {
                            dispatch({
                                type: ActionTypes.CREATE_POST,
                                payload: { post }
                            });
                        })
                        .catch(e => {
                            dispatch({
                                type: ActionTypes.SET_ERROR_ALERT,
                                payload: {
                                    error: e
                                }
                            })
                        })
                    })
                })
            })
            .then(imgArray => {
                
            })
        }
        else {
            firebase.firestore().collection('blogs').doc(post.title).set({
                ...post,
                date: pDate.toLocaleString('en-US',{day: 'numeric', month: 'short', year: 'numeric'}),
                published: post.published === 'true',
                author: state.user.firstName + ' ' + state.user.lastName,
                authorId: state.user.uid,
            })
            .then(() => {
                dispatch({
                    type: ActionTypes.CREATE_POST,
                    payload: { post }
                });
            })
            .catch(e => {
                dispatch({
                    type: ActionTypes.SET_ERROR_ALERT,
                    payload: {
                        error: e
                    }
                })
            })
        }
    }
}

export function getPosts(params = null) {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        let query = getFirestore().collection('blogs');
        if(params.tags) params.tags.map(t => query = query.where('tags', 'array-contains', t));
        if(params.after) query = query.where('ts', '>=', params.after);
        if(params.before) query = query.where('ts', '<=', params.before);
        query.orderBy('ts','desc').get()
        .then(results => {
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