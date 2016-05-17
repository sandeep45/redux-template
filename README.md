#### Init the project

````
mkdir redux-template
cd redux-template
npm init
touch README.md
````
#### Load Dependencies

````
npm install --save react react-dom redux react-redux keymirror axios css-loader style-loader file-loader url-loader redux-thunk redux-logger
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
      }
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
cd js
touch index.js

mkdir actions
touch actions/index.js

mkdir reducers
touch reducers/index.js
touch reducers/reducer1.js
touch reducers/reducer2.js

mkdir components
touch components/App.js

mkdir constants
touch constants/index.js

mkdir containers
````

#### add template for index.js

````
echo "import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/App'
import configureStore from './configureStore'

const initialStoreState = {}

let store = configureStore(initialStoreState);
window.store = store; // for debugging only

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
" > index.js
````

#### add template for app.js

````
echo "import React from 'react';
import CurrentMessage from '../containers/CurrentMessage.js'

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
echo 'import { createStore, applyMiddleware } from "redux"
import thunkMiddleware from "redux-thunk"
import createLogger from "redux-logger"
import myReducer from "./reducers"

const loggerMiddleware = createLogger();

export default function configureStore(initialState) {
  return createStore(
    myReducer,
    initialState,
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    )
  )
}' > ./configureStore.js
````

#### add template for the main reducer

````
echo "import { combineReducers } from 'redux'

import reducer1 from './reducer1.js'
import reducer2 from './reducer2.js'

const myReducer = combineReducers({
  reducer1: reducer1,
  reducer2: reducer2
});

export default myReducer;

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

#### add template for reducer2

````
echo 'import K from "../constants/"

const reducer2 = (state="", action) => {
  switch(action.type){
    default:
      return state
  }
}
export default reducer2' > reducers/reducer2.js
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

#### adding template for a container

````
echo "import { connect } from 'react-redux'

import MessageDisplayer from '../components/MessageDisplayer.js'

const mapStateToProps = (state, ownProps) => {
  return {
    message : state.message
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

export default CurrentMessage;" > containers/CurrentMessage.js
````

#### other improvments

namespace all the actions
a constants file
a sample component

Add propTypes to FilterLink.js and give pull request

#### Nuggets

Design the shape of your state before implementation

#### Update package.json

````
"private": true,
"scripts": {
    "start": "webpack-dev-server",
    "test": "mocha --compilers js:babel-register --recursive",
    "test:watch": "npm test -- --watch"
}
````

#### Async Flow

Keep the action which defines the UI interaction and the action which makes network request seperate. Keeping them as seperate actions is a better design as it allows us to fetch data regardless of user interaction as the app grows. e.g. pre-fetch, fetch with time, fetch with route change