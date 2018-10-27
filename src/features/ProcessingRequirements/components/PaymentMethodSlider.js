import React from "react";
import { string } from "prop-types";
import { FaPercent } from "react-icons/fa";
import { Row, Slider } from "../../../common";

const PaymentMethodSlider = ({ sliderName, inputClass }) => (
  <Row>
    <div className="col-sm-12 col-md-12 col-lg-2 span-container">
      <span>{sliderName}</span>
    </div>
    <div className="col-sm-12 col-md-12 col-lg-8 slider-container">
      <Slider />
    </div>
    <div className="col-sm-12 col-md-12 col-lg-2">
      <div className="input-group">
        <input type="text" className={`form-control ${inputClass}`} disabled />
        <div className="input-group-append">
          <span className="input-group-text" id="basic-addon2">
            <FaPercent />
          </span>
        </div>
      </div>
    </div>
  </Row>
);

PaymentMethodSlider.defaultProps = {
  inputClass: ""
};

PaymentMethodSlider.propTypes = {
  sliderName: string.isRequired,
  inputClass: string
};

export default PaymentMethodSlider;
