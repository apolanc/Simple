import React, { Fragment } from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { NavLink } from "react-router-dom";
import routes from "../dashboardRoutes";

const BreadcrumbHistory = () => (
  <Fragment>
    <Breadcrumb>
      {routes.map(route => (
        <BreadcrumbItem>
          <NavLink to={route.path}>{route.name}</NavLink>
        </BreadcrumbItem>
      ))}
    </Breadcrumb>
  </Fragment>
);

export default BreadcrumbHistory;
