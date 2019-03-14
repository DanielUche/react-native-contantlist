import Config from 'react-native-config';

const pages = {};
pages.sign_up = {
  page: 'sign-up',
  name: 'contactlist.SignUpScreen',
  id: 'SignUpScreen',
};
pages.sign_in = {
  page: 'sign-in',
  name: 'contactlist.SignInScreen',
  id: 'SignInScreen',
};
pages.home = {
  page: 'home',
  name: 'contactlist.HomeScreen',
  id: 'HomeScreen',
};
pages.start = {
  page: 'start',
  name: 'contactlist.StartScreen',
  id: 'StartScreen',
};
pages.menu = {
  page: 'menu',
  name: 'contactlist.MenuDrawer',
  id: 'MenuDrawer',
};

export const APP_PAGES = pages;

const { FIREBASE_AUTH_API_KEY } = Config;

export const FIREBASE_BASE_URL = 'https://contactlist-209a9.firebaseio.com';
export const FIREBASE_AUTH_SIGN_IN = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${FIREBASE_AUTH_API_KEY}`;
export const FIREBASE_AUTH_SIGN_UP = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=${FIREBASE_AUTH_API_KEY}`;
export const FIREBASE_REFRESH_TOKEN = `https://securetoken.googleapis.com/v1/token?key=${FIREBASE_AUTH_API_KEY}`;


export const AUTH_ERRORS = {
  DEFAULT: 'Something went wrong ',
  EMAIL_EXISTS: 'The email address is already in use by another account.',
  OPERATION_NOT_ALLOWED: 'Password sign-in is disabled for this project.',
  TOO_MANY_ATTEMPTS_TRY_LATER: 'To many attempts. Try again later',
  EMAIL_NOT_FOUND: 'There is no user record corresponding to this identifier. The user may have been deleted.',
  INVALID_PASSWORD: 'The password is invalid or the user does not have a password.',
  USER_DISABLED: 'The user account has been disabled by an administrator.',
  TOKEN_EXPIRED: 'The user\'s credential is no longer valid. The user must sign in again.',
  USER_NOT_FOUND: 'The user corresponding to the refresh token was not found. It is likely the user was deleted.',
  INVALID_REFRESH_TOKEN: 'An invalid refresh token is provided.',
  INVALID_GRANT_TYPE: 'The grant type specified is invalid.',
  MISSING_REFRESH_TOKEN: 'No refresh token provided.',
};

export const colour = {
  primaryColor: '',
};
