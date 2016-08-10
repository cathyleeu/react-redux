# React JS / Redux Tutorial - 5 - Reducers

store은 one big javasctipt 이다.

사용자, 영화, 음악 리스트를 가지고 있다.
3개의 오브젝트를 가진다고 하면,

오직 하나의 오프젝트만 패스할 수 있는 store에 reducer을 toss하기 위해서는
combind them into one big object 하나로 묶어야 한다~~

그래서
-reducer
  -reducer-user.js 에서
  -index.js 파일을 추가 시킨다.

```
reducers/index.js

import {combineReducers} from 'redux'
import UserReducer from './reducer-user'

const allReducers = combineReducers({
  users: UserReducer // equal to reducer-user data
})

```

이렇게 여러개의 데이터를 한번에 묶기 위해서 combineReducers을 import하고,
묶을 reducer를 나열 한 다음

dev/js/index.js로 넘어가서

```
dev/js/index.js

import {createStore} from 'redux'
import allReducers from './reducers'

// const store = createStore()에서 allReducers를 추가한다.
const store = createStore(allReducers)


ReactDOM.render(
    <h1> hey now</h1>,
    document.getElementById('root')
);

```
