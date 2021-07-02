import { combineReducers } from 'redux'
import todos from './todo'
import Auth from './auth';

const rootReducer = combineReducers({
    todos, Auth
})

export default rootReducer;