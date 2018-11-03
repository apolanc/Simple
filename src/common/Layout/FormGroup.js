import React from "react";
import PropTypes from "prop-types";

const FormGroup = ({ children }) => (
  <div className="form-group">{children}</div>
);

FormGroup.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default FormGroup;