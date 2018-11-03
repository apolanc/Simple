import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ReactRouterPropTypes from "react-router-prop-types";

import { signIn } from "../authActions";
import { LoginForm, AuthFormContainer, AuthFormContent } from "../components";
import { login } from "../../../utils";

class Login extends Component {
  constructor(props) {
    super(props);
    this.authenticate = this.authenticate.bind(this);
  }

  authenticate() {
    const { history } = this.props;
    login();
    history.push("/dashboard");
  }

  render() {
    return (
      <AuthFormContainer>
        <AuthFormContent>
          <LoginForm authenticate={this.authenticate} />
        </AuthFormContent>
      </AuthFormContainer>
    );
  }
}

Login.propTypes = {
  history: ReactRouterPropTypes.history.isRequired
};

const mapStateToProps = state => ({
  merchant: state.get("authReducer")
});

const mapDispatchToProps = dispatch => ({
  singIn: bindActionCreators(signIn, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
