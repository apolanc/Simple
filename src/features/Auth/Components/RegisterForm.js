import React from "react";
import { Link } from "react-router-dom";

const RegisterForm = () => (
  <form className="form">
    <h1 className="title">Payvida</h1>
    <div className="form-content">
      <input type="text" className="user" placeholder="USERNAME" />
      <input type="password" className="pass" placeholder="PASSWORD" />
      <br />
      <div className="btn-div">
        <button type="button" className="submit-btn">
          REGISTER
        </button>
      </div>
      <br />
      <div className="register-link">
        Already a member?
        <Link to="/login">Sign in</Link>
      </div>
    </div>
  </form>
);

export default RegisterForm;
