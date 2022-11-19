import { todoLists } from '../../screen/HomeScreen';
import * as actionTypes from './types';

const initialState = {
  data: todoLists,
};
const todoFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      return { data: [...state.data, action.payload] };
    default:
      return state;
  }
};

export default todoFormReducer;
