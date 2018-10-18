import React from "react";

const FirstBusinessInfoForm = () => (
  <div className="container">
    <div className="row">
      <div className="form-group col-md-6">
        <label htmlFor="company_name" className="bussines-label-form">
          Company Name
        </label>
        <input
          type="text"
          className="form-control form-control-sm"
          name="company_name"
        />
      </div>
      <div className="form-group col-md-6">
        <label htmlFor="company_name" className="bussines-label-form">
          Company DBA
        </label>
        <input
          type="text"
          className="form-control form-control-sm"
          name="company_dba"
        />
      </div>
    </div>

    <div className="row">
      <div className="form-group col-md-6">
        <label htmlFor="company_name" className="bussines-label-form">
          Company Phone #
        </label>
        <input
          type="text"
          className="form-control form-control-sm"
          name="company_phone"
        />
      </div>

      <div className="form-group col-md-6">
        <label htmlFor="company_name" className="bussines-label-form">
          Company Website
        </label>
        <input
          type="text"
          className="form-control form-control-sm"
          name="company_site"
        />
      </div>
    </div>

    <div className="row">
      <div className="form-group col-md-6">
        <label htmlFor="company_name" className="bussines-label-form">
          Organization Type
        </label>
        <select
          className="form-control form-control-sm"
          name="organization_type"
        />
      </div>

      <div className="form-group col-md-6">
        <label htmlFor="type_of_business" className="bussines-label-form">
          Type of Business
        </label>
        <select
          className="form-control form-control-sm"
          name="type_of_business"
        />
      </div>
    </div>

    <div className="row">
      <div className="form-group col-md-6">
        <label htmlFor="addl_selection" className="bussines-label-form">
          Additional Selection
        </label>
        <select
          className="form-control form-control-sm"
          name="addl_selection"
        />
      </div>

      <div className="form-group col-md-6">
        <label htmlFor="tax_id" className="bussines-label-form">
          Tax ID
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
        <span className="bussines-label-form">
          Has this business ever processed credit card?
        </span>
      </div>
    </div>

    <div className="forms-button-container">
      <button type="button" className="forms-button">
        Next
      </button>
    </div>
  </div>
);

export default FirstBusinessInfoForm;
