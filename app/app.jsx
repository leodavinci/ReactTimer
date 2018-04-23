const React = require('react');
const ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
$ = jQuery = require('jquery');

// Load foundation
require('style!css!foundation-sites/dist/foundation.min.css')
// $(document).foundation();
// Foundation.addToJquery($);

// App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
        </Route>
    </Router>,
    document.getElementById('app')
);
