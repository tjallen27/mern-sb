import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { auth } from '../../firebase';

import { NavigationWrapper, List, ListItem } from './styles';
import { authSignOut } from '../../actions/auth';

const Navigation = (props) => {
  const user = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    auth.signOut().then(() => {
      dispatch(authSignOut());
      props.history.push('/');
    });
  };

  return (
    <NavigationWrapper>
      <List>
        {!user.isLoggedIn && (
          <ListItem>
            <Link to="/signup">Sign Up</Link>
          </ListItem>
        )}

        {!user.isLoggedIn && (
          <ListItem>
            <Link to="/signin">Sign In</Link>
          </ListItem>
        )}

        {user.isLoggedIn && (
          <ListItem>
            <Link to="/profile">Profile</Link>
          </ListItem>
        )}

        {user.isLoggedIn && (
          <ListItem>
            <button onClick={() => handleSignOut()}>Sign Out</button>
          </ListItem>
        )}
      </List>
    </NavigationWrapper>
  );
};

export default withRouter(Navigation);
