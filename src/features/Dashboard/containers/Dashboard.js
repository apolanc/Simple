import React, { Component, Fragment } from "react";
import ReactRouterPropTypes from "react-router-prop-types";

import { Navbar, CompletionPercent } from "../components";
import MainPage from "./MainPage";
import utils from "../../../utils";
import { Modal } from "../../../common";

export default class Dashboard extends Component {
  constructor() {
    super();
    this.logout = this.logout.bind(this);
    this.onContinue = this.onContinue.bind(this);
    this.state = { show: true };
  }

  onContinue() {
    this.setState({ show: false });
  }

  logout() {
    const { history } = this.props;
    utils.singout();
    history.push("/login");
  }

  render() {
    const { show } = this.state;
    return (
      <Fragment>
        <Navbar logout={this.logout} />
        <MainPage />
        <Modal
          component={CompletionPercent}
          show={show}
          onContinue={this.onContinue}
        />
      </Fragment>
    );
  }
}

Dashboard.propTypes = {
  history: ReactRouterPropTypes.history.isRequired
};
