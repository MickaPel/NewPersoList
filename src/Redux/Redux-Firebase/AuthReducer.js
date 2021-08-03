export const AuthReducer = (state = {}, action) => {
    switch(action.type) {
        
        case "SIGN_IN": {
            console.log("signin");
            return state;
        }

        case "SIGN_IN_ERR": {
            console.log("signin err");
            return state;
        }

        case "SIGN_OUT": {
            console.log("signout");
            return state;
        }

        case "SIGN_UP": {
            console.log("signup");
            return state;
        }

        case "SIGN_UP_ERR": {
            console.log("err");
            return state;
        }

        default: 
            return state;
    }
}