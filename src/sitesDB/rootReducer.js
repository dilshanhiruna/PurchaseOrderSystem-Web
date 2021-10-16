import { combineReducers } from 'redux';
import siteReducer from './reducer';

//To access all reducer states with the help of the "data" keyword
const rootReducer = combineReducers({
	data: siteReducer,
});

export default rootReducer;
