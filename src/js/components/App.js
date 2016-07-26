import React from 'react';
import NavigationLinks from './NavigationLinks.js'

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

