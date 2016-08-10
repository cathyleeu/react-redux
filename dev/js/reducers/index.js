/**
 nomatter what type of data
 combind all reducer to one object from here

*/

import {combineReducers} from 'redux'
import UserReducer from './reducer-user'

const allReducers = combineReducers({
  users: UserReducer
})
