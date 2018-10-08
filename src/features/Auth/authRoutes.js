import React from "react";
import { Route, Redirect } from "react-router-dom";
import { Login, Register, ForgotPassword } from ".";
import "./Auth.css";

export default [
  <Redirect key="0" exact="/" from="/" to="/login" />,
  <Route key="1" exact path="/login" component={Login} />,
  <Route key="2" exact path="/register" component={Register} />,
  <Route key="3" exact path="/forgot-password" component={ForgotPassword} />
];
