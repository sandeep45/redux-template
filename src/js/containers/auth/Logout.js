import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router';


import * as actions from '../../actions'
import {getAttributeOfAuthenticatedUser} from '../../reducers/'

const mapStateToProps = (state, ownProps) => {
  return {
    email: getAttributeOfAuthenticatedUser(state, "email")
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    doLogout: () => {
      dispatch(actions.logoutUser());
    }
  }
};

class Logout extends Component {
  constructor(props){
    super(props);
  };
  render(){
    return (
      <div style={{paddingTop:15}}>
        Logged in as {this.props.email}, <Link to="/login" onClick={this._logoutClicked}>Logout</Link>
      </div>
    );
  };
  _logoutClicked = () => {
    this.props.doLogout();
  };
}

Logout = connect(
  mapStateToProps,
  mapDispatchToProps
)(Logout);

export default Logout;

