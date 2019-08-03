import * as ActionTypes from 'Store/actionTypes';
import fbParse from 'Utils/fbParse';

export function setUser(email = '', password = '') {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        var firebase = getFirebase();
        if(!email && !password) {
            firebase.auth().onAuthStateChanged(curUser => {
                if (curUser) {
                    firebase.firestore().collection('users').doc(curUser.uid).get()
                    .then(f => {
                        let user = fbParse(f);
                        dispatch({
                            type: ActionTypes.SET_USER,
                            payload: {
                                uid: curUser.uid,
                                role: user.role,
                                firstName: user.firstName,
                                lastName: user.lastName,
                            }
                        })
                    })
                    .catch(f => {})
                }
                else return;
            })
        }
        else {
            firebase.auth().signInWithEmailAndPassword(email, password)
            .then(e => {
                firebase.firestore().collection('users').doc(e.user.uid).get()
                .then(f => {
                    let user = fbParse(f);
                    dispatch({
                        type: ActionTypes.SET_USER,
                        payload: {
                            uid: e.user.uid,
                            role: user.role,
                            firstName: user.firstName,
                            lastName: user.lastName,
                        }
                    })
                })
                .catch(f => {
                    dispatch({
                        type: ActionTypes.SET_ERROR_ALERT,
                        payload: {
                            error: f
                        }
                    })
                })
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

export function logoutUser(email, password) {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        var firebase = getFirebase();
        firebase.auth().signOut()
        .then(() => {
            dispatch({
                type: ActionTypes.SET_USER,
                payload: {
                    uid: '',
                    role: '',
                    firstName: '',
                    lastName: '',
                }
            })
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