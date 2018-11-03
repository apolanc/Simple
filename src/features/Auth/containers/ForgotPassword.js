import React, { Component } from "react";
import {
  ForgotPasswordForm,
  AuthFormContainer,
  AuthFormContent
} from "../components";

export default class ForgotPassword extends Component {
  componentDidCatch() {}

  render() {
    return (
      <AuthFormContainer>
        <AuthFormContent>
          <ForgotPasswordForm />
        </AuthFormContent>
      </AuthFormContainer>
    );
  }
}
