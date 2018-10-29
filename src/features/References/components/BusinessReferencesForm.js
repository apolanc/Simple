import React from "react";

import { Row, FormGroup } from "../../../common";

const BusinessReferencesForm = () => (
  <form>
    <Row>
      <div className="col-sm-12 col-md-12 col-lg-12">
        <FormGroup>
          <label htmlFor="test">Company Name</label>
          <input className="form-control" name="test" />
        </FormGroup>
      </div>

      <div className="col-sm-12 col-md-12 col-lg-12">
        <FormGroup>
          <label htmlFor="test">Contact Full Name</label>
          <input className="form-control" name="test" />
        </FormGroup>
      </div>

      <div className="col-sm-12 col-md-12 col-lg-6">
        <FormGroup>
          <label htmlFor="test">Email</label>
          <input className="form-control" name="test" />
        </FormGroup>
      </div>

      <div className="col-sm-12 col-md-12 col-lg-6">
        <FormGroup>
          <label htmlFor="test">Mobile Phone</label>
          <input className="form-control" name="test" />
        </FormGroup>
      </div>

      <div className="col-sm-12 col-md-12 col-lg-12">
        <FormGroup>
          <label htmlFor="test">Street Address</label>
          <input className="form-control" name="test" />
        </FormGroup>
      </div>

      <div className="col-sm-12 col-md-12 col-lg-6">
        <FormGroup>
          <label htmlFor="test">Country</label>
          <input className="form-control" name="test" />
        </FormGroup>
      </div>

      <div className="col-sm-12 col-md-12 col-lg-6">
        <FormGroup>
          <label htmlFor="test">State/Region</label>
          <input className="form-control" name="test" />
        </FormGroup>
      </div>

      <div className="col-sm-12 col-md-12 col-lg-6">
        <FormGroup>
          <label htmlFor="test">City</label>
          <input className="form-control" name="test" />
        </FormGroup>
      </div>

      <div className="col-sm-12 col-md-12 col-lg-6">
        <FormGroup>
          <label htmlFor="test">Zip/Postal Code</label>
          <input className="form-control" name="test" />
        </FormGroup>
      </div>
    </Row>
  </form>
);

export default BusinessReferencesForm;
