/**
 * similac 2016
 * tampham47@live.com
 */

import React from 'react';
import { Router, Route, createMemoryHistory } from 'react-router';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import style from './sass/style.scss';

import createStore from './stores/index.js';
import reducer from './reducers/index.js';
import App from './components/App.jsx';
import Home from './components/Home.jsx';
import Baby from './components/Baby.jsx';
import Mom from './components/Mom.jsx';
import Todo from './components/Todo.jsx';
import Search from './components/Search.jsx';
import Kick from './components/Kick.jsx';
import Profile from './components/Profile.jsx';

const history = createMemoryHistory('/');
var store = createStore(reducer);

var initPlugin = function() {
  setTimeout(function() {
    navigator.splashscreen.hide();
  }, 50);

  codePush.sync();

  /**
  // firebase
  window.FirebasePlugin.grantPermission();
  window.FirebasePlugin.getInstanceId(
    function(token) {
      alert('getToken 1: ' + token);
    },
    function(error) {
      console.error(error);
    }
  );
  window.FirebasePlugin.getToken(function(token) {
    // save this server-side and use it to push notifications to this device
    alert('getToken: ' + token);
  }, function(error) {
    console.error(error);
  });
  window.FirebasePlugin.onTokenRefresh(function(token) {
    // save this server-side and use it to push notifications to this device
    alert('onTokenRefresh: ' + token);
  }, function(error) {
    console.error(error);
  });
  window.FirebasePlugin.onNotificationOpen(function(notification) {
    alert('onNotificationOpen: ' + JSON.stringify(notification));
  }, function(error) {
    console.error(error);
  });
  */
};

document.addEventListener('deviceready', () => {
  render(
    <Provider store={store}>
      <Router history={history}>
        <Route component={App}>
          <Route path="/" component={Home}/>
          <Route path="/baby" component={Baby}/>
          <Route path="/mom" component={Mom}/>
          <Route path="/todo" component={Todo}/>
          <Route path="/plus" component={Search}/>
          <Route path="/kick" component={Kick}/>
          <Route path="/profile" component={Profile}/>
        </Route>
      </Router>
    </Provider>,
    document.getElementById('root')
  );

  if (typeof cordova != 'undefined') {
    initPlugin();
  }
}, false);

if (typeof cordova == 'undefined') {
  var event = new Event('deviceready');
  document.dispatchEvent(event);
}
