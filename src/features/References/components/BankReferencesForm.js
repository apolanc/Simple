import React from "react";

import { Row, FormGroup } from "../../../common";

const BankReferencesForm = () => (
  <form>
    <Row>
      <div className="col-sm-12 col-md-12 col-lg-12">
        <FormGroup>
          <label htmlFor="test">Bank Routing Number</label>
          <input className="form-control" name="test" />
        </FormGroup>
      </div>
      <div className="col-sm-12 col-md-12 col-lg-12">
        <FormGroup>
          <label htmlFor="test">Account #</label>
          <input className="form-control" name="test" />
        </FormGroup>
      </div>
    </Row>
  </form>
);

export default BankReferencesForm;
