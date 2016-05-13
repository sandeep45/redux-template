import { combineReducers } from 'redux'

import reducer1 from './reducer1.js'
import reducer2 from './reducer2.js'

const myReducer = combineReducers({
  reducer1: reducer1,
  reducer2: reducer2
});

export default myReducer;

export default myReducer
