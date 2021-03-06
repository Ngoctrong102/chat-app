import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import './App.css';
import Navigator from './containers/navigator/navigator'
import Conversation from './containers/conversation/conversation';
import LoginPage from './containers/user/LoginPage/LoginPage';

var isLogedIn = false;
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {isLogedIn ?
            <div className="app">
              <Navigator />
              <Conversation />
            </div>
            :
            <Redirect to="/login" />
          }

        </Route>
        <Route path="/login">
          {isLogedIn ?
            <Redirect to="/" />
            :
            <LoginPage />
          }
        </Route>
      </Switch>

    </Router>
  );
}

export default App;
