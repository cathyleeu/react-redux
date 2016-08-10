import React, {Component} from 'react'
import {connect} from 'react-redux'

class UserDatail extends Component{
  render(){
    if (!this.props.user) {
          return (<div>Select a user...</div>);
      }
    return(

      <div>
        <img src={this.props.user.thumbnail} />
        <h2>name : {this.props.user.first} {this.props.user.last}</h2>
        <h3>age : {this.props.user.age}</h3>
        <h3>description : {this.props.user.description}</h3>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.activeUser
  }
}

export default connect(mapStateToProps)(UserDatail)
