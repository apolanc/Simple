import React, { Component } from "react";
import { Card, Grid, Row } from "../../../common";
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
      <div className="content">
        <Grid fluid>
          <Row>
            <div className="col-md-6 offset-md-3">
              <Card
                title="Business Information"
                content={<CardContent />}
                footerContent={footerContent()}
              />
            </div>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default BusinessInformation;
