import React from "react";
import PropTypes from "prop-types";

const AuthFormContent = ({ children }) => (
  <form className="login-form">
    <div className="logo-img">
      <img src="/assets/logo.png" alt="logo_img" />
    </div>
    <div className="login-form-content">{children}</div>
  </form>
);

AuthFormContent.defaultProps = {
  children: () => {}
};

AuthFormContent.propTypes = {
  children: PropTypes.element
};

export default AuthFormContent;
