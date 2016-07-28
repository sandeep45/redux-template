import React, { PropTypes } from 'react';

const ProgressBar = ({ message, onRetry }) => (
  <div className="progress" style={{width: 200}}>
    <div className="progress-bar progress-bar-striped active" role="progressbar"
       aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{width: "100%"}}>
    </div>
  </div>
);

ProgressBar.propTypes = {
};

export default ProgressBar;