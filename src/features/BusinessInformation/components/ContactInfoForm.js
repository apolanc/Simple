import React, { Component } from "react";
import PropTypes from "prop-types";

import { Row, FormGroup, PlaceAutocomplete } from "../../../common";

class ContactInfoForm extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { type, handleCheckboxChange } = this.props;

    return (
      <fieldset>
        <legend>
          {`${type === "corporate" ? "Corporate" : "DBA"} contact`}
        </legend>
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
              <PlaceAutocomplete
                handleSelect={results => console.log(results)}
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
              <input
                type="email"
                className="form-control"
                placeholder="Pick One"
              />
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
                  type="checkbox"
                  id="defaultCheck1"
                  name="showDBAAddressForm"
                  className="form-check-input"
                  onChange={handleCheckboxChange}
                />
                <label className="form-check-label" htmlFor="defaultCheck1">
                  <strong>
                    Address for DBA s the same as corporate address
                  </strong>
                </label>
              </div>
            </div>
          )}
        </Row>
      </fieldset>
    );
  }
}

ContactInfoForm.defaultProps = {
  type: "",
  handleCheckboxChange: () => undefined
};

ContactInfoForm.propTypes = {
  type: PropTypes.string,
  handleCheckboxChange: PropTypes.func
};

export default ContactInfoForm;
