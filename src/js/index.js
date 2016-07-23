import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, hashHistory } from 'react-router'

import routes from './config/routes'
import App from './components/App'
import configureStore from './configureStore'

require("jquery");
require("underscore");
require("../css/app.css");

require("bootstrap/dist/css/bootstrap.css");
require("bootstrap/dist/css/bootstrap-theme.css");
require("bootstrap");

const initialStoreState = {}

let store = configureStore(initialStoreState);
window.store = store; // for debugging only

console.log("__X__" + __X__);

render(
  <Provider store={store}>
    <Router history={hashHistory}>
      {routes}
    </Router>
  </Provider>,
  document.getElementById('root')
);

