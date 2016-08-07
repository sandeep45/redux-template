import React, { PropTypes, Component } from 'react'

import NavLink from '../generic/NavLink';

import Logout from '../../containers/auth/Logout.js'

class NavigationLinks extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                    data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">Redux Template</a>
          </div>
          <div id="navbar" className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li> <NavLink to="/" onlyActiveOnIndex={true}>Home</NavLink> </li>
              <li> <NavLink to="/paginated_phone_numbers">Phone Book</NavLink> </li>
              <li> <NavLink to="/csv_uploader">Upload CSV</NavLink> </li>
              <li> <NavLink to="/image_uploader">Image Uploader</NavLink> </li>
              <li> <NavLink to="/my_chart">MyChart</NavLink> </li>
              <li> <NavLink to="/tab_nav">TabNav</NavLink> </li>
              <li> <NavLink to="/modal_playground">Modals</NavLink> </li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
            <li> <Logout /> </li>
            </ul>

          </div>
        </div>
      </nav>
    )
  };
}

NavigationLinks.propTypes = {
};

export default NavigationLinks

