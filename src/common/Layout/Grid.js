import React from "react";
import PropTypes from "prop-types";

const Grid = ({ fluid, children }) => (
  <div className={fluid ? "container-fluid" : "container"}>{children}</div>
);

Grid.defaultProps = {
  fluid: false
};

Grid.propTypes = {
  fluid: PropTypes.bool,
  children: PropTypes.element.isRequired
};

export default Grid;
