import React, { PropTypes, Component } from 'react'
import {Link} from 'react-router';

import ProgressBar from '../ProgressBar.js'

export default class LoginForm extends Component {
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
      <form className="form-signin" onSubmit={this._onSubmit}>
        <h2 className="form-signin-heading">Please sign in</h2>
        <p className="text-danger">{errorMessage}</p>
        <label for="inputEmail" className="sr-only">Email address</label>
        <input type="email" className="form-control first" name="email"
          placeholder="Email address" required autofocus
          ref={(c) => this._username = c} />
        <label for="inputPassword" className="sr-only">Password</label>
        <input type="password" className="form-control last" name="password"
          placeholder="Password" required
          ref={(c) => this._password = c} />
        {isFetching ? <ProgressBar /> : <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>}
        <div className="authLinks">
          <Link to="/auth/signup">Sign Up</Link><br/>
          <Link to="/auth/forgot_password">Forgot Your Password?</Link>
        </div>
      </form>
    );
  };
  _onSubmit = (evt) => {
    evt.preventDefault();
    console.log("login has been clicked: ", this._username.value, this._password.value);
    console.log("login has been clicked: ", evt.target.elements.namedItem("email").value,
      evt.target.elements.namedItem("password").value);

    if(this._username.value && this._password.value){
      this.props.doLogin(this._username.value, this._password.value);
    }
  }
}

LoginForm.propTypes = {
  errorMessage: PropTypes.string,
  authToken: PropTypes.string,
  isFetching: PropTypes.bool,
  doLogin: PropTypes.func.isRequired
}

LoginForm.contextTypes= {
    router: React.PropTypes.object
  }

