# React JS / Redux Tutorial - 10 - Listening for Actions

it's up to the reducer to determine how
that action is going to change your application

this reducer is smart part
how is that goint to change my data
so in this case we have one action whenever the user clicks one of these names thats the announcement that gets made so then what we need to do is we need to say okay whenever that happens display their info under


선택된 것을 active-user이라고 하자.
새로운 reducer를 만든다.
만드는 이유는 user와 active-user를 구분하기 위해서이다.
user은 모든 유저를 관리하는 것이고, active-user는 클릭된 회원만 관리하는 것

한가지 언급하고 싶은것은
어떤 액션이 어디에서 일어 났던 간에 액션들은 모든 reducer에 전달된다.

전달된 액션을 무시하는 reducer가 있는 반면, 반응하는 reducer가 있다.
액션에 반응하는 리듀서를 정의하기 위해서 action에서 정의한 type을 macth하여
어떤 반응을 보일 것인지 정의한다.

```
dev/js/reducers/reducer-active-user.js


export default function (state=null, action) {
  switch (action.type) {
    case 'USER_SELECTED': // 액션에서 정의한 type
      return action.payload // user 정보를 return하라고 정의함
      break;

  }
  return state
}
```

여기서 끝이 아니라
새롭게 reducer가 생겼으니 모든 리듀서를 하나로 묶는 index 파일에 정의된
allReducers에 activeUser를 추가한다. 

```
dev/js/reducers/index.js

import ActiveUserReducer from './reducer-active-user'

const allReducers = combineReducers({
  users: UserReducer,
  activeUser: ActiveUserReducer
})


```
