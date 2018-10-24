import React from "react";
import PropTypes from "prop-types";
import { Redirect, Route } from "react-router-dom";
import { PrivateRoute } from "./common";

import { OwnershipInfo } from "./features/OwnershipInformation";
import { ProcessingRequirements } from "./features/ProcessingRequirements";
import { BusinessInformation } from "./features/BusinessInformation";

export const isAuthenticated = () => localStorage.getItem("logged");

export const login = () => localStorage.setItem("logged", true);

export const logout = () => localStorage.setItem("logged", false);

export const componentDispenser = type => {
  switch (type) {
    case "Ownership Information":
      return OwnershipInfo;
    case "Processing Requirements":
      return ProcessingRequirements;
    case "Business Information":
      return BusinessInformation;
    default:
      return "";
  }
};

export const returnRoute = (
  {
    redirect,
    privateRoute,
    name,
    path,
    component,
    isAuthenticated: authed,
    from,
    to,
    exact,
    render
  },
  key
) => {
  if (privateRoute) {
    return (
      <PrivateRoute
        key={`${name}+${key + 1}`}
        path={path}
        component={component}
        isAuthenticated={authed}
      />
    );
  }
  if (redirect) {
    return (
      <Redirect exact={exact} key={`${name}+${key + 1}`} from={from} to={to} />
    );
  }
  if (render) {
    return (
      <PrivateRoute
        key={`${name}+${key + 1}`}
        path={path}
        component={component}
        isAuthenticated={authed}
      />
    );
  }
  return (
    <Route
      exact={exact}
      path={path}
      component={component}
      key={`${name}+${key + 1}`}
    />
  );
};

returnRoute.propTypes = {
  redirect: PropTypes.bool,
  privateRoute: PropTypes.bool,
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  component: PropTypes.element.isRequired,
  isAuthenticated: PropTypes.func,
  from: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  exact: PropTypes.bool,
  render: PropTypes.bool
};

returnRoute.defaultProps = {
  redirect: false,
  exact: false,
  render: false,
  privateRoute: false,
  isAuthenticated: () => undefined
};
