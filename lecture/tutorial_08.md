# React JS / Redux Tutorial - 8 - Passing Data to Component


데이터를 컴포넌트에 보내기 위해서 mapStateToProps를 정의했었다.

```
dev/js/containers/user-list.js


class UserList extends Component{
  createListItems(){
    return this.props.users.map((user) => {
      // ---2 : this.props.users.map으로 users에 있는 데이터를  
      return (
        <li key={user.id}>{user.first} {user.last}</li>
      // 하나하나씩 부른다.
      )
    })
  }
  render(){
    return(
      <ul>
        {this.createListItems()}
        // ---3 앞에서 정의한 것을 여기에 실행한다. 
      </ul>
    )
  }
}

function mapStateToProps(state) {
  return {
    users: state.users  
    // ---1 : store에 저장된 users를 이 컨테이너에 사용 할 수 있도록 불러옴
  }
}

export default connect(mapStateToProps)(UserList)

```
