import React, { Component } from 'react';
import './App.css';
import { Security, SecureRoute, ImplicitCallback } from '@oktaokta-react';

function onAuthRquired({history}) {
  history.push('/login');
}

class App extends Component {
  render() {
    return (
      <Security
      issuer='https://dev-378075.okta.com/oauth2/default'
                  client_id='0oabhpsmmfYQT5smT356'
                  redirect_uri={window.location.origin + '/implicit/callback'}
                  onAuthRequired={onAuthRequired}>
        {/* everything inside router needs to be inside this but the router tags go on the outside of it */}
      </Security>
    );
  }
}

export default App;
