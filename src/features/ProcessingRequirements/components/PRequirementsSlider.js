import React, { Fragment } from "react";
import { Slider } from "../../../common";

const PRequirementsSlider = () => (
  <Fragment>
    <div className="slider-text-container">
      <div className="slider-text-label-left">
        <span>Card Present RETAIL</span>
      </div>
      <div className="slider-text-label-right">
        <span>Card Not Present ONLINE - PHONE</span>
      </div>
    </div>
    <Slider />
  </Fragment>
);

export default PRequirementsSlider;
