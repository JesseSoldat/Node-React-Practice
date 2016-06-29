var React = require('react');
var ReactDom = require('react-dom');

import { Router, Route, hashHistory} from 'react-router';

var APP = require('./components/APP');


ReactDom.render((
	<Router history={hashHistory}>
		<Route path="/" component={APP}>
		</Route>

	</Router>


	), document.getElementById('root'));