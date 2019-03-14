import * as actionTypes from '../action-types';

const initialState = {
  loading: false,
  todo: {},
  todos: {},
  error: '',
};

/**
 * @description poi reducer handles all poi action types
 * @param {obj} state initial object
 * @param action
 * @returns {obj}
 */
export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_TODO_REQUEST:
    case actionTypes.GET_TODO_FAILED:
    case actionTypes.GET_TODO_SUCCESS:
    case actionTypes.ADD_TODO_REQUEST:
    case actionTypes.ADD_TODO_FAILED:
    case actionTypes.ADD_TODO_SUCCESS:
      return { ...state, ...action.payload };
    default:
      return { ...state };
  }
};
