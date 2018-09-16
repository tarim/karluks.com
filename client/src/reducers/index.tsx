import { combineReducers } from 'redux';
 import { UserReducer } from './userReducer';
//import { reducer as formReducer } from 'redux-form';
//import { reducer as toastrReducer } from 'react-redux-toastr';
const rootReducer = combineReducers({
 // form:   formReducer,
   user:  UserReducer
//  toastr: toastrReducer
});

export default rootReducer;
