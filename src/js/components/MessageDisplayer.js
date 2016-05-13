import React, { PropTypes } from 'react'

const MessagseDisplayer = (props) => {

  const { theMessage } = props;

  return(
    <h1>Message: {theMessage}</h1>
  )
};

MessagseDisplayer.propTypes = {
  theMessage: PropTypes.string.isRequired
};

export default MessagseDisplayer
