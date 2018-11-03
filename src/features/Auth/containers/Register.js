import React, { Component } from "react";
import {
  RegisterForm,
  AuthFormContainer,
  AuthFormContent
} from "../components";

export default class Login extends Component {
  componentDidCatch() {}

  render() {
    return (
      <AuthFormContainer>
        <AuthFormContent>
          <RegisterForm />
        </AuthFormContent>
      </AuthFormContainer>
    );
  }
}
