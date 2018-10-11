import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const LoginForm = ({ authenticate }) => (
  <Fragment>
    <input className="auth-input" type="text" placeholder="Username" />
    <input className="auth-input" type="password" placeholder="Password" />
    <div className="forgot-passw">
      <Link to="/forgot-password">Forgot Password?</Link>
    </div>
    <div className="btn-div">
      <button
        type="button"
        className="submit-btn"
        onClick={() => authenticate()}
      >
        Login
      </button>
    </div>
    <br />
    <div className="register-link">
      Dont have an account?
      <Link to="/register">Sign up</Link>
    </div>
  </Fragment>
);

LoginForm.propTypes = {
  authenticate: PropTypes.func.isRequired
};

export default LoginForm;
