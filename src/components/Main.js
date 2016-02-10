import React, { Component } from 'react';
import { Link } from 'react-router';
import { NICE, SUPER_NICE } from './colors';
import Counter from './Counter';
import Home from './Home';
import TwoCounters from './TwoCounters'

export default class extends Component {
  render() {
    return (
      <div className="main-container">
        <nav className="navbar navbar-default" role="navigation">
          <div className="col-sm-7 col-sm-offset-2" style={{marginTop: 15}}>
            MENU
            <Link to="/ts"> TS </Link>
            <Link to="/"> Home </Link>
            <Link to="/form"> Form </Link>
            <Link to="/data/entries"> Entries </Link>
          </div>
        </nav>
        <div className="container">
          {this.props.children}
          <br/>
          Main Component
        </div>
      </div>
    );
  }
}