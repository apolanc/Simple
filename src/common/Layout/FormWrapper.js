import React, { Component, Fragment } from "react";

function formWrapper(Form) {
  return class Wrapper extends Component {
    constructor(props) {
      super(props);

      this.state = { formInstance: undefined };
    }

    getFormInstance(instance) {
      const { formInstance } = this.state;

      if (
        !instance ||
        (formInstance &&
          instance.props.location.pathname ===
            formInstance.props.location.pathname)
      ) {
        return;
      }

      this.setState({ formInstance: instance });
    }

    render() {
      const props = Object.assign({}, this.props, {
        ref: this.getFormInstance.bind(this)
      });

      const { formInstance } = this.state;

      return (
        <Fragment>
          <div className="content">
            <Form {...props} />
          </div>
          <div className="footer">
            {formInstance &&
              formInstance.handleBack && (
                <button
                  type="button"
                  className="btn btn-primary float-left"
                  onClick={() => formInstance.handleBack()}
                >
                  Back
                </button>
              )}
            {formInstance &&
              formInstance.handleNext && (
                <button
                  type="button"
                  className="btn btn-primary float-right"
                  onClick={() => formInstance.handleNext()}
                >
                  Next
                </button>
              )}
          </div>
        </Fragment>
      );
    }
  };
}

export default formWrapper;
