import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

// components
import Home from './page/Home';
import Login from './page/Login';
import SignUp from './page/SignUp';
import Write from './page/Write';
import Detail from './page/Detail';
import DetailEdit from './page/DetailEdit';
import Reserv from './page/Reserv';
import ReservConfirm from './page/ReservConfirm';
import ComponentTest from './page/ComponentTest';

const Router = () => {
	return (
		<Switch>
			<Route path="/" component={Home} exact />
			<Route path='/login' component={Login} />
			<Route path='/signup' component={SignUp} />
			<Route path='/write' component={Write} />
			<Route path='/detail/:id' component={Detail} />
			<Route path='/detail/:id/edit' component={DetailEdit} />
			<Route path='/reserv/:id' component={Reserv} />
			<Route path='/confirm' component={ReservConfirm} />
			<Route path='/component-test' component={ComponentTest} />
			<Redirect from='*' to='/' />
		</Switch>
	);
};

export default Router;