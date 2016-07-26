import React, { PropTypes, Component } from 'react'
import {Link} from 'react-router';

import ProgressBar from '../ProgressBar.js'

export default class SignupForm extends Component {
  constructor(props){
    super(props);
  };
  componentWillReceiveProps(nextProps){
    if(nextProps.authToken){
      this.context.router.push("/");
    }
  };
  render(){
    const {errorMessage, isFetching} = this.props;
    return(
       <div className="container">
        <form className="form-signin" onSubmit={this._onSubmit}>
          <h2 className="form-signin-heading">Please sign up</h2>
          <p className="text-danger">{errorMessage}</p>
          <label for="inputEmail" className="sr-only">Email address</label>
          <input type="email" id="inputEmail" className="form-control first"
            placeholder="Email address" required autofocus
            ref={(c) => this._username = c} />
          <input type="password" id="inputEmail" className="form-control middle"
            placeholder="Password" required autofocus
            ref={(c) => this._password_confirmation = c} />
          <label for="inputPassword" className="sr-only">Password</label>
          <input type="password" id="inputPassword" className="form-control last"
            placeholder="Password" required
            ref={(c) => this._password = c} />
          {isFetching ? <ProgressBar /> : <button className="btn btn-lg btn-primary btn-block" type="submit">Sign up</button>}
          <div className="authLinks">
            <Link to="/login">Sign In</Link><br/>
            <Link to="/forgot_password">Forgot Your Password?</Link>
          </div>
        </form>
    </div>
    );
  };
  _onSubmit = (evt) => {
    evt.preventDefault();
    console.log("login has been clicked: ", this._username.value, this._password.value, this._password_confirmation.value);
    if(this._username.value && this._password.value && this._password_confirmation.value){
      this.props.doSignup(this._username.value, this._password.value, this._password_confirmation.value);
    }
  }
}

SignupForm.propTypes = {
  errorMessage: PropTypes.string,
  authToken: PropTypes.string,
  isFetching: PropTypes.bool,
  doSignup: PropTypes.func.isRequired
}

SignupForm.contextTypes= {
    router: React.PropTypes.object
  }

