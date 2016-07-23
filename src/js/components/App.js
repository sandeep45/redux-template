import React from 'react';
import NavigationLinks from './NavigationLinks.js'
require('../../css/app.css');

const App = (props) => {
  return(
    <div>
      <NavigationLinks />
      <div className="container">
        {props.children}
      </div>
    </div>

  )
}

export default App

