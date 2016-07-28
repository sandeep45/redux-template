import React, { PropTypes, Component } from 'react'

import {Link} from 'react-router';

class CsvHeadersTable extends React.Component {

  static propTypes = {
    headers: PropTypes.array.isRequired
  };

  constructor(props){
    super(props);
  };

  render() {
    const {headers} = this.props;
    return (
      <div>
        <h3>Headers</h3>
        <table className="table table-bordered table-hover table-condensed">
          <thead>
            <tr><th>Name</th></tr>
          </thead>
          <tbody>
          {headers.map( header => {
            return (
              <tr key={header}><td> {header}</td></tr>
            );
          })
          }
          </tbody>
        </table>
      </div>
    )
  }
}

export default CsvHeadersTable