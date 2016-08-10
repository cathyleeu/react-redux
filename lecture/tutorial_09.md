# React JS / Redux Tutorial - 9 - Actions and Action Creators

버튼을 클릭하고, 자료를 보내고 하는 것들은 모두 action이다!!

action itself is made up of two parts to show

first part is a type in the type is really just a string that explains what happened like a new button clicked user name clicked slider removed any way to describe what happened to your application

무엇을 클릭하면 어떤 일이 발생할 것인지를 묘사하는 것


the second part is the payload of any information that you need to give your app in this case we're just going to ahead and give it the user object so they have access to whatever user they clicked so if i click user name we're just going to pass the user object into or as the payload so i'll go ahead and vicious and then you guys are going to see what's going on

정보를 전달하는 것
유저이름을 클릭하면 바로 user object로 연결


```
dev/js/action/index.js

export const selectUser = (user) => {
  console.log('you clicked on user:', user.first)
  return {
    type: 'USER_SELECTED',
    payload: user
  }
}
```
action/index.js에 정의된 것은
type은 USER_SELECTED이고, 이것은 user 정보를 전달한다 라고 명시한 것이다.

action 에서 정의한 selectUser을 import한다.
하지만 이것만으로는 payload할 수 없음 (액션의 두번째 역할) connect 할 수 없다.

```
dev/js/containers/user-list.js

import {selectUser} from '../action/index'



function matchDispatchToProps(dispatch) {
  return bindActionCreators({selectUser: selectUser}, dispatch)
}


export default connect(mapStateToProps, matchDispatchToProps )(UserList)

```


we can to say on clike call selectUser and you may think that would be perfect. but here's the thing

onclick을 하면 action 폴더에서 정의한 selectUser 실행된다.
이것이 제대로 될 것이라고 생각하지만... 하나더 집고 넘어가야 할 것이 있다.

액션의 selectUser를 컨테이너와 연결을 해주어야 한다!!
matchDispatchToProps()라는 함수를 생성하여 연결할 액션을 정의해 준다.
