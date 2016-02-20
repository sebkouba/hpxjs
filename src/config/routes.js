var React = require('react');
import Main from '../components/Main';
import Home from '../components/Home';
import FormPOC from '../components/forms/FormPOC';
import Entry from '../components/forms/Entry';
import EntryContainer from '../components/forms/EntryContainer';
import TrainingSession from '../components/_old_TrainingSession';
import Parent from '../components/poc/Parent';

var Router = require('react-router');
var Route = Router.Route;
var IndexRoute = Router.IndexRoute;

export default (
  // Main is the menu and always rendered
  // any sub route becomes a props child
  <Route path="/" component={Main}>
    <Route path="/ts" component={TrainingSession}/>
    <Route path="/form" component={FormPOC}/>
    <Route path="/entries" component={EntryContainer}/>
    <Route path="/poc" component={Parent}/>
    <IndexRoute component={Home}/>
  </Route>
);