import React from "react";
import { Slider, Row, FormGroup } from "../../../common";

const checkBoxStyle = {
  marginLeft: "10px"
};

const OwnersForm = () => (
  <form>
    <Row>
      <div className="col-sm-12 col-md-12 col-lg-12">
        <FormGroup>
          <label htmlFor="test">Email</label>
          <input className="form-control" name="test" type="email" />
        </FormGroup>
      </div>

      <div className="col-sm-12 col-md-12 col-lg-12">
        <FormGroup>
          <label htmlFor="test">Mobile Phone</label>
          <input className="form-control" name="test" type="text" />
        </FormGroup>
      </div>

      <div className="col-sm-12 col-md-12 col-lg-12">
        <FormGroup>
          <label htmlFor="test">Email</label>
          <select className="form-control" name="test">
            <option>--Select Role--</option>
          </select>
        </FormGroup>
      </div>

      <div className="col-sm-8 col-md-8 col-lg-8 offset-lg-2 offset-md-2 offset-sm-2 text-center">
        <FormGroup>
          <label htmlFor="test">Ownership Percentage</label>
          <br />
          <Slider />
        </FormGroup>
      </div>

      <div className="col-sm-12 col-md-12 col-lg-12">
        <FormGroup>
          This is a personal guarantee
          <input name="test" type="checkbox" style={checkBoxStyle} />
        </FormGroup>
      </div>

      <div className="col-sm-12 col-md-12 col-lg-12">
        <FormGroup>
          Issue them a debit card
          <input name="test" type="checkbox" style={checkBoxStyle} />
        </FormGroup>
      </div>
    </Row>
  </form>
);

export default OwnersForm;
