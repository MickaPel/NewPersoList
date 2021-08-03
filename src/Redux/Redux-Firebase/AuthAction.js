export const signIn = user => {
    return (dispatch, getState, {
        getFirebase
    }) => {
        const firebase = getFirebase();

        firebase
            .auth()
            .signInWithEmailAndPassword(user.email, user.password)
            .then(() => {
                dispatch({
                    type: "SIGN_IN"
                });
            })
            .catch(err => {
                dispatch({
                    type: "SIGN_IN_ERR"
                }, err);
            });
    };
};

export const signOut = () => {
    return (dispatch, getState, {
        getFirebase
    }) => {
        const firebase = getFirebase();

        firebase
            .auth()
            .signOut()
            .then(() => {
                dispatch({
                    type: "SIGN_OUT"
                });
            });
    };
};

// export const signUp = user => {
//     return (dispatch, 
//         getState,
//         { getFirebase, getFirestore }) => {
//         const firebase = getFirebase();
//         const firestore = getFirestore();

//         firebase
//             .auth()
//             .createUserWithEmailAndPassword(user.email, user.password)
//             .then(() => {
//                 dispatch({
//                     type: "SIGN_UP"
//                 });
//             })
//             .catch(err => {
//                 dispatch({
//                     type: "SIGN_UP_ERR"
//                 }, err);
//             });
//     };
// };

export const signUp = user => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();
    
        firebase
            .auth()
            .createUserWithEmailAndPassword(user.email, user.password)
            .then(() => {
                dispatch({ type: "SIGN_UP" });
            })
            .catch(err => {
                dispatch({ type: "SIGN_UP_ERR" }, err);
            });
        };
    };