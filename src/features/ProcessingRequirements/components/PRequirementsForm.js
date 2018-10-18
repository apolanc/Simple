import React, { Fragment } from "react";

const PRequirementsForm = () => (
  <Fragment>
    <h4>Merchant Processing Requirements</h4>
    <div className="container">
      <div className="row form-row">
        <div className="col-sm-12 label-container">
          <label htmlFor="avg_ticket">Average Ticket</label>
        </div>
        <div className="col-sm-12 input-group mb-2 mr-sm-2 input-group-sm">
          <div className="input-group-prepend">
            <div className="input-group-text input-group-sm">$</div>
          </div>
          <input
            type="text"
            id="avg_ticket"
            className="form-control form-control-sm"
            name="avg_ticket"
          />
        </div>
      </div>
      <div className="row form-row">
        <div className="col-sm-12 label-container">
          <label htmlFor="monthly_volume">Monthly Volume</label>
        </div>
        <div className="col-sm-12 input-group mb-2 mr-sm-2 input-group-sm">
          <div className="input-group-prepend">
            <div className="input-group-text">$</div>
          </div>
          <input
            type="text"
            id="monthly_volume"
            className="form-control form-control-sm"
            name="monthly_volume"
          />
        </div>
      </div>
    </div>
  </Fragment>
);

export default PRequirementsForm;
