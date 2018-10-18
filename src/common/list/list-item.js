import React from "react";
import propTypes from "prop-types";

const ListItem = ({ title, desc, extra, onClick }) => (
  <span
    aria-hidden
    role="button"
    onClick={onClick}
    style={{ cursor: "pointer" }}
    className="list-group-item list-group-item-action flex-column align-items-start"
  >
    <div className="w-100">
      <h5 className="mb-1">{title}</h5>
    </div>
    <p className="mb-1">{desc}</p>
    <small>{extra}</small>
  </span>
);

ListItem.propTypes = {
  title: propTypes.oneOfType([propTypes.string, propTypes.element]).isRequired,
  desc: propTypes.oneOfType([propTypes.string, propTypes.element]),
  extra: propTypes.string,
  onClick: propTypes.func
};

ListItem.defaultProps = {
  desc: "",
  extra: "",
  onClick: () => undefined
};

export default ListItem;
