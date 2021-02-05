import { AUTH_SIGN_UP, AUTH_SIGN_OUT, AUTH_SIGN_IN } from '../actions/types';

const initialState = {
  currentUser: {},
  isLoggedIn: false,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case AUTH_SIGN_UP: {
      const { user } = action.payload;
      return { ...state, currentUser: user, isLoggedIn: true };
    }
    case AUTH_SIGN_OUT: {
      return { ...state, currentUser: {}, isLoggedIn: false };
    }
    case AUTH_SIGN_IN: {
      return { ...state, currentUser: action.payload, isLoggedIn: true };
    }
    default:
      return state;
  }
}
