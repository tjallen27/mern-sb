# Boilerplate React-Redux-Storybook-Mongo App

This project is a show-off project. These are things it uses:

Front-End

- React.js for component based app development
- Redux for global state management
- Storybook for component design and documentation
- Firebase for User Authentication
- Styled Components
- React-Testing-Library (coming soon)
- Persistant data (coming soon)

Back-End

- Express.js API
- Mongoose for db schema

## Run the app

Clone the app and run `npm i` then `npm run dev`.
This uses concurrent mode to run the client and the server at the same time.

### Test Log In

- username: `test@email.com`
- password: `password`

## Run Storybook

First make sure you are in the client directory, then run `npm run storybook`

<img src="./client/public/assets/screenshot.png" alt="Screen Shot" />

### Redux set-up

Action creator example:

```
import { AUTH_SIGN_UP } from './types';

export const authSignUp = (user) => {
  return (dispatch) => {
    dispatch({ type: AUTH_SIGN_UP, payload: user });
  };
};
```

Reducer example:

```
export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case AUTH_SIGN_UP: {
      return { ...state, currentUser: action.payload };
    }
    default:
      return state;
  }
}
```

### Using within components

Actions are dispatched in components using Redux hooks.

```
import React from 'react'
import { useDispatch } from 'react-redux'

export const CounterComponent = ({ value }) => {
  const dispatch = useDispatch()

  return (
    <div>
      <span>{value}</span>
      <button onClick={() => dispatch({ type: 'increment-counter' })}>
        Increment counter
      </button>
    </div>
  )
}
```

And Redux is accessed with useSelector(state => state.object)

```
import React from 'react'
import { useSelector } from 'react-redux'

export const CounterComponent = () => {
  const counter = useSelector(state => state.counter)
  return <div>{counter}</div>
}
```

## React Hook Forms

This boiler plate uses react-hook-forms for handling form validation.
