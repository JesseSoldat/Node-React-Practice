var React = require('react');
var io = require('socket.io-client');
var Header = require('./parts/Header');
import { Link } from 'react-router';

var APP = React.createClass({

	getInitialState() {
		return {
			status: 'disconnected',
			title: ''
		}
	},

	componentWillMount() {

		this.socket = io('http://localhost:3000');

		this.socket.on('connect', this.connect);

		this.socket.on('disconnect', this.disconnect);

		this.socket.on('welcome', this.welcome);
	},

	connect(){
		this.setState({status: 'connected'});
	},

	disconnect() {
		this.setState( {status: 'disconnected'});
	},

	welcome(serverState){
		this.setState({title: serverState.title });
	},

	render() {
		return(
			<div>
				<Header title={this.state.title} status={this.state.status}/>
				<ul role="nav">
					<li><Link to="/audience">Audience</Link>
					</li>
					<li><Link to="/board">
						Board</Link>
					</li>
					<li><Link to="/speaker">
						Speaker</Link>
					</li>
				</ul>
				{React.cloneElement(this.props.children, {
					title: this.state.title,
					status: this.state.status
				})}

			</div>
			)
	}

});


module.exports = APP;