import * as actionTypes from './types';

export const addTodo = (payload) => {
  return {
    type: actionTypes.ADD_TODO,
    payload,
  };
};
