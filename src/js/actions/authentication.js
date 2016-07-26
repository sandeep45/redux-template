import * as WebUtil from "../config/WebUtil.js"
import axios from 'axios';
import K from "../constants/"
import * as MySchema from '../config/MySchema'
import {normalize} from 'normalizr'
import {addAuthTokenInAjax, removeAuthTokenInAjax} from '../config/helpers.js'
import { hashHistory } from 'react-router';


export const loginUser = (email, password) => (dispatch, getState) => {

  dispatch({
    type: K.DO_LOGIN
  });

  return WebUtil.doUserSignIn(email,password).then(
    response => {
      addAuthTokenInAjax(response.data.email, response.data.authentication_token);
      dispatch({
        type: K.DO_LOGIN,
        payload: normalize(response.data, MySchema.user)
      });
    },
    response => {
      dispatch({
        type: K.DO_LOGIN,
        payload: new Error("error doing login: " + response.status),
        error: true,
      });
    }
  );

  // hashHistory.push("/forgot_password")

}

export const logoutUser = () => {
  removeAuthTokenInAjax();
  return {
    type: K.DO_LOGOUT
  }
}

export const signupUser = (email, password, password_confirmation) => (dispatch, getState) => {

  dispatch({
    type: K.DO_SIGNUP
  });

  return WebUtil.doUserSignUp(email,password,password_confirmation).then(
    response => {
      addAuthTokenInAjax(response.data.email, response.data.authentication_token);
      dispatch({
        type: K.DO_SIGNUP,
        payload: normalize(response.data, MySchema.user)
      });
    },
    response => {
      dispatch({
        type: K.DO_SIGNUP,
        payload: new Error("error doing sign up: " + response.status),
        error: true,
      });
    }
  );

}

export const forgotPassword = (email) => (dispatch, getState) => {

  dispatch({
    type: K.DO_FORGOT_PASSWORD
  });

  return WebUtil.doForgotPassword(email).then(
    response => {
      dispatch({
        type: K.DO_FORGOT_PASSWORD,
        payload: {
          forgotPasswordCompleted: true
        }
      });
    },
    response => {
      dispatch({
        type: K.DO_FORGOT_PASSWORD,
        payload: new Error("error doing forgot password: " + response.status),
        error: true,
      });
    }
  );

}