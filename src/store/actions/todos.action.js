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
  dispatch(authGetToken()).then((token) => {
    dispatch(getTodosRequest());
    return fetch(`${FIREBASE_BASE_URL}/todos.json?auth=${token}`)
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

export const addTodo = () => (dispatch) => {

};
