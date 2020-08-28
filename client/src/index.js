import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {Provider} from 'react-redux'
import configureStore from './store/configureStore'
import {startGetTasks} from './actions/tasksAction'
import {startAddTasks} from './actions/tasksAction'
import { startGetUser } from './actions/userAction'

const store = configureStore()
console.log(store.getState())

store.subscribe(() => {
    console.log(store.getState())
})

if(localStorage.getItem('authToken')){
    store.dispatch(startGetUser())
}
store.dispatch(startGetTasks())
store.dispatch(startAddTasks())

const jsx = (
    <Provider store = {store}>
        <App/>
    </Provider>
)
ReactDOM.render(jsx, document.getElementById('root'))
