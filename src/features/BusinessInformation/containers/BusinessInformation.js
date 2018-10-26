import React, { Component, Fragment } from "react";
import ReactRouterPropTypes from "react-router-prop-types";

import { formWrapper } from "../../../common";
import {
  ExemptionForm,
  SalesInfoForm,
  ContactInfoForm,
  FirstBusinessInfoForm
} from "../components";

class BusinessInformation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showDBAAddressForm: true
    };

    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
  }

  handleBack() {
    const { history } = this.props;
    history.push("/dashboard/processing-requirements");
  }

  handleCheckboxChange() {
    const { showDBAAddressForm } = this.state;
    this.setState({ showDBAAddressForm: !showDBAAddressForm });
  }

  render() {
    const { showDBAAddressForm } = this.state;

    return (
      <form>
        <hr />
        <FirstBusinessInfoForm />
        <hr />
        <ContactInfoForm
          type="corporate"
          handleCheckboxChange={this.handleCheckboxChange}
        />
        {showDBAAddressForm && (
          <Fragment>
            <hr />
            <ContactInfoForm />
          </Fragment>
        )}
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
