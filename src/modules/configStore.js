import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';

// middleware
import thunk from 'redux-thunk';

// reducers
import image from './image';

// redux router
import { createBrowserHistory } from 'history';
import { connectRouter } from 'connected-react-router';

export const history = createBrowserHistory();
const rootReducer = combineReducers({
	image,
	router: connectRouter(history),
});

const middleware = [thunk.withExtraArgument({ history })];
const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;