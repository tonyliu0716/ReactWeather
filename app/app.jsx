// use webpack then we need to import React again
var React = require('react');
var ReactDOM = require('react-dom');

//before that, need to run: 
// npm install react-router@2.0.0 --save

var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');

var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');

// how to import the css file, load foundation. css! is a css loader
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

ReactDOM.render(
    // add the props
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
        
           <Route path="about" component={About}/>
           <Route path="examples" component={Examples}/> 
           <IndexRoute component={Weather}/>
        </Route>
    </Router>, 
    document.getElementById('app') 
);