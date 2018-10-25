import React, { Component } from "react";
import ReactRouterPropTypes from "react-router-prop-types";

import { formWrapper } from "../../../common";
import {
  ExemptionForm,
  SalesInfoForm,
  ContactInfoForm,
  FirstBusinessInfoForm
} from "../components";

class BusinessInformation extends Component {
  handleBack() {
    const { history } = this.props;
    history.push("/dashboard/processing-requirements");
  }

  render() {
    return (
      <form>
        <hr />
        <FirstBusinessInfoForm />
        <hr />
        <ContactInfoForm type="corporate" />
        <hr />
        <SalesInfoForm />
        <hr />
        <ExemptionForm />
      </form>
    );
  }
}

BusinessInformation.propTypes = {
  history: ReactRouterPropTypes.history.isRequired
};

export default formWrapper(BusinessInformation);
