import React from "react";
import PropTypes from "prop-types";

const AuthFormContainer = ({ children }) => (
  <div className="login-form-container">{children}</div>
);

AuthFormContainer.defaultProps = {
  children: () => {}
};

AuthFormContainer.propTypes = {
  children: PropTypes.element
};

export default AuthFormContainer;
