import { ADD_TO_P_LIST, REMOVE_FROM_P_LIST, CHECK_P_PRODUCT, ADD_TO_S_LIST, REMOVE_FROM_S_LIST,
    CHECK_S_PRODUCT, CLEAR_LIST } from "./type";

export const addToPList = (data) => {
    return {
        type: ADD_TO_P_LIST,
        payload: data
    }
}

export const removeFromPList = (itemId) => {
    return {
        type: REMOVE_FROM_P_LIST,
        payload: {
            id: itemId
        }
    }
}

export const checkPProduct = (id) => {
    return {
        type: CHECK_P_PRODUCT,
        id
    }
}

export const clearList = () => {
    return {
        type: CLEAR_LIST
    }
}

export const checkSProduct = (id) => {
    return {
        type: CHECK_S_PRODUCT,
        id
    }
}

export const addToSList = (data) => {
    return {
        type: ADD_TO_S_LIST,
        payload: data
    }
}

export const removeFromSList = (itemId) => {
    return {
        type: REMOVE_FROM_S_LIST,
        payload: {
            id: itemId
        }
    }
}