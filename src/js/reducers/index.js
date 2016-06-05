import { combineReducers } from 'redux'

import reducer1 from './reducer1.js'


const myReducer = combineReducers({
  reducer1: reducer1
});

export default myReducer
