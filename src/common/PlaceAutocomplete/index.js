import React from "react";
import PropTypes from "prop-types";
import PlacesAutocomplete, {
  geocodeByAddress
} from "react-places-autocomplete";

class PlaceAutocomplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = { address: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleChange(address) {
    this.setState({ address });
  }

  handleSelect(address) {
    const { handleSelect } = this.props;

    geocodeByAddress(address)
      .then(handleSelect)
      .catch(error => console.error("Error", error));
  }

  render() {
    const { address } = this.state;

    return (
      <PlacesAutocomplete
        value={address}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input
              {...getInputProps({
                placeholder: "e.g. 123 Kingston Road",
                className: "form-control"
              })}
            />
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? "suggestion-item--active"
                  : "suggestion-item";
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: "#fafafa", cursor: "pointer" }
                  : { backgroundColor: "#ffffff", cursor: "pointer" };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    );
  }
}

PlaceAutocomplete.propTypes = {
  handleSelect: PropTypes.func.isRequired
};

export default PlaceAutocomplete;
