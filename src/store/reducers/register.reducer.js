import {
  REGISTRATION_REQUEST,
  REGISTRATION_FAILED,
  REGISTRATION_SUCCESS,
} from '../action-types';

const initialState = {
  isLoading: false,
  registered: false,
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
    case REGISTRATION_REQUEST:
    case REGISTRATION_FAILED:
    case REGISTRATION_SUCCESS:
      return { ...state, ...action.payload };
    default:
      return { ...state };
  }
};
