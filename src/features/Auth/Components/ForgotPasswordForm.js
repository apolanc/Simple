import React from "react";
import { Link } from "react-router-dom";

const ForgotPasswordForm = () => (
  <form className="form">
    <input type="text" name="forgot_username" />
    <div className="btn-div">
      <button type="button" className="submit-btn">
        LOGIN
      </button>
    </div>
    <div className="register-link">
      <Link to="/login">Sign in</Link>
    </div>
  </form>
);

export default ForgotPasswordForm;
