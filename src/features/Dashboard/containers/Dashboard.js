import React from "react";
import ReactRouterPropTypes from "react-router-prop-types";

import { Switch } from "react-router-dom";
import { Navbar } from "../components";
import { Grid, Row } from "../../../common";
import { logout, returnRoute } from "../../../utils";

import dashboardRoutes from "../dashboardRoutes";

export default class Dashboard extends React.Component {
  constructor() {
    super();
    this.logout = this.logout.bind(this);
    this.onContinue = this.onContinue.bind(this);
    this.onComponentRedirect = this.onComponentRedirect.bind(this);
  }

  componentDidMount() {
    const {
      history,
      match: { path }
    } = this.props;

    history.push(`${path}/processing-requirements`);
  }

  componentDidUpdate() {
    this.mainPanel.scrollTop = 0;
  }

  onContinue() {
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
  }

  logout() {
    const { history } = this.props;
    logout();
    history.push("/login");
  }

  render() {
    return (
      <div className="wrapper">
        <div
          className="main-panel"
          id="main-panel"
          ref={r => {
            this.mainPanel = r;
          }}
        >
          <Navbar logout={this.logout} />
          <div className="content">
            <Grid fluid>
              <Row>
                <div className="col-md-6 offset-md-3">
                  <Switch>
                    {dashboardRoutes.map((route, key) =>
                      returnRoute(route, key)
                    )}
                  </Switch>
                </div>
              </Row>
            </Grid>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
  match: ReactRouterPropTypes.match.isRequired
};
