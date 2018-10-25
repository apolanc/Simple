import React, { Component } from "react";
import { Card } from "../../../common";
import {
  ExemptionForm,
  SalesInfoForm,
  ContactInfoForm,
  FirstBusinessInfoForm
} from "../components";

const CardContent = () => (
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

const footerContent = () => (
  <button type="button" className="btn btn-primary float-right">
    Next
  </button>
);

class BusinessInformation extends Component {
  componentDidMount() {}

  render() {
    return (
      <Card
        title="Business Information"
        content={<CardContent />}
        footerContent={footerContent()}
      />
    );
  }
}

export default BusinessInformation;
