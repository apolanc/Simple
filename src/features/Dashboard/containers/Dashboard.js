import React, { Fragment } from "react";
import ReactRouterPropTypes from "react-router-prop-types";

import { Navbar, CompletionPercent } from "../components";
import MainPage from "./MainPage";
import { logout, componentDispenser } from "../../../utils";
import { Modal } from "../../../common";

export default class Dashboard extends React.Component {
  constructor() {
    super();
    this.logout = this.logout.bind(this);
    this.onContinue = this.onContinue.bind(this);
    this.onComponentRedirect = this.onComponentRedirect.bind(this);
    this.state = { show: true, component: null };
  }

  onContinue() {
    this.setState({ show: false });
    this.renderComponent("Processing Requirements");
  }

  onComponentRedirect(evt = {}, name = "") {
    if (evt.stopPropagation) {
      evt.stopPropagation();
    }

    const {
      target: { id }
    } = evt;

    this.renderComponent(id || name);
    this.setState({ show: false });
  }

  logout() {
    const { history } = this.props;
    logout();
    history.push("/login");
  }

  renderComponent(componentToRender) {
    this.setState({ component: componentDispenser(componentToRender) });
  }

  render() {
    const { show, component: Component } = this.state;
    return (
      <Fragment>
        <Navbar logout={this.logout} />
        <MainPage>
          {Component && (
            <Component onComponentRedirect={this.onComponentRedirect} />
          )}
        </MainPage>
        <Modal
          component={CompletionPercent}
          show={show}
          onContinue={this.onContinue}
          onIconToggle={this.onComponentRedirect}
        />
      </Fragment>
    );
  }
}

Dashboard.propTypes = {
  history: ReactRouterPropTypes.history.isRequired
};
