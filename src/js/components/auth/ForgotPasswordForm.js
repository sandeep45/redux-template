import React, { PropTypes, Component } from 'react'
import {Link} from 'react-router';

import ProgressBar from '../ProgressBar.js'

export default class ForgotPasswordForm extends Component {
  constructor(props){
    super(props);
  };
  render(){
    const {errorMessage, isFetching, forgotPasswordCompleted} = this.props;
    return(
      <form className="form-signin" onSubmit={this._onSubmit}>
        <h2 className="form-signin-heading">Forgot yourr password?</h2>
        <p className="text-danger">{errorMessage}</p>
        {forgotPasswordCompleted ? <p className="text-primary">Sent. Check your email.</p> : "" }
        <label for="inputEmail" className="sr-only">Email address</label>
        <input type="email" id="inputEmail" className="form-control single"
          placeholder="Email address" required autofocus
          ref={(c) => this._username = c} />
        {isFetching ? <ProgressBar /> : <button className="btn btn-lg btn-primary btn-block" type="submit">Submit</button>}
        <div className="authLinks">
          <Link to="/auth/login">Sign In</Link><br/>
          <Link to="/auth/signup">Sign Up</Link><br/>
        </div>
      </form>
    );
  };
  _onSubmit = (evt) => {
    evt.preventDefault();
    console.log("login has been clicked: ", this._username.value);
    if(this._username.value){
      this.props.doForgotPassword(this._username.value);
    }
  }
}

ForgotPasswordForm.propTypes = {
  errorMessage: PropTypes.string,
  isFetching: PropTypes.bool,
  forgotPasswordCompleted: PropTypes.bool,
  doForgotPassword: PropTypes.func.isRequired
}