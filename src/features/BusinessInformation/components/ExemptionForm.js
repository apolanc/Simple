import React from "react";
import { Row, FormGroup } from "../../../common";

const ExemptionForm = () => (
  <fieldset>
    <legend>Exemptions</legend>
    <Row>
      <div className="col-md-12">
        <FormGroup>
          <label className="control-label" htmlFor="test">
            CIP ExemptionForm
          </label>
          <input type="text" className="form-control" />
        </FormGroup>
      </div>
      <div className="col-md-12">
        <FormGroup>
          <label className="control-label" htmlFor="test">
            Beneficial owner exception
          </label>
          <input type="text" className="form-control" />
        </FormGroup>
      </div>
    </Row>
  </fieldset>
);

export default ExemptionForm;
