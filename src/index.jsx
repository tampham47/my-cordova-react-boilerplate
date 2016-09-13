/**
 * similac 2016
 * tampham47@live.com
 */

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import style from './sass/style.scss';
import createStore from './stores/index.js';
import reducer from './reducers/index.js';
import App from './components/App.jsx';
import Home from './components/Home.jsx';
import Baby from './components/Baby.jsx';
import Mom from './components/Mom.jsx';
import { Router, Route, createMemoryHistory } from 'react-router';

const history = createMemoryHistory('/');
var store = createStore(reducer);

document.addEventListener('deviceready', () => {
  render(
    <Provider store={store}>
      <Router history={history}>
        <Route component={App}>
          <Route path="/" component={Home}/>
          <Route path="/baby" component={Baby}/>
          <Route path="/mom" component={Mom}/>
        </Route>
      </Router>
    </Provider>,
    document.getElementById('root')
  );

}, false);
