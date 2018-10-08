import React from "react";
import { Dashboard, FirstPage } from ".";
import { PrivateRoute } from "../../common";
import utils from "../../utils";
import "./Dashboard.css";

export default [
  <PrivateRoute
    exact
    key="dash"
    path="/dashboard"
    component={Dashboard}
    isAuthenticated={utils.isAuthenticated}
  />,

  <PrivateRoute
    exact
    key="first"
    path="/first-page"
    component={FirstPage}
    isAuthenticated={utils.isAuthenticated}
  />
];
