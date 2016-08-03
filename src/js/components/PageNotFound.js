import React, { PropTypes, Component } from 'react'

import { Link } from 'react-router'

class PageNotFound extends React.Component {
  render () {
    return (
      <div>
        <div className='page-header'>
          <h1>Page Not Found.</h1>
        </div>
        <p>
          Go to
          <Link to='/'> Home Page
          </Link>
        </p>
      </div>
    )
  }
}

export default PageNotFound
