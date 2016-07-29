import React, { PropTypes } from 'react'

import DropableZone from './generic/DropableZone'

const HelloWorld = (props) => {

  return(
    <div class="well">
      <h1>Hello World</h1>
      <DropableZone dropHandler={() => {}}>
        Contents
      </DropableZone>
    </div>
  )
};

HelloWorld.propTypes = {
};

export default HelloWorld
