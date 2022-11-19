import { combineReducers } from 'redux';
import todoFormReducer from './todoForm/todoFormReducer';

const rootReducer = combineReducers({
  todoForm: todoFormReducer,
});

export default rootReducer;
