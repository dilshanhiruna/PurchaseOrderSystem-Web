import {combineReducers} from "redux";
import supplierReducer from "./reducer";

const rootReducer = combineReducers({
    data: supplierReducer
});

export default rootReducer;