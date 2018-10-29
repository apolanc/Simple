import React, { Component, Fragment } from "react";
import ReactRouterPropTypes from "react-router-prop-types";

import {
  SalesEstimate,
  CurrentProcessing,
  PaymentMethods
} from "../components";
import { formWrapper } from "../../../common";

class ProcessingRequirements extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: []
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleNext() {
    const { history } = this.props;
    history.push("/dashboard/business-information");
  }

  handleChange(value, fieldName = "") {
    this.setState({
      [fieldName]: value
    });
  }

  render() {
    const { tags } = this.state;
    return (
      <Fragment>
        <SalesEstimate />
        <CurrentProcessing handleChange={this.handleChange} tags={tags} />
        <PaymentMethods />
      </Fragment>
    );
  }
}

ProcessingRequirements.propTypes = {
  history: ReactRouterPropTypes.history.isRequired
};

export default formWrapper(ProcessingRequirements);
