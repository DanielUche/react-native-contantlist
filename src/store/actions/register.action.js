import { Alert } from 'react-native';
import * as actionTypes from '../action-types';

const FIREBASE_AUTH_API_KEY = 'AIzaSyA7CuG9ddP5_jzbw6Tj_Zs4x_tyXg_aJPk';

export const register = () => (dispatch) => {
  const user = {
    user: 'Daniel Uche',
    email: 'dank.uche@yahoo.com',
  };
  fetch('https://contactlist-209a9.firebaseio.com/users.json', {
    method: 'POST',
    body: JSON.stringify({ user }),
  }).then(res => res.json())
    .then((data) => {
      console.log(data);
    }).catch((err) => {
      console.log(err);
    });
};

export const signUpRequest = () => ({
  type: actionTypes.REGISTRATION_REQUEST,
  payload: {
    loading: true,
  },
});

export const signUpSuccess = () => ({
  type: actionTypes.REGISTRATION_SUCCESS,
  payload: {
    loading: false,
  },
});

export const signUpFailure = err => ({
  loading: false,
  error: err,
});

export const signUpNewUser = userData => (dispatch) => {
  console.log(userData);
  console.log('i did this');
  dispatch(signUpRequest());
  fetch(`https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=${FIREBASE_AUTH_API_KEY}`, {
    method: 'POST',
    body: JSON.stringify({ ...userData, returnSecureToken: true }),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(res => res.json()).then((data) => {
    dispatch(signUpSuccess());
    console.log(data);
  }).catch((err) => {
    dispatch(signUpFailure('sdkhkskjklsjldsjlsjsd'));
    Alert.alert('Something went wrong trying to sign you up');
  });
};

export const login = loginData => (dispatch) => {
  fetch(`https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=${FIREBASE_AUTH_API_KEY}`, {
    method: 'POST',
    body: loginData,
  }).then(res => res.json()).then(data => data).catch((err) => {
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
