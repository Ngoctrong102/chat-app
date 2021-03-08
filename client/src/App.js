import { useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import './App.css';
// component
import Navigator from './containers/navigator/navigator'
import Conversation from './containers/conversation/conversation';
import LoginPage from './containers/auth/LoginPage/LoginPage';
import SignUpPage from './containers/auth/SignUp/SignUpPage';
//actions
import { fetchUserInfor } from './store/actions/auth';

function App({ user, fetchUserInfor }) {
  useEffect(() => {
    if (!user) {
      const token = localStorage.getItem('token');
      if (token)
        fetchUserInfor(token);
    }
  }, [])
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {user ?
            <div className="app">
              <Navigator />
              <Conversation />
            </div>
            :
            <Redirect to="/login" />
          }
        </Route>
        <Route path="/login">
          {user ?
            <Redirect to="/" />
            :
            <LoginPage />
          }
        </Route>
        <Route path="/signup">
          <SignUpPage />
        </Route>
      </Switch>

    </Router>
  );
}

function mapStateToProps(state) {
  return {
    user: state.authState.user
  }
}
function mapDispatchToProps(dispatch) {
  return {
    fetchUserInfor: (token) => dispatch(fetchUserInfor(token))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
