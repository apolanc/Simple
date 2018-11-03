import React from "react";
import PropTypes from "prop-types";
import { Redirect, Route } from "react-router-dom";
import { PrivateRoute } from "./common";

export const isAuthenticated = () => localStorage.getItem("logged");

export const login = () => localStorage.setItem("logged", true);

export const logout = () => localStorage.setItem("logged", false);

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
    exact
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
  exact: PropTypes.bool
};

returnRoute.defaultProps = {
  redirect: false,
  exact: false,
  privateRoute: false,
  isAuthenticated: () => undefined
};
