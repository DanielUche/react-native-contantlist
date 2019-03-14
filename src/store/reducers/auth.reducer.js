import * as actionTypes from '../action-types';

const initialState = {
  loading: false,
  detail: {},
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
    case actionTypes.AUTH_REQUEST:
    case actionTypes.AUTH_FAILED:
    case actionTypes.AUTH_SUCCESS:
    case actionTypes.AUTH_LOGOUT:
      return { ...state, ...action.payload };
    default:
      return { ...state };
  }
};
