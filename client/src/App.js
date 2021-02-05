import { Route, Switch } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import SignUp from './components/SignUp/SignUp';
import SignIn from './components/SignIn/SignIn';
import Profile from './components/Profile/Profile';
import LandingPage from './components/LandingPage/LandingPage';

const App = () => {
  return (
    <div className="App">
      <Layout>
        <Switch>
        <Route exact path="/">
            <LandingPage />
          </Route>

          <Route exact path="/signup">
            <SignUp />
          </Route>

          <Route exact path="/signin">
            <SignIn />
          </Route>

          <Route exact path="/profile">
            <Profile />
          </Route>

          <Route path="/:id">
            <p>This text will render for any route other than those defined above</p>
          </Route>
        </Switch>
      </Layout>
    </div>
  );
};

export default App;
