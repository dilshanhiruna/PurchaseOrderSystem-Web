import * as types from './actionTypes';

//Define the initial state
const initialState = {
	sites: [],
	site: {},
};

//assigning values for the objects
const siteReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.GET_SITES:
			return {
				...state,
				sites: action.payload,
			};
		case types.GET_SITE:
			return {
				...state,
				site: action.payload,
			};
		default:
			return state;
	}
};

export default siteReducer;
