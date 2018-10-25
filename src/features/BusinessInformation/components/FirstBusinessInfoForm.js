import React from "react";
import { Row, FormGroup } from "../../../common";

const FirstBusinessInfoForm = () => (
  <Row>
    <div className="col-md-12">
      <FormGroup>
        <label className="control-label" htmlFor="test">
          Organization Name
        </label>
        <input type="text" className="form-control" />
      </FormGroup>
    </div>
    <div className="col-md-12">
      <FormGroup>
        <label className="control-label" htmlFor="test">
          Corporate Name
        </label>
        <input type="text" className="form-control" />
      </FormGroup>
    </div>
    <div className="col-md-6">
      <FormGroup>
        <label className="control-label" htmlFor="test">
          Year Established
        </label>
        <input type="text" className="form-control" />
      </FormGroup>
    </div>
    <div className="col-md-6">
      <FormGroup>
        <label className="control-label" htmlFor="test">
          Business Type
        </label>
        <input type="text" className="form-control" />
      </FormGroup>
    </div>
    <div className="col-md-6">
      <FormGroup>
        <label className="control-label" htmlFor="test">
          Registration Number
        </label>
        <input type="text" className="form-control" />
      </FormGroup>
    </div>
    <div className="col-md-6">
      <FormGroup>
        <label className="control-label" htmlFor="test">
          Federal Tax ID
        </label>
        <input type="text" className="form-control" />
      </FormGroup>
    </div>
    <div className="col-md-12">
      <FormGroup>
        <label className="control-label" htmlFor="test">
          DBA Name
        </label>
        <input type="text" className="form-control" />
      </FormGroup>
    </div>
    <div className="col-md-6">
      <FormGroup>
        <label className="control-label" htmlFor="test">
          DBA Ownership since
        </label>
        <input type="text" className="form-control" />
      </FormGroup>
    </div>
    <div className="col-md-6">
      <FormGroup>
        <label className="control-label" htmlFor="test">
          Total Location Count
        </label>
        <input type="text" className="form-control" />
      </FormGroup>
    </div>
    <div className="col-md-6">
      <FormGroup>
        <label className="control-label" htmlFor="test">
          Country of origin
        </label>
        <input type="text" className="form-control" />
      </FormGroup>
    </div>
    <div className="col-md-6">
      <FormGroup>
        <label className="control-label" htmlFor="test">
          Country of primary operations
        </label>
        <input type="text" className="form-control" />
      </FormGroup>
    </div>
    <div className="col-md-12">
      <FormGroup>
        <label className="control-label" htmlFor="test">
          Geography footprint (Licensed country to do business)
        </label>
        <textarea rows={4} className="form-control" />
      </FormGroup>
    </div>
  </Row>
);

export default FirstBusinessInfoForm;
