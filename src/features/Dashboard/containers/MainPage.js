import React, { Component } from "react";
import Proptypes from "prop-types";

export default class MainPage extends Component {
  componentDidMount() {}

  render() {
    const { children } = this.props;
    return (
      <div className="dashboard-container">
        <div className="content-container">{children}</div>
      </div>
    );
  }
}

MainPage.propTypes = {
  children: Proptypes.element.isRequired
};
