var React = require('react');

var Header = React.createClass({
	render() {
		return(
			<header>
				<h1>{this.props.title}</h1>
				<div id="connection-status" className={this.props.status}></div>
			</header>
			);
	}
});

module.exports = Header;