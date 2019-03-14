import { AsyncStorage } from 'react-native';
import * as actionTypes from '../action-types';
import {
  AUTH_ERRORS,
  FIREBASE_AUTH_SIGN_IN,
  FIREBASE_AUTH_SIGN_UP,
  FIREBASE_REFRESH_TOKEN,
} from '../../../constant';
import { gotoHome, gotoSignIn } from '../../navigation';

export const manageLocalStorageAuthData = (type, authData = null) => {
  switch (type) {
    case 'save':
      return AsyncStorage.multiSet([
        ['auth:token', authData.idToken],
        ['auth:token:expiresIn', authData.expiresIn],
        ['auth:token:refreshToken', authData.refreshToken]]);
    case 'clear':
      return AsyncStorage.multiRemove(
        ['auth:token', 'auth:token:refreshToken', 'auth:token:expiresIn'],
      );
    default:
      throw new Error('Should not be reached');
  }
};

export const getRefreshToken = () => new Promise((resolve) => {
  AsyncStorage.getItem('auth:token:refreshToken')
    .then(refreshToken => fetch(FIREBASE_REFRESH_TOKEN, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `grant_type=refresh_token&refresh_token=${refreshToken}`,
    }).then(res => res.json())
      .then((res) => {
        if (res.id_token) {
          const authData = {
            // expiresIn: res.expires_in,
            expiresIn: '20',
            refreshToken: res.refresh_token,
            idToken: res.id_token,
          };
          manageLocalStorageAuthData('save', authData).then(() => {
            resolve(authData);
          });
        } else {
          throw new Error(AUTH_ERRORS[res.error.message] || AUTH_ERRORS.DEFAULT);
        }
      })
      .catch((err) => {
        throw new Error(err.message);
      })).catch(() => {
      throw new Error('Your Session has expired');
    });
});

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
    error: '',
  },
});

export const authFailure = err => ({
  type: actionTypes.AUTH_FAILED,
  payload: {
    loading: false,
    error: err,
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
  }).then(res => res.json()).then(async (data) => {
    if (!data.idToken) {
      dispatch(authFailure(AUTH_ERRORS[data.error.message] || AUTH_ERRORS.DEFAULT));
    } else {
      manageLocalStorageAuthData('save', {
        ...data, expiresIn: '20',
      }).then(() => {
        dispatch(authSuccess({ ...data, expiresIn: '20' }));
        gotoHome();
      });
    }
  }).catch(() => {
    dispatch(authFailure(AUTH_ERRORS.DEFAULT));
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

export const authGetToken = () => (dispatch, getState) => {
  const promise = new Promise(
    async (resolve, reject) => {
      const token = getState().Auth.detail.idToken;
      const expiryDate = getState().Auth.detail.expiresIn;
      if ((!token || expiryDate <= new Date())) {
        await AsyncStorage.getItem('auth:token').then(async (dbToken) => {
          if (dbToken) {
            await AsyncStorage.getItem('auth:token:expiresIn').then((expiry) => {
              const expiresIn = Date.parse(expiry);
              if (expiresIn > new Date()) {
                resolve({
                  idToken: dbToken,
                  // expiresIn: expiry,
                  expiresIn: 20,
                });
              } else {
                getRefreshToken().catch((err) => {
                  dispatch(authFailure(err.message));
                }).then((data) => {
                  resolve(data);
                });
              }
            });
          } else {
            reject(new Error('Failed to fetch token!'));
          }
        });
      } else {
        resolve(token);
      }
    },
  );
  return promise;
};

export const autoSignIn = () => dispatch => dispatch(
  authGetToken(),
).then((data) => {
  dispatch(authSuccess(data));
  gotoHome();
}).catch((err) => {
  dispatch(authFailure(err.message));
});

export const logoutSuccess = () => ({
  type: actionTypes.AUTH_LOGOUT,
  payload: {
    loading: false,
    detail: {},
    error: '',
  },
});

export const authLogout = () => (dispatch) => {
  manageLocalStorageAuthData('clear').then(() => {
    gotoSignIn();
    dispatch(logoutSuccess());
  });
};
