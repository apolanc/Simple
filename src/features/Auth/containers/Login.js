import React, { Component } from "react";
import ReactRouterPropTypes from "react-router-prop-types";
import { LoginForm, AuthFormContainer, AuthFormContent } from "../components";
import utils from "../../../utils";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.utils = utils;
    this.Authenticate = this.Authenticate.bind(this);
  }

  Authenticate() {
    const { history } = this.props;
    this.utils.singin();
    history.push("/dashboard");
  }

  render() {
    return (
      <AuthFormContainer>
        <AuthFormContent>
          <LoginForm Authenticate={this.Authenticate} />
        </AuthFormContent>
      </AuthFormContainer>
    );
  }
}

Login.propTypes = {
  history: ReactRouterPropTypes.history.isRequired
};
