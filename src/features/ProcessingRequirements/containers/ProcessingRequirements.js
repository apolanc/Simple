import React, { Component } from "react";
import PropTypes from "prop-types";

// import { PRequirementsForm, PRequirementsSlider } from "../components";
import { Card, Grid, Row, FormGroup } from "../../../common";

const CardContent = () => (
  <form>
    <Row>
      <div className="col-md-6">
        <FormGroup>
          <label htmlFor="test">Monthly Sales Amount</label>
          <input type="text" placeholder="$" className="form-control" />
        </FormGroup>
      </div>
      <div className="col-md-6">
        <FormGroup>
          <label htmlFor="test">Monthly Volume Count</label>
          <input type="text" placeholder="$" className="form-control" />
        </FormGroup>
      </div>
    </Row>
  </form>
);

const footerContent = () => (
  <button type="button" className="btn btn-primary float-right">
    Next
  </button>
);

class ProcessingRequirements extends Component {
  componentDidMount() {}

  redirectAndSave(evt = {}, name) {
    const { onComponentRedirect } = this.props;
    onComponentRedirect(evt, name);
  }

  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <div className="col-md-4 offset-md-4">
              <Card
                title="Sales Estimate"
                content={CardContent()}
                footerContent={footerContent()}
              />
            </div>
          </Row>
        </Grid>
      </div>
    );
  }
}

ProcessingRequirements.defaultProps = {
  onComponentRedirect: () => {}
};

ProcessingRequirements.propTypes = {
  onComponentRedirect: PropTypes.func
};

export default ProcessingRequirements;
