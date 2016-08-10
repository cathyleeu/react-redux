# React JS / Redux Tutorial - 4 - Store


{}으로 감싸는 이유
```
import {createStore} from redux

```

one variavle or one function from it
var를 따로따로 만들지 않아도 된다...?

```
const store = createStore()
```

 store은 application에 필요한 모든 데이터이다.

 the data that gets saved in the store is determined by reducers
 so a reducer is pretty much just like its a function that says what data were supposed to save in our store

store에 저장된 데이터는 reducer로 부터 정해진다.
그래서 리듀서는 어떤 데이터가 store에 저장되어야 하는지를 정하는 기능이다.


reducers 파일에 reducer-user.js파일 생성함

function that returns the part of application
responsible for storing the users

whenever we delete or add users
this function going to be used
