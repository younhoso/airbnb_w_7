import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

// components
import Home from './page/Home';
import Login from './page/Login';
import SignUp from './page/SignUp';
import Write from './page/Write';
import Detail from './page/Detail';
import Reserv from './page/Reserv';
import ReservConfirm from './page/ReservConfirm';

const Router = () => {
	return (
		<Switch>
			<Route path="/" component={Home} exact />
			<Route path='/login' component={Login} />
			<Route path='/signup' component={SignUp} />
			<Route path='/add_lodgment' component={Write} />
			<Route path='/detail/:id' component={Detail} />
			<Route path='/reserv/:id' component={Reserv} />
			<Route path='/confirm' component={ReservConfirm} />
			<Redirect from='*' to='/' />
		</Switch>
	);
};

export default Router;