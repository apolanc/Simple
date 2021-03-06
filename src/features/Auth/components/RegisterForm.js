import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const RegisterForm = () => (
  <Fragment>
    <input type="text" className="auth-input" placeholder="EMAIL" />
    <input type="text" className="auth-input" placeholder="FIRSTNAME" />
    <input type="text" className="auth-input" placeholder="LASTNAME" />
    <input type="password" className="auth-input" placeholder="PASSWORD" />
    <br />
    <div className="btn-div">
      <button type="button" className="submit-btn">
        Register
      </button>
    </div>
    <br />
    <div className="register-link">
      Already a member?
      <Link to="/login">Sign in</Link>
    </div>
  </Fragment>
);

export default RegisterForm;
