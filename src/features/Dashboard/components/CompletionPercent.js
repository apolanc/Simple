import React from "react";
import Proptypes from "prop-types";

const logo = "/assets/logo.png";

const CompletionPercent = ({ onContinue }) => (
  <div className="completion-container">
    <div className="completion-logo-container">
      <img src={logo} className="completion-logo" alt="logo" />
    </div>
    <h3 style={{ textAlign: "center", fontWeight: "bold", margin: 20 }}>
      MERCHANT APPLICATION
    </h3>
    <div className="completion-checkpoints-container">
      <ul className="completion-checkpoints">
        <li className="completion-checkpoints-item">
          <i className="far fa-check-circle fa-fw check" />
          Processing Requirements
        </li>
        <li className="completion-checkpoints-item">
          <i className="far fa-check-circle fa-fw check" />
          Business Information
        </li>
        <li className="completion-checkpoints-item">
          <i className="far fa-check-circle fa-fw check" />
          Business References
        </li>
        <li className="completion-checkpoints-item">
          <i className="far fa-check-circle fa-fw check-disabled" />
          Ownership Information
        </li>
        <li className="completion-checkpoints-item">
          <i className="far fa-check-circle fa-fw check-disabled" />
          Compliance Review
        </li>
        <li className="completion-checkpoints-item">
          <i className="far fa-check-circle fa-fw check-disabled" />
          Provide Statements
        </li>
      </ul>
    </div>
    <div className="completion-info">
      <p>
        You are 20% complete with your application. Select Continue to start
        where you left off or you can review items by selecting the option
        above.
      </p>
    </div>
    <div className="completion-button-container">
      <button
        type="button"
        className="completion-button"
        onClick={() => onContinue()}
      >
        Continue
      </button>
    </div>
  </div>
);

CompletionPercent.propTypes = {
  onContinue: Proptypes.func.isRequired
};

export default CompletionPercent;
