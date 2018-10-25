import "react-datepicker/dist/react-datepicker.css";

import React, { Fragment } from "react";
import moment from "moment";
import PropTypes from "prop-types";
import MomentPropTypes from "react-moment-proptypes";
import DatePickerComp from "react-datepicker";

const DatePicker = props => {
  const { handleChange } = props;
  return (
    <Fragment>
      <style>{".react-datepicker-wrapper{width: 100%}"}</style>
      <DatePickerComp {...props} onChange={handleChange} />
    </Fragment>
  );
};

DatePicker.defaultProps = {
  format: "MM/DD/YYYY",
  className: "",
  selected: moment(),
  handleChange: () => undefined
};

DatePicker.propTypes = {
  format: PropTypes.string,
  className: PropTypes.string,
  handleChange: PropTypes.func,
  selected: MomentPropTypes.momentObj
};

export default DatePicker;
