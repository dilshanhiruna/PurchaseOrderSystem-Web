import {combineReducers} from "redux";
import supplierReducer from "./reducer";

const rootReducer = combineReducers({
    //To access all reducer states with the help of the "data" keyword
    data: supplierReducer
});

export default rootReducer;