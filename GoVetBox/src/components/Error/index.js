import React from "react";
import "./error.scss";

import { LS_AUTHTOKEN, LS_USER } from "../../constants/index";

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    // It will update the state so the next render shows the fallback UI.
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    localStorage.removeItem(LS_AUTHTOKEN);
    localStorage.removeItem(LS_USER);
    // It will catch error in any component below. We can also log the error to an error reporting service.
    console.log("error : ", error);
  }
  render() {
    if (this.state.hasError) {
      return (
        <>
          <div className="heading">
            <h1>Oops , Something is wrong ...</h1>
            <h3>Please Refresh</h3>
            {/* </div>
          <div className="content"> */}
            {/* <Link to={"/"}> */}
            <a href="/">
              <button className="glow-on-hover" type="button">
                Go Back
              </button>
            </a>
            {/* </Link> */}
          </div>
        </>
      );
    }
    return this.props.children;
  }
}
