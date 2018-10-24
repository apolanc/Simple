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
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">
                  $
                </span>
              </div>
              <input type="text" className="form-control" />
            </div>
          </FormGroup>
        </div>
        <div className="col-md-6">
          <FormGroup>
            <label className="control-label" htmlFor="test">
              Monthly Volume Count
            </label>
            <div className="input-group mb-3">
              <input type="text" className="form-control" />
              <div className="input-group-append">
                <span className="input-group-text" id="basic-addon2">
                  TX
                </span>
              </div>
            </div>
          </FormGroup>
        </div>
        <div className="col-md-4">
          <FormGroup>
            <label className="control-label" htmlFor="test">
              Ticket Avg
            </label>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">
                  $
                </span>
              </div>
              <input type="text" className="form-control" />
            </div>
          </FormGroup>
        </div>
        <div className="col-md-4">
          <FormGroup>
            <label className="control-label" htmlFor="test">
              Ticket Minimun
            </label>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">
                  $
                </span>
              </div>
              <input type="text" className="form-control" />
            </div>
          </FormGroup>
        </div>
        <div className="col-md-4">
          <FormGroup>
            <label className="control-label" htmlFor="test">
              Ticket Maximun
            </label>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">
                  $
                </span>
              </div>
              <input type="text" className="form-control" />
            </div>
          </FormGroup>
        </div>
        <div className="col-md-6">
          <FormGroup>
            <label className="control-label" htmlFor="test">
              Monthly chargeback Amount
            </label>
            <div className="input-group mb-3">
              <input type="text" className="form-control" />
              <div className="input-group-append">
                <span className="input-group-text" id="basic-addon2">
                  %
                </span>
              </div>
            </div>
          </FormGroup>
        </div>
        <div className="col-md-6">
          <FormGroup>
            <label className="control-label" htmlFor="test">
              Monthly chargeback Count
            </label>
            <div className="input-group mb-3">
              <input type="text" className="form-control" />
              <div className="input-group-append">
                <span className="input-group-text" id="basic-addon2">
                  %
                </span>
              </div>
            </div>
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
        <textarea rows={4} className="form-control" />
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
            <div className="col-md-6 offset-md-3">
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
