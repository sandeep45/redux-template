import React, { PropTypes, Component } from 'react'
import NavigationLinks from './NavigationLinks.js'
import DropableZone from './generic/DropableZone'

class App extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <DropableZone dropHandler={() => {}} hoverClassName="blank">
        <NavigationLinks />
        <div className="container">
          {this.props.children}
        </div>
      </DropableZone>
    )
  };
}

export default App

