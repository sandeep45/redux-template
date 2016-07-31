import React, { PropTypes, Component } from 'react'

import {Link} from 'react-router';
import NavLink from './generic/NavLink';


class BottomNav extends Component{

  constructor(props){
    super(props)
  }

  render(){
    const backUrl = this._getBackUrl();
    const forwardUrl = this._getForwardUrl();
    return(
      <div>
      {this.props.children}
      <nav className="navbar navbar-inverse navbar-fixed-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <ul className="nav navbar-nav">
                <li> {backUrl ? <Link to={backUrl}>Back</Link> : ""} </li>
              </ul>
            </div>
            <div className="col-md-4">
              <ul className="nav navbar-nav">
                <li> <NavLink to="/csv_uploader">Upload CSV</NavLink> </li>
                <li> <NavLink to="/image_uploader">Image Uploader</NavLink> </li>
              </ul>
            </div>
            <div className="col-md-4">
              <ul className="nav navbar-nav navbar-right">
                <li> {forwardUrl ? <Link to={forwardUrl}>Next</Link> : "" } </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      </div>
    )
  };

  _getBackUrl = () => {
    const pathname = this.props.location.pathname;
    switch(pathname){
      case "/csv_uploader":
        return null;
      case "/image_uploader":
        return "/csv_uploader"
      default:
        return null;
    }
  };

  _getForwardUrl = () => {
    const pathname = this.props.location.pathname;
    switch(pathname){
      case "/csv_uploader":
        return "/image_uploader";
      case "/image_uploader":
        return null;
      default:
        return null;
    }
  };

}

BottomNav.propTypes = {
};

export default BottomNav

