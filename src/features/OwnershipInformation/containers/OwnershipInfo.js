import React, { Component, Fragment } from "react";
import { OwnerList } from "../components";

export default class OwnershipInfo extends Component {
  constructor(props) {
    super(props);

    this.owners = [
      {
        id: "1212",
        name: "jhon doe",
        email: "jdoe@email.com",
        percent: "75%",
        role: "Owner",
        phone: "805-121-2323"
      },
      {
        id: "1213",
        name: "Susan doe",
        email: "susan@email.com",
        percent: "15%",
        role: "Owner",
        phone: "805-121-2324"
      },
      {
        id: "1214",
        name: "Bill doe",
        email: "billdoe@email.com",
        percent: "75%",
        role: "Owner",
        phone: "805-121-2325"
      }
    ];
  }

  render() {
    return (
      <Fragment>
        <h3 style={{ textAlign: "center", marginTop: 20, marginBottom: 20 }}>
          Company Owners
        </h3>
        <OwnerList owners={this.owners} />
        <div className="requirements-button-container">
          <button type="button" className="requirements-button">
            Next
          </button>
        </div>
      </Fragment>
    );
  }
}
