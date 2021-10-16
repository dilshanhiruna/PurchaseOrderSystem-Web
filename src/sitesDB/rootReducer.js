import { combineReducers } from 'redux';
import siteReducer from './reducer';

const rootReducer = combineReducers({
	//To access all reducer states with the help of the "data" keyword
	data: siteReducer,
});

export default rootReducer;
