export const ItemReducer = (state = {}, action) => {
    switch(action.type) {

        case "ADD_TO_LIST": {
            console.log("add", action.products)
            return state;
        }

        case "ADD_TO_LIST_ERR": {
            console.log("err")
            return state;
        }

        case "REMOVE_FROM_LIST": {
            console.log("delete", action.products)
            return state;
        }

        case "REMOVE_FROM_LIST_ERR": {
            console.log("err")
            return state;
        }

        case "CHECK_PRODUCT": {
            console.log("check")
            return state;
        }

        case "CHECK_PRODUCT_ERR": {
            console.log("err")
            return state;
        }

        default: 
            return state;
    }

}