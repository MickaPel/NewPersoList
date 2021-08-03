import { combineReducers } from "redux";
import { listReducer } from "./reducer";
import { ItemReducer } from "./Redux-Firebase/ItemReducer";
import { AuthReducer } from "./Redux-Firebase/AuthReducer";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";

const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer,
    list: listReducer,
    itemList: ItemReducer,
    auth: AuthReducer
})

export default rootReducer;
