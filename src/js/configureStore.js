import { createStore, applyMiddleware } from "redux"
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
}
