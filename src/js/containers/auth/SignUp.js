import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'

import SignupForm from '../../components/auth/SignupForm.js'

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
    doSignup: (email, password, password_confirmation) => {
      dispatch(actions.signupUser(email,password, password_confirmation));
    }
  }
};

const SignUp = connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm);

export default SignUp;

