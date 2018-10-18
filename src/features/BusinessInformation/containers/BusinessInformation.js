import React, { Component } from "react";
import { FirstBusinessInfoForm, CompanyAddressForm } from "../components";

class BusinessInformation extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="business-info-container">
        <div className="business-info-form-container">
          <FirstBusinessInfoForm />
        </div>
      </div>
    );
  }
}

export default BusinessInformation;
