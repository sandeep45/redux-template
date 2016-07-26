import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'

import ForgotPasswordForm from '../../components/auth/ForgotPasswordForm.js'

import * as actions from '../../actions'

import {getAuthenticationErrorMessage,
  getAuthenticationIsFetching, getAuthenticationForgotPasswordCompleted} from '../../reducers/'

const mapStateToProps = (state, ownProps) => {
  return {
    errorMessage: getAuthenticationErrorMessage(state),
    isFetching: getAuthenticationIsFetching(state),
    forgotPasswordCompleted: getAuthenticationForgotPasswordCompleted(state)
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    doForgotPassword: (email) => {
      dispatch(actions.forgotPassword(email));
    }
  }
};

const Login = connect(
  mapStateToProps,
  mapDispatchToProps
)(ForgotPasswordForm);

export default Login;

