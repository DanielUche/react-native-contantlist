import * as actionTypes from '../action-types';
import {
  FIREBASE_BASE_URL,
} from '../../../constant';
import { authGetToken } from './auth.action';

const getTodosRequest = () => ({
  type: actionTypes.GET_TODO_REQUEST,
  payload: {
    loading: true,
  },
});

const getTodosSuccess = data => ({
  type: actionTypes.GET_TODO_SUCCESS,
  payload: {
    loading: false,
    todos: data,
  },
});

const getTodosFailure = err => ({
  type: actionTypes.GET_TODO_FAILED,
  payload: {
    loading: false,
    error: err,
  },
});

export const getTodos = () => (dispatch) => {
  dispatch(authGetToken()).then((auth) => {
    dispatch(getTodosRequest());
    return fetch(`${FIREBASE_BASE_URL}/todos.json?auth=${auth.idToken}`)
      .then(res => res.json())
      .then((data) => {
        dispatch(getTodosSuccess(data));
      }).catch((err) => {
        dispatch(getTodosFailure(err));
      });
  }).catch((err) => {
    window.alert(err);
  });
};

const addTodosRequest = () => ({
  type: actionTypes.ADD_TODO_REQUEST,
  payload: {
    loading: true,
  },
});

const addTodosSuccess = data => ({
  type: actionTypes.ADD_TODO_SUCCESS,
  payload: {
    loading: false,
    todo: data,
  },
});

const addTodosFailure = err => ({
  type: actionTypes.ADD_TODO_FAILED,
  payload: {
    loading: false,
    error: err,
  },
});

export const addTodo = () => (dispatch) => {
  const user = {
    user: 'Daniel Uche P',
    email: 'woe@yahoo.com',
  };
  dispatch(authGetToken()).then((token) => {
    dispatch(addTodosRequest());
    fetch(`${FIREBASE_BASE_URL}/todos.json?auth=${token}`, {
      method: 'POST',
      body: JSON.stringify(user),
    }).then(res => res.json())
      .then(data => dispatch(addTodosSuccess(data)))
      .catch(err => dispatch(addTodosFailure(err)));
  });
};
