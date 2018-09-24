import { combineReducers } from 'redux'
import { reducer as toastrReducer } from 'react-redux-toastr'
import counter from './counter'

export default combineReducers({
  toastr:toastrReducer,
  counter
})
