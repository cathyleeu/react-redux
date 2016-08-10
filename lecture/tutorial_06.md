# React JS / Redux Tutorial - 6 - Provider

전 과정에서  store에는 3명의 유저가 있다.
이제 우리가 해야 할 것은
we need to figure out how to take this store and pass the data along to our components

어떻게 store를 가질 것인지?
어떻게 컴포넌트에 패스할 것인지를 생각해야한다.

그럼 components를 만들어 보자~~

```
dev/js/components/App.js


import React from 'react'
require('../../scss/style.scss')

const App =() => (
  <div>
    <h2>Username List:</h2>
    <hr/>
    <h2>User Details:</h2>
  </div>
)

export default App;
```
기본적으로 메인 어플리케이션에 데이터를 패스하기 위해서는
기본적으로 provider이 필요하다.
provider : makes the store for all of your data available to all containers (which are just like components )

그럼 어떻게 provider을 만들까???

```
dev/js/index.js

import {Provider} from 'react-redux'   ---1
import {createStore} from 'redux'
import allReducers from './reducers'
import App from './components/App' ---2

const store = createStore(allReducers)


ReactDOM.render(<App />,document.getElementById('root')); ---3
```
import {provider} from 'react-redux' 후,
App components를 render한다.
app을 root로 렌덜 했다.

store와 2개의 컴포넌트가 있는데 말했듯이 이것들을 storage에 가지고 연결하기 위해서는 provider가 필요하기 때문에 import한 Provider을 render되는 App을 감싸게 함
```
dev/js/index.js

const store = createStore(allReducers)

ReactDOM.render(
  <Provider store={store}> //연결될 store를 정의
    <App />
  </Provider>
  ,document.getElementById('root'));


```
이렇게 하면 provider을 통해서 store의 데이터와 components가 연결된다.
pass to application
