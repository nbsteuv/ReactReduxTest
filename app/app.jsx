var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

//Load foundation
$(document).foundation();

//App.scss
require('style!css!sass!applicationStyles');

ReactDOM.render(
	// <Router history={hashHistory}>
	// 	<Route path="/" component={Main}>
	// 		<IndexRoute component={Timer} />
	// 		<Route path="countdown" component={Countdown} />
	// 	</Route>
	// </Router>,
	<p>Boilerplate works</p>,
	document.getElementById('app')
);

require('./redux-example.jsx');
