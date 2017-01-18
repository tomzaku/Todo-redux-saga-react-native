import {combineReducers} from 'redux'
import todo from './todo/reducer'

const rootReducer = combineReducers({
  todo
})

export default rootReducer
