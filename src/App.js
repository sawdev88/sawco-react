import React, { Component } from 'react';
import './app.min.css';
import { Router, Route, Link, Switch } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'

import {
  Homepage,
  CommuterSeries,
} from './components/pages/';

import {
  Footer
} from './components';

class App extends Component {
  render() {
    return (
      <div>
        <Router history={createBrowserHistory()}>
          <Switch>
            <Route exact path='/' component={ Homepage } />
            <Route path="/commuter-series" component={ CommuterSeries } />
          </Switch>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
