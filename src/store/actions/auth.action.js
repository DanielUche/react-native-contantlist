import * as actionTypes from '../action-types';
import {
  AUTH_ERRORS,
  FIREBASE_AUTH_SIGN_IN,
  FIREBASE_AUTH_SIGN_UP,
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
  console.log(endPoint);
  dispatch(authRequest());
  fetch(`${endPoint}`, {
    method: 'POST',
    body: JSON.stringify({ ...userData, returnSecureToken: true }),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(res => res.json()).then((data) => {
    console.log(data);
    if (data.error) {
      dispatch(authFailure(AUTH_ERRORS[data.error.message]));
    } else {
      gotoHome();
      console.log('i entered here');
      dispatch(authSuccess(data));
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
  fetch('https://contactlist-209a9.firebaseio.com/users.json', {
    method: 'POST',
    body: JSON.stringify({ user }),
  }).then(res => res.json())
    .then(data => data).catch((err) => {
      console.log(err);
    });
};


export const getUsers = () => {
  fetch('https://contactlist-209a9.firebaseio.com/users.json')
    .then(res => res.json())
    .then((data) => {
      console.log(data);
    }).catch((err) => {
      console.log(err);
    });
};
