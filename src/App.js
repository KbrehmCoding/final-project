import React, { Component } from 'react';
import './App.css';
import { Security, SecureRoute, ImplicitCallback } from '@oktaokta-react';
import Login from './components/auth/Login';

function onAuthRquired({history}) {
  history.push('/login');
}

class App extends Component {
  render() {
    return (
      <Router>
        <Security
          issuer='https://dev-378075.okta.com/oauth2/default'
                      client_id='0oabhpsmmfYQT5smT356'
                      redirect_uri={window.location.origin + '/implicit/callback'}
                      onAuthRequired={onAuthRequired}>
          <SecureRoute path='/protected' component={Protected} />
          <Route path='/login' render={() => <Login baseUrl='https://dev-378075.okta.com' />} />
          <Route path='/implicit/callback' component={ImplicitCallback} />
        {/* everything inside router needs to be inside this but the router tags go on the outside of it */}
        </Security>
      </Router>
    );
  }
}

export default App;
