require("jquery");
require("underscore");

require("bootstrap/dist/css/bootstrap.css");
require("bootstrap/dist/css/bootstrap-theme.css");
require("bootstrap");

require("../css/app.css");
require('../css/login.css');
require('../css/modal.css');

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, hashHistory } from 'react-router'

import routes from './config/routes'
import App from './components/App'
import configureStore from './configureStore'

import { normalize } from 'normalizr'
import * as MySchema from './config/mySchema'
import * as WebUtil from './config/webUtil'
import * as reducers from './reducers'
import * as actions from './actions'
import axios from 'axios'
import * as helpers from './config/helpers'

const initialStoreState = helpers.getInitialData();

let store = configureStore(initialStoreState);
window.store = store; // for debugging only
window.axios = axios; // for debugging only
window.reducers = reducers; // for debugging only
window.actions = actions; // for debugging only
window.normalize = normalize; // for debugging only
window.MySchema = MySchema; // for debugging only
window.WebUtil = WebUtil; // for debugging only

window.onunload = () => {
  sessionStorage.setItem("my-app-initial-data", JSON.stringify(store.getState()));
};


render(
  <Provider store={store}>
    <Router history={hashHistory}>
      {routes(store)}
    </Router>
  </Provider>,
  document.getElementById('root')
);

