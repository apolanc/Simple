import React, { Component } from "react";
import LoginForm from "../Components/LoginForm";

export default class Login extends Component {
  componentDidCatch() {}

  render() {
    return (
      <div className="container">
        <LoginForm />
      </div>
    );
  }
}
