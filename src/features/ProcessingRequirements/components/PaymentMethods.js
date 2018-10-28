import React from "react";
import PaymentMethodSlider from "./PaymentMethodSlider";
import PaymentPercentBar from "./PaymentPercentBar";

const PaymentMethods = () => (
  <form>
    <hr />
    <fieldset>
      <legend>Payment Methods</legend>
      <PaymentMethodSlider sliderName="Cash" inputClass="cash-slider-input" />
      <br />
      <PaymentMethodSlider
        sliderName="Card Present"
        inputClass="card-present-slider-input"
      />
      <br />
      <PaymentMethodSlider
        sliderName="E-commerce"
        inputClass="e-commerce-slider-input"
      />
      <br />
      <PaymentPercentBar />
    </fieldset>
  </form>
);

export default PaymentMethods;
