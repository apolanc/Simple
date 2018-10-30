import React, { Component, Fragment } from "react";
import ReactRouterPropTypes from "react-router-prop-types";

import { formWrapper } from "../../../common";
import { contactDefaultProps } from "../../../types";
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
      contact: contactDefaultProps,
      dbaContact: contactDefaultProps
    };

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
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

  handleFormSubmit(e) {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    const { contact, dbaContact } = this.state;

    return (
      <form onSubmit={this.handleFormSubmit}>
        <hr />
        <FirstBusinessInfoForm />
        <hr />
        <ContactInfoForm
          type="contact"
          model={contact}
          handleInputChange={this.handleInputChange}
        />
        {(!contact || !contact.hideDBAAddressForm) && (
          <Fragment>
            <hr />
            <ContactInfoForm
              model={dbaContact}
              handleInputChange={this.handleInputChange}
            />
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
