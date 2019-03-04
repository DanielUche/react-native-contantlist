import * as actionTypes from '../action-types';

const initialState = {
  isLoading: false,
  detail: {},
  error: '',
  success: false,
};

/**
 * @description poi reducer handles all poi action types
 * @param {obj} state initial object
 * @param action
 * @returns {obj}
 */
export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_REQUEST:
    case actionTypes.AUTH_FAILED:
    case actionTypes.AUTH_SUCCESS:
      return { ...state, ...action.payload };
    default:
      return { ...state };
  }
};
