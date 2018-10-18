import React from "react";

const CompanyAddressForm = () => (
  <div className="container">
    <h5>Enter your company address</h5>
    <div className="row">
      <div className="form-group col-md-6">
        <label htmlFor="country" className="bussines-label-form">
          Country
        </label>
        <input
          type="text"
          className="form-control form-control-sm"
          name="country"
        />
      </div>
      <div className="form-group col-md-6">
        <label htmlFor="addr_1" className="bussines-label-form">
          Address 1
        </label>
        <input
          type="text"
          className="form-control form-control-sm"
          name="addr_1"
        />
      </div>
    </div>

    <div className="row">
      <div className="form-group col-md-6">
        <label htmlFor="addr_2" className="bussines-label-form">
          Address 2
        </label>
        <input
          type="text"
          className="form-control form-control-sm"
          name="addr_2"
        />
      </div>

      <div className="form-group col-md-6">
        <label htmlFor="city" className="bussines-label-form">
          City
        </label>
        <input
          type="text"
          className="form-control form-control-sm"
          name="city"
        />
      </div>
    </div>

    <div className="row">
      <div className="form-group col-md-6">
        <label htmlFor="state" className="bussines-label-form">
          State
        </label>
        <input
          type="text"
          className="form-control form-control-sm"
          name="state"
        />
      </div>

      <div className="form-group col-md-6">
        <label htmlFor="zip_code" className="bussines-label-form">
          Zip Code
        </label>
        <input
          type="text"
          className="form-control form-control-sm"
          name="zip_code"
        />
      </div>
    </div>

    <div className="row">
      <div className="form-group col-md-6">
        <label htmlFor="addl_selection" className="bussines-label-form">
          Company Phone 1
        </label>
        <input
          type="text"
          className="form-control form-control-sm"
          name="addl_selection"
        />
      </div>

      <div className="form-group col-md-6">
        <label htmlFor="tax_id" className="bussines-label-form">
          Company Website
        </label>
        <input
          type="text"
          className="form-control form-control-sm"
          name="tax_id"
        />
      </div>
    </div>

    <div className="row">
      <div className="form-group col-md-12">
        <input type="checkbox" name="company_name" />
        <span className="bussines-label-form">Address for DBA is the same</span>
      </div>
    </div>

    <div className="forms-button-container">
      <button type="button" className="forms-button">
        Next
      </button>
    </div>
  </div>
);

export default CompanyAddressForm;
