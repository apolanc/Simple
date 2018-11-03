import React from "react";
import PropTypes from "prop-types";

const Card = ({ title, content, footerContent }) => (
  <div className="card">
    <div className="header">
      <h4 className="title">{title}</h4>
    </div>
    <div className="content">{content}</div>
    <div className="footer">{footerContent}</div>
  </div>
);

Card.defaultProps = {
  title: "",
  footerContent: undefined
};

Card.propTypes = {
  title: PropTypes.string,
  content: PropTypes.element.isRequired,
  footerContent: PropTypes.element
};

export default Card;
