import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';

// middleware
import thunk from 'redux-thunk';

// reducers
import lodgment from './lodgment';
import user from './user';
import comment from './comment';
import post from './post';

// redux router
import { createBrowserHistory } from 'history';
import { connectRouter } from 'connected-react-router';

export const history = createBrowserHistory();
const rootReducer = combineReducers({
	user,
	lodgment,
	comment,
	post,
	router: connectRouter(history),
});

const middleware = [thunk.withExtraArgument({ history })];
const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;