var React = require('react');
import Main from '../components/Main';
import Home from '../components/Home';
import TrainingSession from '../components/TrainingSession';
var Router = require('react-router');
var Route = Router.Route;
var IndexRoute = Router.IndexRoute;

export default (
  // Main is the menu and always rendered
  // any sub route becomes a props child
  <Route path="/" component={Main}>
    <Route path="/ts" component={TrainingSession} />
    <IndexRoute component={Home} />
  </Route>
);