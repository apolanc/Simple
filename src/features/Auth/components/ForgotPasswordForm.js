import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const ForgotPasswordForm = () => (
  <Fragment>
    <input type="text" name="forgot_username" placeholder="Username" />
    <div className="btn-div">
      <button type="button" className="submit-btn">
        Send Email
      </button>
    </div>
    <br />
    <div className="register-link">
      <Link to="/login">Sign in</Link>
    </div>
  </Fragment>
);

export default ForgotPasswordForm;
