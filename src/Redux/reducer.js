import { ADD_TO_P_LIST, REMOVE_FROM_P_LIST, CHECK_P_PRODUCT, ADD_TO_S_LIST, REMOVE_FROM_S_LIST,
    CHECK_S_PRODUCT, CLEAR_LIST } from "./type";

const initialState = {
    items: [],
    items2: []
};
// const initialState2 = {
//     counter: 0,
//     list: [{ id: 0, text: "", completed: false }],
//     list2: [{ id: 0, text: "", completed: false }]
// };

export const listReducer = (state = initialState, action) => {
    switch(action.type) {

        case ADD_TO_P_LIST:
            return {
                ...state,
                items: [
                ...state.items,
                {
                    value: action.payload,
                    id: action.payload,
                    completed: false
                }
                ]
            };

        case REMOVE_FROM_P_LIST:
            return {
                ...state,
                items: state.items.filter((item) => item.id !== action.payload.id)
            };

        case CHECK_P_PRODUCT:
            return {
                ...state,
                items: state.items.map(todo =>
                todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
                )
            };

        case CLEAR_LIST:
            return {
                ...state,
                items: []
            };

        case ADD_TO_S_LIST:
            return {
                ...state,
                items2: [
                ...state.items2,
                {
                    value2: action.payload,
                    id: action.payload,
                    completed: false
                }
                ]
            };

        case REMOVE_FROM_S_LIST:
            return {
                ...state,
                items2: state.items2.filter((item) => item.id !== action.payload.id)
            };

        case CHECK_S_PRODUCT:
            return {
                ...state,
                items2: state.items2.map(todo =>
                todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
                )
            };

        default: 
            return state;
    }

}