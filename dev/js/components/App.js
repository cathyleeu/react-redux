/**
  rendering to HTML
*/

import React from 'react'
import UserList from '../containers/user-list'
import UserDatail from '../containers/user-detail'
require('../../scss/style.scss')

const App =() => (
  <div>
    <h2>Username List:</h2>
    <UserList />
    <hr/>
    <h2>User Details:</h2>
    <UserDatail />
  </div>
)

export default App;
