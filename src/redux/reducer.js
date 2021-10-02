import * as types from "./actionTypes";

const initialState = {
    suppliers: [],
    supplier: {},
};

const supplierReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.GET_SUPPLIERS: 
        return {
            ...state,
            suppliers: action.payload,
        };
        case types.GET_SUPPLIER: 
        return {
            ...state,
            supplier: action.payload,
        };
        default:
            return state;
    }
};

export default supplierReducer;