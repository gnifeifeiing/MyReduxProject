/**
 * App入口，将store注入Provider
 * Songlcy create by 2017-01-10
 * @flow
 */
import React, {Component} from 'react';
import {Provider} from 'react-redux';

import LoginComponent from './components/login/LoginComponent';
import App from './components/App';
import Store from './store/Store';

export default class Root extends Component {

  render() {
    return (
      <Provider store={Store}>
        <App/>
      </Provider>
    );
  }
}
