import React, { Component } from "react";
import PropTypes from "prop-types";

import { PRequirementsForm, PRequirementsSlider } from "../components";

class ProcessingRequirements extends Component {
  componentDidMount() {}

  redirectAndSave(evt = {}, name) {
    const { onComponentRedirect } = this.props;
    onComponentRedirect(evt, name);
  }

  render() {
    return (
      <div className="requirements-container">
        <div className="requirements-form-container">
          <PRequirementsForm />
        </div>
        <div className="requirements-slider-container">
          <PRequirementsSlider />
        </div>
        <footer className="forms-button-container">
          <button
            type="button"
            className="forms-button"
            onClick={e => this.redirectAndSave(e, "Business Information")}
          >
            Next
          </button>
        </footer>
      </div>
    );
  }
}

ProcessingRequirements.defaultProps = {
  onComponentRedirect: () => {}
};

ProcessingRequirements.propTypes = {
  onComponentRedirect: PropTypes.func
};

export default ProcessingRequirements;
