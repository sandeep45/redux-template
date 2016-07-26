import React, { PropTypes, Component } from 'react'
import {Link} from 'react-router';

require("jquery");

require("bootstrap/dist/css/bootstrap.css");
require("bootstrap/dist/css/bootstrap-theme.css");
require("bootstrap");
require('../../../css/login.css');

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
       <div className="container">
        <form className="form-signin" onSubmit={this._onSubmit}>
          <h2 className="form-signin-heading">Please sign in</h2>
          <p className="text-danger">{errorMessage}</p>
          <label for="inputEmail" className="sr-only">Email address</label>
          <input type="email" id="inputEmail" className="form-control first"
            placeholder="Email address" required autofocus
            ref={(c) => this._username = c} />
          <label for="inputPassword" className="sr-only">Password</label>
          <input type="password" id="inputPassword" className="form-control last"
            placeholder="Password" required
            ref={(c) => this._password = c} />
          {isFetching ? <ProgressBar /> : <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>}
          <div className="authLinks">
            <Link to="/signup">Sign Up</Link><br/>
            <Link to="/forgot_password">Forgot Your Password?</Link>
          </div>
        </form>
    </div>
    );
  };
  _onSubmit = (evt) => {
    evt.preventDefault();
    console.log("login has been clicked: ", this._username.value, this._password.value);
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

