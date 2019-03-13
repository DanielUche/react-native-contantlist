import * as actionTypes from '../action-types';
import {
  AUTH_ERRORS,
  FIREBASE_AUTH_SIGN_IN,
  FIREBASE_AUTH_SIGN_UP,
  FIREBASE_BASE_URL,
} from '../../../constant';
import { gotoHome } from '../../navigation';

export const authRequest = () => ({
  type: actionTypes.AUTH_REQUEST,
  payload: {
    loading: true,
  },
});

export const authSuccess = data => ({
  type: actionTypes.AUTH_SUCCESS,
  payload: {
    loading: false,
    detail: data,
    success: true,
    error: '',
  },
});

export const authFailure = err => ({
  type: actionTypes.AUTH_FAILED,
  payload: {
    loading: false,
    error: err,
    success: false,
  },
});

const tryAuth = (userData, endPoint) => (dispatch) => {
  dispatch(authRequest());
  fetch(`${endPoint}`, {
    method: 'POST',
    body: JSON.stringify({ ...userData, returnSecureToken: true }),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(res => res.json()).then((data) => {
    if (!data.idToken) {
      dispatch(authFailure(AUTH_ERRORS[data.error.message]));
    } else {
      dispatch(authSuccess(data));
      gotoHome();
    }
  }).catch(() => {
    dispatch(authFailure('Something went wrong trying to sign you up'));
  });
};

export const auth = (user, type) => {
  switch (type) {
    case 'login':
      return tryAuth(user, FIREBASE_AUTH_SIGN_IN);
    case 'register':
      return tryAuth(user, FIREBASE_AUTH_SIGN_UP);
    default:
      throw new Error('Invalid action selected');
  }
};

export const register = () => {
  const user = {
    user: 'Daniel Uche',
    email: 'dank.uche@yahoo.com',
  };
  fetch(`${FIREBASE_BASE_URL}/todos.json`, {
    method: 'POST',
    body: JSON.stringify(user),
  }).then(res => res.json())
    .then(data => data).catch(err => err);
};

export const authGetToken = () => (dispatch, getState) => {
  const promise = new Promise((resolve, reject) => {
    const token = getState().Auth.detail.idToken;
    if (!token) {
      reject();
    } else {
      resolve(token);
    }
  });
  return promise;
};