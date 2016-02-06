import React from 'react';
import { render } from 'react-dom';
import Main from './components/Main';
var Router = require('react-router').Router;
//var routes = require('./config/routes');
import routes from './config/routes';

render(
    // routes is the instruction sheet to Router
    <Router>{routes}</Router>,
    document.getElementById('root')
);


