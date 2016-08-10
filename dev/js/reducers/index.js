/**
 nomatter what type of data
 combind all reducer to one object from here

*/

import {combineReducers} from 'redux'
import UserReducer from './reducer-users'
import ActiveUserReducer from './reducer-active-user'

const allReducers = combineReducers({
  users: UserReducer,
  activeUser: ActiveUserReducer
})

export default allReducers
