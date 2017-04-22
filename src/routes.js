import React, {Component} from 'react';
import {Router, Route, browserHistory} from 'react-router';
import {requireAuth} from './auth0/auth';
import Nav from './components/layout/Nav';
import Home from './components/home/Home';
import Login from './auth0/Login';
import EditProfile from './components/profile/EditProfile';

class Routes extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route component={Nav}>
          <Route path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route onEnter={requireAuth} >
            <Route path="profile/edit" component={EditProfile} />
          </Route>
        </Route>
      </Router>
    );
  }
}

export default Routes;
