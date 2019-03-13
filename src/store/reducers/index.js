import { combineReducers } from 'redux';
import Auth from './auth.reducer';
import Todo from './todo.reducer';

export default combineReducers({
  Auth, Todo,
});
