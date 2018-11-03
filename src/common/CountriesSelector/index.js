import React, { Fragment } from "react";
import PropTypes from "prop-types";
import ReactCountriesInput from "react-countries-input";

const CountriesSelector = ({ handleChange }) => (
  <Fragment>
    <style>{".css-pwegsk{height: 100% !important}"}</style>
    <ReactCountriesInput
      onChange={handleChange}
      inputStyle={{ display: "none" }}
      containerStyle={{ width: "100%" }}
      flagStyle={{ height: "calc(2.25rem + 2px)" }}
      selectWrapperStyle={{ height: "calc(2.25rem + 2px)" }}
    />
  </Fragment>
);

CountriesSelector.defaultProps = {
  handleChange: () => undefined
};

CountriesSelector.propTypes = {
  handleChange: PropTypes.func
};

export default CountriesSelector;
