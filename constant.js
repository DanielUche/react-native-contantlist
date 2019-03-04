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

const FIREBASE_AUTH_API_KEY = 'AIzaSyA7CuG9ddP5_jzbw6Tj_Zs4x_tyXg_aJPk';

export const FIREBASE_AUTH_SIGN_IN = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${FIREBASE_AUTH_API_KEY}`;
export const FIREBASE_AUTH_SIGN_UP = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=${FIREBASE_AUTH_API_KEY}`;

export const AUTH_ERRORS = {
  EMAIL_EXISTS: 'The email address is already in use by another account.',
  OPERATION_NOT_ALLOWED: 'Password sign-in is disabled for this project.',
  TOO_MANY_ATTEMPTS_TRY_LATER: 'To many attempts. Try again later',
  EMAIL_NOT_FOUND: 'There is no user record corresponding to this identifier. The user may have been deleted.',
  INVALID_PASSWORD: 'The password is invalid or the user does not have a password.',
  USER_DISABLED: 'The user account has been disabled by an administrator.',
};

export const colour = {
  primaryColor: '',
};
