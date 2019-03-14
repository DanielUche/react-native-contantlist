import { AsyncStorage } from 'react-native';
import * as actionTypes from '../action-types';
import {
  AUTH_ERRORS,
  FIREBASE_AUTH_SIGN_IN,
  FIREBASE_AUTH_SIGN_UP,
  FIREBASE_REFRESH_TOKEN,
} from '../../../constant';
import { gotoHome } from '../../navigation';


export const manageAuthData = async (type, authData = null) => {
  let expireDate;
  switch (type) {
    case 'save':
      expireDate = new Date().getTime() + (authData.expiresIn * 1000);
      await AsyncStorage.setItem('auth:token', authData.idToken);
      await AsyncStorage.setItem('auth:token:expiresIn', expireDate.toString());
      await AsyncStorage.setItem('auth:token:refreshToken', authData.refreshToken);
      break;
    case 'clear':
      await AsyncStorage.multiRemove(['auth:token', 'auth:token:expiresIn']);
      break;
    default:
      throw new Error('Should not be reached');
  }
};

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
  }).then(res => res.json()).then(async (data) => {
    if (!data.idToken) {
      dispatch(authFailure(AUTH_ERRORS[data.error.message] || AUTH_ERRORS.DEFAULT));
    } else {
      manageAuthData('save', {
        ...data,
      });
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

export const authGetToken = () => (dispatch, getState) => {
  const promise = new Promise(
    async (resolve, reject) => {
      const token = getState().Auth.detail.idToken;
      if (!token) {
        await AsyncStorage.getItem('auth:token').then(async (dbToken) => {
          if (dbToken) {
            await AsyncStorage.getItem('auth:token:expiresIn').then((expiry) => {
              const expiresIn = Date.parse(expiry);
              if (expiresIn > new Date()) {
                resolve(dbToken);
              } else {
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
                        manageAuthData('save', {
                          expiresIn: res.expires_in,
                          refreshToken: res.refresh_token,
                          idToken: res.id_token,
                        });
                      } else {
                        manageAuthData('clear');
                        reject(new Error(AUTH_ERRORS[res.error.message] || AUTH_ERRORS.DEFAULT));
                      }
                    })
                    .catch((err) => {
                      manageAuthData('clear');
                      reject(new Error(err.message));
                    })).catch(() => {
                    reject(new Error('Your Session has expired'));
                  });
              }
            });
          } else {
            reject(new Error('Failed to fetch token!'));
          }
        });
      }
    },
  );
  return promise;
};


export const autoSignIn = () => dispatch => dispatch(
  authGetToken(),
).then(() => {
  gotoHome();
}).catch((err) => {
  manageAuthData('clear');
  dispatch(authFailure(err.message));
});
