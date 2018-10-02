import React, { Component } from "react";
import ForgotPasswordForm from "../Components/ForgotPasswordForm";

export default class ForgotPassword extends Component {
  componentDidCatch() {}

  render() {
    return (
      <div className="container">
        <ForgotPasswordForm />
      </div>
    );
  }
}
