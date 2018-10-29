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
    this.getCurrentRouteTitle = this.getCurrentRouteTitle.bind(this);
  }

  componentDidMount() {
    const {
      history,
      match: { url }
    } = this.props;

    // history.push(`${url}/processing-requirements`);
  }

  componentDidUpdate() {
    this.mainPanel.scrollTop = 0;
  }

  getCurrentRouteTitle() {
    const {
      location: { pathname }
    } = this.props;

    const route = dashboardRoutes.find(r => r.path === pathname);

    return route ? route.name : "";
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
                  <div className="card">
                    <div className="header">
                      <h4 className="title">{this.getCurrentRouteTitle()}</h4>
                    </div>
                    <Switch>
                      {dashboardRoutes.map((route, key) =>
                        returnRoute(route, key)
                      )}
                    </Switch>
                  </div>
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
  match: ReactRouterPropTypes.match.isRequired,
  location: ReactRouterPropTypes.location.isRequired
};
