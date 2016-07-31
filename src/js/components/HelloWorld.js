import React, { PropTypes } from 'react'
import NavLink from './generic/NavLink';

import DropableZone from './generic/DropableZone'

const HelloWorld = (props) => {

  return(
    <div>
      <div className="well">
        <h1>Hello World</h1>
      </div>

    </div>
  )
};

HelloWorld.propTypes = {
};

export default HelloWorld
