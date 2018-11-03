import React from "react";
import Proptypes from "prop-types";
import IconToggle from "./IconToggle";

const logo = "/assets/logo.png";

const CompletionPercent = ({ onContinue, onIconToggle }) => (
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
          <IconToggle
            name="Processing Requirements"
            onIconToggle={onIconToggle}
          />
        </li>
        <li className="completion-checkpoints-item">
          <IconToggle name="Business Information" onIconToggle={onIconToggle} />
        </li>
        <li className="completion-checkpoints-item">
          <IconToggle name="Business References" onIconToggle={onIconToggle} />
        </li>
        <li className="completion-checkpoints-item">
          <IconToggle
            name="Ownership Information"
            onIconToggle={onIconToggle}
          />
        </li>
        <li className="completion-checkpoints-item">
          <IconToggle name="Compliance Review" onIconToggle={onIconToggle} />
        </li>
        <li className="completion-checkpoints-item">
          <IconToggle name="Provide Statements" onIconToggle={onIconToggle} />
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

CompletionPercent.defaultProps = {
  onIconToggle: () => {}
};

CompletionPercent.propTypes = {
  onContinue: Proptypes.func.isRequired,
  onIconToggle: Proptypes.func
};

export default CompletionPercent;
