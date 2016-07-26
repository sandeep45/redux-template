import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'

import LoginForm from '../../components/auth/LoginForm.js'

import * as actions from '../../actions'

import {getAuthenticationErrorMessage, getAttributeOfAuthenticatedUser,
  getAuthenticationIsFetching} from '../../reducers/'


const mapStateToProps = (state, ownProps) => {
  return {
    errorMessage: getAuthenticationErrorMessage(state),
    isFetching: getAuthenticationIsFetching(state),
    authToken: getAttributeOfAuthenticatedUser(state, "authentication_token")
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    doLogin: (email, password) => {
      dispatch(actions.loginUser(email,password));
    }
  }
};

const Login = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);

export default Login;

