import React from "react";
import { IoIosCalendar } from "react-icons/io";
import { Row, FormGroup, DatePicker } from "../../../common";

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
        <div className="input-group mb-3">
          <DatePicker className="form-control" />
          <div className="input-group-append">
            <span className="input-group-text" id="basic-addon2">
              <IoIosCalendar />
            </span>
          </div>
        </div>
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
        <div className="input-group mb-3">
          <DatePicker className="form-control" />
          <div className="input-group-append">
            <span className="input-group-text" id="basic-addon2">
              <IoIosCalendar />
            </span>
          </div>
        </div>
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
