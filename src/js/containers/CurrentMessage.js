import { connect } from 'react-redux'

import MessageDisplayer from '../components/MessageDisplayer.js'

const mapStateToProps = (state, ownProps) => {
  return {
    theMessage : state.reducer1
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {

  }
};

const CurrentMessage = connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageDisplayer);

export default CurrentMessage;

