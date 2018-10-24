import React, { Component } from "react";
import PropTypes from "prop-types";

// import { PRequirementsForm, PRequirementsSlider } from "../components";
import { Card, Grid, Row, FormGroup } from "../../../common";

const CardContent = () => (
  <form>
    <hr />
    <fieldset>
      <legend>Sales Estimate</legend>
      <Row>
        <div className="col-md-6">
          <FormGroup>
            <label className="control-label" htmlFor="test">
              Monthly Sales Amount
            </label>
            <input type="text" className="form-control" />
          </FormGroup>
        </div>
        <div className="col-md-6">
          <FormGroup>
            <label className="control-label" htmlFor="test">
              Monthly Volume Count
            </label>
            <input type="text" className="form-control" />
          </FormGroup>
        </div>
        <div className="col-md-4">
          <FormGroup>
            <label className="control-label" htmlFor="test">
              Ticket Avg
            </label>
            <input type="text" className="form-control" />
          </FormGroup>
        </div>
        <div className="col-md-4">
          <FormGroup>
            <label className="control-label" htmlFor="test">
              Ticket Minimun
            </label>
            <input type="text" className="form-control" />
          </FormGroup>
        </div>
        <div className="col-md-4">
          <FormGroup>
            <label className="control-label" htmlFor="test">
              Ticket Maximun
            </label>
            <input type="text" className="form-control" />
          </FormGroup>
        </div>
        <div className="col-md-6">
          <FormGroup>
            <label className="control-label" htmlFor="test">
              Monthly chargeback Amount
            </label>
            <input type="text" className="form-control" />
          </FormGroup>
        </div>
        <div className="col-md-6">
          <FormGroup>
            <label className="control-label" htmlFor="test">
              Monthly chargeback Count
            </label>
            <input type="text" className="form-control" />
          </FormGroup>
        </div>
      </Row>
    </fieldset>
    <hr />
    <fieldset>
      <legend>Current Processing</legend>
      <FormGroup>
        <label htmlFor="test">
          This business has processed credit cards before
        </label>
        <input type="checkbox" style={{ marginLeft: 15 }} />
      </FormGroup>

      <FormGroup>
        <label className="control-label" htmlFor="test">
          Current Processors
        </label>
        <input type="textarea" className="form-control" />
      </FormGroup>
    </fieldset>
    <hr />
    <fieldset>
      <legend>Payment Methods</legend>
    </fieldset>
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
                title="Processing Requirements"
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
