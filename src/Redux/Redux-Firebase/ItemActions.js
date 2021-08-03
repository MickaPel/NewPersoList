
export const addToList = (products) => {
    return (dispatch, getState, { getFirebase }) => {
        const firestore = getFirebase().firestore();
        const authorId = getState().firebase.auth.uid;

        firestore
        .collection("products")
        .add({
            ...products,
            authorId: authorId,
            date: new Date()
        })
        .then(() => {
                    dispatch({
                        type: "ADD_TO_LIST",
                        products,
                    });
                })
        .catch((err) => {
                        dispatch({
                            type: "ADD_TO_LIST_ERR",
                            err,
                        });
                });
        };
    };

export const removeFromList = (products) => {
    return (dispatch, getState, {
        getFirebase
    }) => {
        const firestore = getFirebase().firestore();
        firestore
            .collection("products")
            .doc(products.id)
            .delete()
            .then(() => {
                dispatch({
                    type: "REMOVE_FROM_LIST",
                });
            })
            .catch((err) => {
                dispatch({
                    type: "REMOVE_FROM_LIST_ERR",
                    err,
                });
            });
    };
};

export const checkProduct = (products) => {
    return (dispatch, getState, {
        getFirebase
    }) => {
        const firestore = getFirebase().firestore();

        firestore
            .collection("products")
            .doc(products.id)
            .set({
                ...products,
                checked: !products.checked,
            }, {
                merge: true
            })
            .then(() => {
                dispatch({
                    type: "CHECK_PRODUCT",
                    products,
                });
            })
            .catch((err) => {
                dispatch({
                    type: "CHECK_PRODUCT_ERR",
                    err,
                });
            });
    };
};