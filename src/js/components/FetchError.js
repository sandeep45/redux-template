import React, { PropTypes } from 'react';

const FetchError = ({ message, onRetry }) => (
  <div>
    <p>Error while fetching data. {message}</p>
    <button onClick={onRetry}>Retry</button>
  </div>
);

FetchError.propTypes = {
  message: PropTypes.string.isRequired,
  onRetry: PropTypes.func.isRequired,
};

export default FetchError;