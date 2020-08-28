import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import tasksReducer from '../reducers/tasksReducer'
import userReducer from '../reducers/userReducer'

const configureStore = () => {
    const store = createStore(combineReducers({
        user: userReducer,
        tasks: tasksReducer
    }), applyMiddleware(thunk))
    return store 
}

export default configureStore
