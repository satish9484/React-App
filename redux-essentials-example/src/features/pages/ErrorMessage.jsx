import React from "react";

import PropTypes from "prop-types";

const ErrorMessage = ({ message }) => {
  ErrorMessage.propTypes = {
    message: PropTypes.string,
  };
 
  return <article className="prose-p:text-blue-600 text-lg">{message}</article>;

 
};

export default ErrorMessage;
