import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const LoginForm = () => (
  <Fragment>
    <input type="text" className="user" placeholder="Username" />
    <input type="password" className="pass" placeholder="Password" />
    <div className="forgot-passw">
      <Link to="/forgot-password">Forgot Password?</Link>
    </div>
    <div className="btn-div">
      <button type="button" className="submit-btn">
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

export default LoginForm;
