import { useState, useRef } from 'react';
import { connect } from 'react-redux';

import './LoginForm.scss';

//actions
import { handleLogin } from '../../store/actions/auth';
import { Link } from 'react-router-dom';

const LoginForm = ({ handleLogin }) => {
  var [username, setUsername] = useState('');
  var [password, setPassword] = useState('');

  const handleSubmitForm = (e) => {
    e.preventDefault();
    handleLogin(username, password);
  }
  return (
    <div className="login-wrapper">
      <div className="logo"><svg x="0px" y="0px" width="612px" height="612px" viewBox="0 0 612 612"><g><g id="_x32__26_"><g><path d="M401.625,325.125h-191.25c-10.557,0-19.125,8.568-19.125,19.125s8.568,19.125,19.125,19.125h191.25                                     c10.557,0,19.125-8.568,19.125-19.125S412.182,325.125,401.625,325.125z M439.875,210.375h-267.75                                     c-10.557,0-19.125,8.568-19.125,19.125s8.568,19.125,19.125,19.125h267.75c10.557,0,19.125-8.568,19.125-19.125                                     S450.432,210.375,439.875,210.375z M306,0C137.012,0,0,119.875,0,267.75c0,84.514,44.848,159.751,114.75,208.826V612                                     l134.047-81.339c18.552,3.061,37.638,4.839,57.203,4.839c169.008,0,306-119.875,306-267.75C612,119.875,475.008,0,306,0z                                     M306,497.25c-22.338,0-43.911-2.601-64.643-7.019l-90.041,54.123l1.205-88.701C83.5,414.133,38.25,345.513,38.25,267.75                                     c0-126.741,119.875-229.5,267.75-229.5c147.875,0,267.75,102.759,267.75,229.5S453.875,497.25,306,497.25z"></path></g></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg></div>
      <h5>Sign in</h5>
      <form className="login-form" onSubmit={handleSubmitForm}>
        <div className="form-group">
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Username or email"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group flex">
          <div className="checkbox">
            <input type="checkbox" name="rememberme" id="rememberme" />
            <label htmlFor="rememberme">
              Remember me
            </label>
          </div>
          <a href="#" className="link">Reset password</a>
        </div>
        <div className="form-group">
          <input type="submit" value="Sign in" />
        </div>
        <hr />
        <div className="sign-up-tag">
          <p>Don't have an account?</p>
          <Link to="/signup" className="link">Sign up</Link>
        </div>
      </form>
    </div>
  )
}

function mapDispatchToProps(dispatch) {
  return {
    handleLogin: (username, password) => dispatch(handleLogin(username, password))
  }
}

export default connect(null, mapDispatchToProps)(LoginForm);