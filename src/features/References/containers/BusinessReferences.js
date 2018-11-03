import React, { Component, Fragment } from "react";
import { MiniCard, Modal, Row } from "../../../common";
import { BusinessReferencesForm } from "../components";

// sample data for business

const businessData = [
  {
    id: 1,
    title: "Bucks Club",
    email: "buck@email.com",
    phone: "893-344-5634",
    footerInfoLeft: "Atlanta, GA USA"
  },
  {
    id: 2,
    title: "Privilege Club",
    email: "pbc@pvbhh.com",
    phone: "000-000-0000",
    footerInfoLeft: "Floria, NP USA"
  },
  {
    id: 3,
    title: "Privilege Club",
    email: "pbc@pvbhh.com",
    phone: "000-000-0000",
    footerInfoLeft: "Floria, NP USA"
  },
  {
    id: 4,
    title: "Privilege Club",
    email: "pbc@pvbhh.com",
    phone: "000-000-0000",
    footerInfoLeft: "Floria, NP USA"
  }
];

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
          <Row>
            {businessData.map(data => (
              <MiniCard
                onCardClick={this.onCardClick}
                content={data}
                key={data.id}
              />
            ))}
            <MiniCard onCardClick={this.onCardClick} />
          </Row>
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
