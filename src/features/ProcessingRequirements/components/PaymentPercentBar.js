import React from "react";
import { Row } from "../../../common";

const PaymentPercentBar = () => (
  <Row>
    <div className="payment-methods-container col-12 col-sm-12 col-md-10 col-lg-8 offset-md-1 offset-lg-2">
      <div className="e-commerce-side">
        <span>33%</span>
      </div>
      <div className="cash-side">
        <span>33%</span>
      </div>
      <div className="card-present-side">
        <span>33%</span>
      </div>
    </div>
  </Row>
);

export default PaymentPercentBar;
