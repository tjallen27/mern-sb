import axios from 'axios';
import { AUTH_SIGN_UP, AUTH_SIGN_OUT, AUTH_SIGN_IN } from './types';

export const authSignUp = (user) => {
  return async (dispatch) => {
    const res = await axios.post('/api/users', { user });
    dispatch({ type: AUTH_SIGN_UP, payload: res.data });
  };
};

export const authSignOut = (user) => {
  return (dispatch) => {
    dispatch({ type: AUTH_SIGN_OUT, payload: user });
  };
};

export const authSignIn = (user) => {
  return (dispatch) => {
    dispatch({ type: AUTH_SIGN_IN, payload: user });
  };
};
