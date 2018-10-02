import React from "react";
import { Link } from "react-router-dom";

const LoginForm = () => (
  <form className="form">
    <div className="logo-img">
      <img src="/assets/logo.png" alt="logo_img" />
    </div>
    <div className="form-content">
      <input type="text" className="user" placeholder="USERNAME" />
      <input type="password" className="pass" placeholder="PASSWORD" />
      <br />
      <div className="forgot-passw">
        <Link to="/forgot-password">Forgot Password?</Link>
      </div>
      <div className="btn-div">
        <button type="button" className="submit-btn">
          LOGIN
        </button>
      </div>
      <br />
      <div className="register-link">
        Dont have an account?
        <Link to="/register">Sign up</Link>
      </div>
    </div>
  </form>
);

export default LoginForm;
