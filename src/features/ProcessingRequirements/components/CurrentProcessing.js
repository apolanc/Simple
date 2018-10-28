import React from "react";
import PropTypes from "prop-types";
import TagsInput from "react-tagsinput";

import { Row, FormGroup } from "../../../common";
import "react-tagsinput/react-tagsinput.css";

const CurrentProcessing = ({ tags, handleChange }) => (
  <form>
    <hr />
    <fieldset>
      <legend>Current Processing</legend>
      <Row>
        <div className="col-md-12">
          <FormGroup>
            <label htmlFor="test">
              This business has processed credit cards before
            </label>
            <input type="checkbox" style={{ marginLeft: 15 }} />
          </FormGroup>
        </div>
        <div className="col-md-12">
          <FormGroup>
            <label className="control-label" htmlFor="test">
              Current Processors
            </label>
            <TagsInput value={tags} onChange={e => handleChange(e, "tags")} />
          </FormGroup>
        </div>
      </Row>
    </fieldset>
  </form>
);

CurrentProcessing.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleChange: PropTypes.func.isRequired
};

export default CurrentProcessing;
