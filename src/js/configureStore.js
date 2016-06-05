import { createStore, applyMiddleware, compose } from "redux"
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
}
