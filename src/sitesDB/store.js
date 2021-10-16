import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './rootReducer';

const middleware = [thunk];

//creating a logger if application runs in development server
if (process.env.NODE_ENV === 'development') {
	middleware.push(logger);
}

//creating new store with sites CRUD function
const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;
