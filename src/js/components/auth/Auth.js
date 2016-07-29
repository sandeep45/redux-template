import React, { PropTypes, Component } from 'react'
import {Link} from 'react-router';

export default class Auth extends Component {
  constructor(props){
    super(props);
  };
  render(){
    return(
      <div className="container auth-container">
        {this.props.children}
      </div>
    );
  };
}