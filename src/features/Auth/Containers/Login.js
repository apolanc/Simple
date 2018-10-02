import React, { Component } from "react";
import { LoginForm, AuthFormContainer, AuthFormContent } from "../components";

export default class Login extends Component {
  componentDidCatch() {}

  render() {
    return (
      <AuthFormContainer>
        <AuthFormContent>
          <LoginForm />
        </AuthFormContent>
      </AuthFormContainer>
    );
  }
}
