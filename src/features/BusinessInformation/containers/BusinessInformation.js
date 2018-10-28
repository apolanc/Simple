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

    this.state = {};
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleBack() {
    const { history } = this.props;
    history.push("/dashboard/processing-requirements");
  }

  handleInputChange(key, name, value) {
    const obj = this.state[key]; // eslint-disable-line react/destructuring-assignment

    this.setState({
      [key]: { ...obj, [name]: value }
    });
  }

  render() {
    const { corporate } = this.state;

    console.log(this.state);

    return (
      <form>
        <hr />
        <FirstBusinessInfoForm />
        <hr />
        <ContactInfoForm
          type="corporate"
          handleInputChange={this.handleInputChange}
        />
        {corporate &&
          corporate.showDBAAddressForm && (
            <Fragment>
              <hr />
              <ContactInfoForm handleInputChange={this.handleInputChange} />
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
