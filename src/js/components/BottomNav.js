import React, { PropTypes, Component } from 'react'

import {Link} from 'react-router';

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
                <li> <Link to="/bottom_nav/csv_uploader">Upload CSV</Link> </li>
                <li> <Link to="/bottom_nav/image_uploader">Image Uploader</Link> </li>
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
      case "/bottom_nav/csv_uploader":
        return null;
      case "/bottom_nav/image_uploader":
        return "/bottom_nav/csv_uploader"
      default:
        return null;
    }
  };

  _getForwardUrl = () => {
    const pathname = this.props.location.pathname;
    switch(pathname){
      case "/bottom_nav/csv_uploader":
        return "/bottom_nav/image_uploader";
      case "/bottom_nav/image_uploader":
        return null;
      default:
        return null;
    }
  };

}

BottomNav.propTypes = {
};

export default BottomNav

