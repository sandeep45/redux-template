import React, { PropTypes, Component } from 'react'
import NavigationLinks from './nav/NavigationLinks.js'
import DropableZone from './generic/DropableZone'
import {Link} from 'react-router';
import Logout from '../containers/auth/Logout.js'

class App extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <DropableZone dropHandler={() => {}} hoverClassName="blank">
        <NavigationLinks />
        <div className="container app-container">
          {this.props.children}
        </div>
      </DropableZone>
    )
  };
}

export default App

