import React, { Component } from "react";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";



export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: "", errorInof: "" };
    // this.logErrorToMyService = this.logErrorToMyService.bind(this);
  }

  // eslint-disable-next-line no-unused-vars
  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, errorInfo);

    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
  }

  render() {
    const refreshPage = () => {
      window.location.reload();
    };

    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <>
          <div className="bg-red-200 flex flex-col gap-4 h-screen justify-center align-middle place-content-center">
            <h1 className="m-2 text-center text-3xl">Something went wrong.</h1>
            <button
              type="button"
              onClick={refreshPage}
              className="m-2 p-2 self-center w-fit uppercase text-red-600 border-2 border-sky-500 rounded-md"
            >
              <Link to="/" refresh="true">
                Refresh
              </Link>
            </button>
          </div>
        </>
      );
    }

    return this.props.children;
  }
}


ErrorBoundary.propTypes = {
  children: PropTypes.shape({
    optionalProperty: PropTypes.oneOfType([PropTypes.string,PropTypes.bool]),
     })
};