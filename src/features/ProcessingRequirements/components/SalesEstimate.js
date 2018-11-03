import React from "react";
import { Row, FormGroup } from "../../../common";

const SalesEstimate = () => (
  <form>
    <hr />
    <fieldset>
      <legend>Sales Estimate</legend>
      <Row>
        <div className="col-sm-12 col-md-12 col-lg-6">
          <FormGroup>
            <label className="control-label" htmlFor="test">
              Monthly Sales Amount
            </label>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">
                  $
                </span>
              </div>
              <input type="text" className="form-control" />
            </div>
          </FormGroup>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-6">
          <FormGroup>
            <label className="control-label" htmlFor="test">
              Monthly Volume Count
            </label>
            <div className="input-group mb-3">
              <input type="text" className="form-control" />
              <div className="input-group-append">
                <span className="input-group-text" id="basic-addon2">
                  TX
                </span>
              </div>
            </div>
          </FormGroup>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-4">
          <FormGroup>
            <label className="control-label" htmlFor="test">
              Ticket Avg
            </label>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">
                  $
                </span>
              </div>
              <input type="text" className="form-control" />
            </div>
          </FormGroup>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-4">
          <FormGroup>
            <label className="control-label" htmlFor="test">
              Ticket Minimum
            </label>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">
                  $
                </span>
              </div>
              <input type="text" className="form-control" />
            </div>
          </FormGroup>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-4">
          <FormGroup>
            <label className="control-label" htmlFor="test">
              Ticket Maximum
            </label>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">
                  $
                </span>
              </div>
              <input type="text" className="form-control" />
            </div>
          </FormGroup>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-6">
          <FormGroup>
            <label className="control-label" htmlFor="test">
              Monthly chargeback Amount
            </label>
            <div className="input-group mb-3">
              <input type="text" className="form-control" />
              <div className="input-group-append">
                <span className="input-group-text" id="basic-addon2">
                  %
                </span>
              </div>
            </div>
          </FormGroup>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-6">
          <FormGroup>
            <label className="control-label" htmlFor="test">
              Monthly chargeback Count
            </label>
            <div className="input-group mb-3">
              <input type="text" className="form-control" />
              <div className="input-group-append">
                <span className="input-group-text" id="basic-addon2">
                  %
                </span>
              </div>
            </div>
          </FormGroup>
        </div>
      </Row>
    </fieldset>
  </form>
);

export default SalesEstimate;
