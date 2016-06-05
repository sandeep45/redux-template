#### Init the project

````
mkdir redux-template
cd redux-template
npm init
touch README.md
````
#### Load Dependencies

````
npm install --save react react-dom redux react-redux keymirror axios css-loader style-loader file-loader url-loader redux-thunk redux-logger react-router
npm install --save-dev webpack babel webpack-dev-server babel-loader babel-preset-react babel-preset-es2015 babel-preset-stage-1 redux-devtools react-addons-test-utils mocha expect babel-register react-addons-test-utils redux-mock-store nock
````

#### Setup Webpack

````
touch webpack.config.js
echo 'module.exports = {
  devtool: "eval-source-map",
  entry: "./src/js/index.js",
  output: {
    path: "./dist",
    filename: "bundle.js",
    publicPath: "/"
  },
  devServer: {
    inline: true,
    contentBase: "./dist",
    proxy: {
      '/notes*': {
        target: 'http://localhost:3000'
      }
    }
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel",
        query: {
          presets: ["es2015", "react", "stage-1"]
        }
      },
      {
        test: /.css$/,
        loader: "style!css"
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=8192' // inline base64 URLs for <=8k images, direct URLs for the rest
      },
      {test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff'},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'}
    ]
  }
};' > webpack.config.js
````

#### Setup .babelrc

````
touch .babelrc
echo '{
  "presets": ["es2015", "react", "stage-1"]
}' > .babelrc
````

#### Setup Git

````
git init
````

#### Add a .gitignore

````
echo ".DS_STORE
node_modules
*~
*.pyc
static
.grunt
_SpecRunner.html
__benchmarks__
build/
coverage/
.module-cache
*.gem
docs/.bundle
docs/code
docs/_site
docs/.sass-cache
docs/js/*
docs/downloads
docs/vendor/bundle
examples/shared/*.js
test/the-files-to-test.generated.js
*.log*
chrome-user-data
*.sublime-project
*.sublime-workspace
.idea
*.iml
.vscode" > .gitignore
````

#### Setup Output and Input Directory/File

````
mkdir dist src test
touch dist/index.html
````

#### Add template for index.html

````
echo '<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title></title>
</head>
<body>

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap-theme.min.css" integrity="sha384-fLW2N01lMqjakBkx3l/M9EahuwpSfeNvV63J5ezn3uZzapT0u7EYsXMjQV+0En5r" crossorigin="anonymous">
<div id="root"></div>
<script src="bundle.js"> </script>
</body>
</html>' > dist/index.html
````

#### make basic directory structure

````
cd src
mkdir js
mkdir css
touch css/app.css
cd js
touch index.js
touch routes.js

mkdir actions
touch actions/index.js

mkdir reducers
touch reducers/index.js
touch reducers/reducer1.js

mkdir components
touch components/App.js

mkdir constants
touch constants/index.js

mkdir containers
````

#### add template for app.css

````
echo "body {
  padding-top: 50px;
}
.dashboard {
  padding: 40px 15px;
  text-align: center;
}
.container-fluid {
  margin-top: 20px;
}" > ../css/app.css
````

#### add template for index.js

````
echo "import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, hashHistory } from 'react-router'

import routes from './routes'
import App from './components/App'
import configureStore from './configureStore'

const initialStoreState = {}

let store = configureStore(initialStoreState);
window.store = store; // for debugging only

render(
  <Provider store={store}>
    <Router history={hashHistory}>
      {routes}
    </Router>
  </Provider>,
  document.getElementById('root')
);
" > index.js
````

#### add template for routes.js

````
echo 'import React from "react"
import { Route, IndexRoute } from "react-router"

import App from "./components/App"


const routes = (
  <Route path="/" component={App}>
  </Route>
);

export default routes;' > routes.js
````

#### add template for app.js

````
echo "import React from 'react';
import CurrentMessage from '../containers/CurrentMessage.js'
require("../../css/app.css");

const App = (props) => {
  return(
    <CurrentMessage />
  )
}

export default App
" > components/App.js
````

#### add template for another component - MessageDisplayer

````
echo "import React, { PropTypes } from 'react'

const MessagseDisplayer = (props) => {

  const { theMessage } = props;

  return(
    <h1>Message: {theMessage}</h1>
  )
};

MessagseDisplayer.propTypes = {
  theMessage: PropTypes.string.isRequired
};

export default MessagseDisplayer" > components/MessageDisplayer.js
````

#### add template for a container - CurrentMessage

````
echo "import { connect } from 'react-redux'

import MessageDisplayer from '../components/MessageDisplayer.js'

const mapStateToProps = (state, ownProps) => {
  return {
    theMessage : state.reducer1
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {

  }
};

const CurrentMessage = connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageDisplayer);

export default CurrentMessage;
" > containers/CurrentMessage.js
````

#### add template for configureStore.js

````
echo 'import { createStore, applyMiddleware, compose } from "redux"
import thunkMiddleware from "redux-thunk"
import createLogger from "redux-logger"
import myReducer from "./reducers"

const loggerMiddleware = createLogger();

export default function configureStore(initialState) {
  return createStore(
    myReducer,
    initialState,
    compose(
      applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
      ),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  )
}' > ./configureStore.js
````

#### add template for the main reducer

````
echo "import { combineReducers } from 'redux'

import reducer1 from './reducer1.js'


const myReducer = combineReducers({
  reducer1: reducer1
});

export default myReducer" > reducers/index.js
````

#### add template for reducer1

````
echo 'import K from "../constants/"

const reducer1 = (state="Hello World", action) => {
  switch(action.type){
    default:
      return state
  }
}
export default reducer1' > reducers/reducer1.js
````

#### add template for main constants index

````
echo 'import keyMirror from "keymirror"

var appConstants = keyMirror({
  SELECT_TOPIC: null,
  RECEIVED_POSTS: null,
  REQUESTED_POSTS: null
});

export default appConstants;' > constants/index.js
````

#### add template for main actions index

````
echo 'import axios from "axios";

import K from "../constants/"

export const selectTopic = () => {
  return {
    type: K.SELECT_TOPIC
  }
};' > actions/index.js
````

#### Update package.json

````
"private": true,
"scripts": {
    "start": "webpack-dev-server",
    "test": "mocha --compilers js:babel-register --recursive",
    "test:watch": "npm test -- --watch"
},
````

## The End

#### PS: Exporting the Store and then importing it

````
// store.js
export default createStore(reducer)
// actions.js
import store from './store'
````

The main reason we dislike it is because it forces store to be a singleton. This makes it very hard to implement server rendering. On the server, you will want each request to have its own store, so that different users get different preloaded data.

A singleton store also makes testing harder. You can no longer mock a store when testing action creators because they reference a specific real store exported from a specific module. You can’t even reset its state from outside.

So while you technically can export a singleton store from a module, we discourage it. Don’t do this unless you are sure that your app will never add server rendering.

#### On show page with a route, to make the routes work

````
componentDidMount() {
    this.props.dispatch(
      makeASandwichWithSecretSauce(this.props.forPerson)
    );
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.forPerson !== this.props.forPerson) {
      this.props.dispatch(
        makeASandwichWithSecretSauce(nextProps.forPerson)
      );
    }
  }
````

#### See also

[Redux](https://github.com/reactjs/redux)
[Redux Action](https://github.com/acdlite/redux-actions)
[Redux Thunk](https://github.com/gaearon/redux-thunk)
[Fetch](https://github.com/matthew-andrews/isomorphic-fetch)
[Why I need Thunk's](http://stackoverflow.com/questions/35411423/how-to-dispatch-a-redux-action-with-a-timeout/35415559#35415559)
[React Context](https://facebook.github.io/react/docs/context.html) - Just for reference as redux uses it to pass the store around and we dont want to use gloabal like things.
[Thinking in React](https://facebook.github.io/react/docs/thinking-in-react.html) -
[Components & Containers](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.3ypxx95rh)
[A Case for Flux](https://medium.com/swlh/the-case-for-flux-379b7d1982c6#.q40n6erpp)
[Normalizr](https://github.com/paularmstrong/normalizr)
[FSA](https://github.com/acdlite/flux-standard-action)
[Directory of Redux Eco-System](https://github.com/markerikson/redux-ecosystem-links)
[React Redux Reading List](https://github.com/markerikson/react-redux-links)
[Redux Reading List](https://github.com/xgrommx/awesome-redux)
[Immutable](http://facebook.github.io/immutable-js/)
[Redux Cartoon Intro](https://code-cartoons.com/a-cartoon-intro-to-redux-3afb775501a6#.uiccs5hsm)
[React Redux with Dan Abramov](https://www.youtube.com/watch?v=VJ38wSFbM3A)
[React Reduc](https://github.com/reactjs/react-redux)
[Redux Hot Reloading and Time Travel](https://www.youtube.com/watch?v=xsSnOQynTHs)
[Redux Devtools](https://github.com/gaearon/redux-devtools)
[https://github.com/mjackson/expect](https://github.com/mjackson/expect)
[Undestanding Redux Middleware & Functional Programming Concepts](https://medium.com/@meagle/understanding-87566abcfb7a#.49buroeo5)