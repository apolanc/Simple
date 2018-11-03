import React from "react";
import PropTypes from "prop-types";

const IconToggle = ({ name, onIconToggle, disabled }) => (
  <React.Fragment>
    <i
      className={`far fa-check-circle fa-fw ${
        disabled ? "check-disabled" : "check"
      }`}
      id={name}
      onClick={onIconToggle}
      onKeyDown={() => {}}
      role="presentation"
    />
    {name}
  </React.Fragment>
);

IconToggle.defaultProps = {
  onIconToggle: () => {},
  disabled: false
};

IconToggle.propTypes = {
  name: PropTypes.string.isRequired,
  onIconToggle: PropTypes.func,
  disabled: PropTypes.bool
};

export default IconToggle;
