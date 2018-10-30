import React, { Component, Fragment } from "react";
import { MiniCard, Modal } from "../../../common";
import { BusinessReferencesForm } from "../components";

class BusinessReferences extends Component {
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

  render() {
    const { showModal } = this.state;
    return (
      <Fragment>
        <fieldset>
          <legend>
            <h3 className="bottom-border">Business References</h3>
          </legend>
          <MiniCard onCardClick={this.onCardClick} />
        </fieldset>
        <Modal
          component={BusinessReferencesForm}
          onHide={this.onHide}
          show={showModal}
          title="Business Reference"
        />
      </Fragment>
    );
  }
}

export default BusinessReferences;
