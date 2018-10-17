import React from "react";
import { Dashboard, MainPage } from ".";
import { PrivateRoute } from "../../common";
import { isAuthenticated } from "../../utils";
import "./Dashboard.css";

export default [
  <PrivateRoute
    exact
    key="dash"
    path="/dashboard"
    component={Dashboard}
    isAuthenticated={isAuthenticated}
  />,

  <PrivateRoute
    exact
    key="main"
    path="/main"
    component={MainPage}
    isAuthenticated={isAuthenticated}
  />
];
