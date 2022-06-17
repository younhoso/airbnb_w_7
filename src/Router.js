import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

// components
import Home from './page/Home';
import Login from './page/Login';
import SignUp from './page/SignUp';

const Router = () => {
	return (
		<Switch>
			<Route path="/" component={Home} exact />
			<Route path='/login' component={Login} />
			<Route path='/signup' component={SignUp} />
			<Redirect from='*' to='/' />
		</Switch>
	);
};

export default Router;