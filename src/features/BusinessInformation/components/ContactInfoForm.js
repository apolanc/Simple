import React, { Component } from "react";
import PropTypes from "prop-types";

import { contactType } from "../../../types";
import { Row, FormGroup, PlaceAutocomplete } from "../../../common";

class ContactInfoForm extends Component {
  constructor(props) {
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSelectAddress = this.handleSelectAddress.bind(this);
  }

  handleInputChange({ target }) {
    const { type, handleInputChange } = this.props;

    const value = target.type === "checkbox" ? target.checked : target.value;

    handleInputChange(type || "dbaContact", target.name, value);
  }

  handleSelectAddress(result) {
    const { type, handleInputChange } = this.props;

    const { address_components: addressComponents } = result;

    handleInputChange(
      type || "dbaContact",
      "address1",
      result.formatted_address
    );

    addressComponents.forEach(comp => {
      if (
        comp.types.includes("sublocality") ||
        comp.types.includes("locality")
      ) {
        handleInputChange(type || "dbaContact", "city", comp.long_name);
      } else if (comp.types.includes("administrative_area_level_1")) {
        handleInputChange(type || "dbaContact", "region", comp.long_name);
      } else if (comp.types.includes("postal_code")) {
        handleInputChange(type || "dbaContact", "zip_postal", comp.long_name);
      } else if (comp.types.includes("country")) {
        handleInputChange(type || "dbaContact", "country", comp.long_name);
      }
    });
  }

  render() {
    const { type, model, handleInputChange } = this.props;

    return (
      <fieldset>
        <legend>{`${type === "contact" ? "Corporate" : "DBA"} contact`}</legend>
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
                value={model.address1}
                handleChange={address =>
                  handleInputChange(type || "dba", "address1", address)
                }
                handleSelect={this.handleSelectAddress}
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
                name="address2"
                value={model.address2}
                className="form-control"
                onChange={this.handleInputChange}
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
                type="text"
                name="country"
                value={model.country}
                className="form-control"
                placeholder="e.g. Canada"
                onChange={this.handleInputChange}
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
                name="region"
                value={model.region}
                className="form-control"
                placeholder="e.g. Alberta"
                onChange={this.handleInputChange}
              />
            </FormGroup>
          </div>
          <div className="col-md-6">
            <FormGroup>
              <label className="control-label" htmlFor="test">
                City
              </label>
              <input
                type="text"
                name="city"
                value={model.city}
                className="form-control"
                placeholder="e.g. Edmonton"
                onChange={this.handleInputChange}
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
                name="zip_postal"
                value={model.zip_postal}
                className="form-control"
                placeholder="e.g. T5A M05"
                onChange={this.handleInputChange}
              />
            </FormGroup>
          </div>
          <div className="col-md-6">
            <FormGroup>
              <label className="control-label" htmlFor="test">
                Building Type
              </label>
              <input
                type="text"
                name="type"
                value={model.type}
                className="form-control"
                placeholder="Pick One"
                onChange={this.handleInputChange}
              />
            </FormGroup>
          </div>
          <div className="col-md-6">
            <FormGroup>
              <label className="control-label" htmlFor="test">
                Years at address
              </label>
              <input
                type="number"
                name="yearsAt"
                value={model.yearsAt}
                className="form-control"
                placeholder="Time this address has been used"
                onChange={this.handleInputChange}
              />
            </FormGroup>
          </div>
          {type === "contact" && (
            <div className="col-md-12">
              <div className="form-check">
                <input
                  type="checkbox"
                  id="defaultCheck1"
                  name="hideDBAAddressForm"
                  className="form-check-input"
                  onChange={this.handleInputChange}
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
  type: ""
};

ContactInfoForm.propTypes = {
  type: PropTypes.string,
  model: contactType.isRequired,
  handleInputChange: PropTypes.func.isRequired
};

export default ContactInfoForm;
