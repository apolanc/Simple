import React from "react";
import PropTypes from "prop-types";

import { Row, FormGroup } from "../../../common";

const ContactInfoForm = ({ type }) => (
  <fieldset>
    <legend>{`${type === "corporate" ? "Corporate" : "DBA"} contact`}</legend>
    <Row>
      <div className="col-md-12">
        <FormGroup>
          <label className="control-label" htmlFor="test">
            Contact Name
          </label>
          <input type="text" className="form-control" />
        </FormGroup>
      </div>
      <div className="col-md-6">
        <FormGroup>
          <label className="control-label" htmlFor="test">
            Phone
          </label>
          <input type="text" className="form-control" />
        </FormGroup>
      </div>
      <div className="col-md-6">
        <FormGroup>
          <label className="control-label" htmlFor="test">
            Cell Phone
          </label>
          <input type="text" className="form-control" />
        </FormGroup>
      </div>
      <div className="col-md-6">
        <FormGroup>
          <label className="control-label" htmlFor="test">
            Email
          </label>
          <input type="email" className="form-control" />
        </FormGroup>
      </div>
      <div className="col-md-6">
        <FormGroup>
          <label className="control-label" htmlFor="test">
            Url
          </label>
          <input type="text" className="form-control" />
        </FormGroup>
      </div>
      <div className="col-md-12">
        <FormGroup>
          <label className="control-label" htmlFor="test">
            Street Address
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="e.g. 123 Kingston Road"
          />
        </FormGroup>
      </div>
      <div className="col-md-12">
        <FormGroup>
          <label className="control-label" htmlFor="test">
            Street Address 2
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Apartment, suite, building, etc. (optional)"
          />
        </FormGroup>
      </div>
      <div className="col-md-6">
        <FormGroup>
          <label className="control-label" htmlFor="test">
            Country
          </label>
          <input
            type="email"
            className="form-control"
            placeholder="e.g. Canada"
          />
        </FormGroup>
      </div>
      <div className="col-md-6">
        <FormGroup>
          <label className="control-label" htmlFor="test">
            State/Region
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="e.g. Alberta"
          />
        </FormGroup>
      </div>
      <div className="col-md-6">
        <FormGroup>
          <label className="control-label" htmlFor="test">
            City
          </label>
          <input
            type="email"
            className="form-control"
            placeholder="e.g. Edmonton"
          />
        </FormGroup>
      </div>
      <div className="col-md-6">
        <FormGroup>
          <label className="control-label" htmlFor="test">
            Zip/Postal Code
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="e.g. T5A M05"
          />
        </FormGroup>
      </div>
      <div className="col-md-6">
        <FormGroup>
          <label className="control-label" htmlFor="test">
            Building Type
          </label>
          <input type="email" className="form-control" placeholder="Pick One" />
        </FormGroup>
      </div>
      <div className="col-md-6">
        <FormGroup>
          <label className="control-label" htmlFor="test">
            Years at address
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Time this address has been used"
          />
        </FormGroup>
      </div>
      {type === "corporate" && (
        <div className="col-md-12">
          <div className="form-check">
            <input
              value=""
              type="checkbox"
              id="defaultCheck1"
              className="form-check-input"
            />
            <label className="form-check-label" htmlFor="defaultCheck1">
              <strong>Address for DBA s the same as corporate address</strong>
            </label>
          </div>
        </div>
      )}
    </Row>
  </fieldset>
);

ContactInfoForm.defaultProps = {
  type: ""
};

ContactInfoForm.propTypes = {
  type: PropTypes.string
};

export default ContactInfoForm;
