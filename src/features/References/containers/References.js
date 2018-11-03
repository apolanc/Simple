import React, { Component, Fragment } from "react";
import ReactRouterPropTypes from "react-router-prop-types";

import { formWrapper } from "../../../common";
import BankReferences from "./BankReferences";
import BusinessReferences from "./BusinessReferences";

class References extends Component {
  constructor(props) {
    super(props);
    this.addReference = this.addReference.bind(this);
  }

  handleBack() {
    const { history } = this.props;
    history.push("/dashboard/business-information");
  }

  handleNext() {
    const { history } = this.props;
    history.push("/dashboard/owners");
  }

  addReference() {
    this.window.alert("adding a ref!");
  }

  render() {
    return (
      <Fragment>
        <hr />
        <BusinessReferences />
        <BankReferences />
      </Fragment>
    );
  }
}

References.propTypes = {
  history: ReactRouterPropTypes.history.isRequired
};

export default formWrapper(References);
