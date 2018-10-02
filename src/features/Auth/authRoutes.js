import React from "react";
import { Route, Redirect } from "react-router-dom";
import { Login, Register, ForgotPassword } from ".";

export default [
  <Redirect exact="/" from="/" to="/login" />,
  <Route exact path="/login" component={Login} />,
  <Route exact path="/register" component={Register} />,
  <Route exact path="/forgot-password" component={ForgotPassword} />
];
