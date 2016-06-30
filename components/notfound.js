var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var notFound = React.createClass({
	render() {
		return(
			<div>
				<h3>404 Not Found</h3>
				<p>Were you looking for one of these:</p>
				<ul>
					<li><Link to="/audience">Join as audience </Link>
					</li>
					<li><Link to="/speaker">Start the presentation</Link>
					</li>
					<li><Link to="/board">View the board</Link>
					</li>
				</ul>
			</div>
			);
	}
});

module.exports = notFound;