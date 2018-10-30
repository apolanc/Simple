/* eslint-disable */
import React, { Component, Fragment } from "react";
import ReactRouterPropTypes from "react-router-prop-types";

import { MiniCard, Modal, formWrapper } from "../../../common";
import { OwnersForm } from "../components";

class Owners extends Component {
  constructor(props) {
    super(props);
    this.onHide = this.onHide.bind(this);
    this.onCardClick = this.onCardClick.bind(this);
    this.state = {
      showModal: false
    };
  }

  componentDidMount() {}

  onHide() {
    this.setState({ showModal: false });
  }

  onCardClick() {
    this.setState({ showModal: true });
  }

  handleBack() {
    const { history } = this.props;
    history.push("/dashboard/references");
  }

  handleNext() {
    window.alert("End of the road.");
  }

  render() {
    const { showModal } = this.state;
    return (
      <Fragment>
        <hr />
        <fieldset>
          <legend>
            <h3 className="bottom-border">Onwers and Beneficiaries</h3>
          </legend>
          <MiniCard onCardClick={this.onCardClick} />
        </fieldset>
        <Modal
          component={OwnersForm}
          onHide={this.onHide}
          show={showModal}
          title="Onwers and Beneficiaries"
        />
      </Fragment>
    );
  }
}

Owners.propTypes = {
  history: ReactRouterPropTypes.history.isRequired
};

export default formWrapper(Owners);
