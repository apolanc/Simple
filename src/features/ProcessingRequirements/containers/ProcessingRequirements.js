import React, { Component } from "react";
import ReactRouterPropTypes from "react-router-prop-types";

// import { PRequirementsForm, PRequirementsSlider } from "../components";
import { Row, FormGroup, formWrapper } from "../../../common";

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
              Ticket Minimum
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
              Ticket Maximum
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

class ProcessingRequirements extends Component {
  handleNext() {
    const { history } = this.props;
    history.push("/dashboard/business-information");
  }

  render() {
    return <CardContent />;
  }
}

ProcessingRequirements.defaultProps = {
  onComponentRedirect: () => {}
};

ProcessingRequirements.propTypes = {
  history: ReactRouterPropTypes.history.isRequired
};

export default formWrapper(ProcessingRequirements);
