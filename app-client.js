var React = require('react');
var ReactDom = require('react-dom');

import { Router, Route, hashHistory, IndexRoute, Link} from 'react-router';

var APP = require('./components/APP');
var Audience = require('./components/audience');
var Board = require('./components/board');
var Speaker = require('./components/speaker');
var notFound = require('./components/notFound');


ReactDom.render((
	<Router history={hashHistory}>
		<Route path="/" component={APP}>
			<IndexRoute component={Audience} />
			<Route path='audience' component={Audience} />
			<Route path='board' component={Board} />
			<Route path='speaker' component={Speaker} />
			<Route path='*' component={notFound} />
		</Route>

	</Router>


	), document.getElementById('root'));