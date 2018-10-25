import React from "react";

import { Row, FormGroup } from "../../../common";

const SalesInfoForm = () => (
  <fieldset>
    <legend>Sales Information</legend>
    <Row>
      <div className="col-md-6">
        <FormGroup>
          <label className="control-label" htmlFor="test">
            Sale Currency
          </label>
          <input type="text" className="form-control" placeholder="pick one" />
        </FormGroup>
      </div>
      <div className="col-md-6">
        <FormGroup>
          <label className="control-label" htmlFor="test">
            VAT
          </label>
          <input type="text" className="form-control" />
        </FormGroup>
      </div>
      <div className="col-md-6">
        <FormGroup>
          <label className="control-label" htmlFor="test">
            Primary Terminal Type
          </label>
          <input type="text" className="form-control" placeholder="pick one" />
        </FormGroup>
      </div>
      <div className="col-md-6">
        <FormGroup>
          <label className="control-label" htmlFor="test">
            Hard Descriptor
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Text to appear in statements"
          />
        </FormGroup>
      </div>
      <div className="col-md-12">
        <FormGroup>
          <label className="control-label" htmlFor="test">
            Refund policy
          </label>
          <textarea rows={4} type="text" className="form-control" />
        </FormGroup>
      </div>
      <div className="col-md-12">
        <FormGroup>
          <label className="control-label" htmlFor="test">
            Refund description
          </label>
          <input type="text" className="form-control" />
        </FormGroup>
      </div>
      <div className="col-md-6">
        <div className="form-check">
          <input
            value=""
            type="checkbox"
            id="ships-goods"
            className="form-check-input"
          />
          <label className="form-check-label" htmlFor="ships-goods">
            Ships goods
          </label>
        </div>
      </div>
      <div className="col-md-6">
        <FormGroup>
          <label className="control-label" htmlFor="test">
            Delivery time
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Time this address has been used"
          />
        </FormGroup>
      </div>
    </Row>
  </fieldset>
);

export default SalesInfoForm;
