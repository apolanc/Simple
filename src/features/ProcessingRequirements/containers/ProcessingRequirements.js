import React, { Component } from "react";
import { PRequirementsForm, PRequirementsSlider } from "../components";
import "../Requirements.css";

export default class ProcessingRequirements extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="requirements-container">
        <div className="requirements-form-container">
          <PRequirementsForm />
        </div>
        <div className="requirements-slider-container">
          <PRequirementsSlider />
        </div>
        <div className="requirements-button-container">
          <button type="button" className="requirements-button">
            Next
          </button>
        </div>
      </div>
    );
  }
}
