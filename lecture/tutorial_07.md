# React JS / Redux Tutorial - 7 - mapStateToProps


our data is up provider for storage and we know that we can create components to use them but they have to go through this thing called a
container so that looks like a pain in

data는 provider에 있다. 그리고 이것을 사용하기 위해서 컴포넌트를 생성하면 된다는 것을 알고 있다. 하지만 이것들을 컨테이너를 통과해야만 함... 그렇게 컴포넌트와 연결을.. 하는 것임 후후

컴포넌트 = 브레인 기능이 없는
컨테이너 = 컴포넌트와 프로바이더의 연결고리, 브레인 기능이 담고 있는 것





```
dev/js/containers/user-list.js

import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'


class UserList extends Component{
  render(){
    return(
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    )
  }
}

export default UserList
```
container에서 store의 data를 사용하기 위해서
mapStateToProps을 사용하는데 이것은 각 컨테이너에 맞는 store의 조각을 불러와서 사용하는 것이다 라고 생각하면 된다.  
```
dev/js/containers/user-list.js

function mapStateToProps(state) {
  return {
    users: state.users
  }
}
export default connect(mapStateToProps)(UserList)

```
기존의 user-list에 function을 추가하고 export에 connect로 연결한다. 
