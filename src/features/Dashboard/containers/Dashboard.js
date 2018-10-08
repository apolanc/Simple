import React, { Component, Fragment } from "react";
import ReactRouterPropTypes from "react-router-prop-types";

import { Navbar } from "../components";
import { FirstPage } from ".";
import utils from "../../../utils";

export default class Dashboard extends Component {
  constructor() {
    super();
    this.logout = this.logout.bind(this);
  }

  logout() {
    const { history } = this.props;
    utils.singout();
    history.push("/login");
  }

  render() {
    return (
      <Fragment>
        <Navbar logout={this.logout} />
        <FirstPage />
      </Fragment>
    );
  }
}

Dashboard.propTypes = {
  history: ReactRouterPropTypes.history.isRequired
};
