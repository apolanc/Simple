import React, { Component } from "react";
import RegisterForm from "../Components/RegisterForm";

export default class Login extends Component {
  componentDidCatch() {}

  render() {
    return (
      <div className="container">
        <RegisterForm />
      </div>
    );
  }
}
