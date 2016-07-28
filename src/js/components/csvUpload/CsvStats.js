import React, { PropTypes, Component } from 'react'

import {Link} from 'react-router';

class CsvStats extends React.Component {

  static propTypes = {
    headers: PropTypes.array.isRequired,
    dataRows: PropTypes.array.isRequired,
    parsingErrors: PropTypes.array.isRequired,
    headers: PropTypes.array.isRequired,
    fileName: PropTypes.string.isRequired,
  };

  constructor(props){
    super(props);
  };

  render() {
    const {headers,dataRows,parsingErrors,fileName} = this.props;
    return (
      <div>
        <h3>CSV Stats</h3>
        <table className="table table-bordered table-hover table-condensed">
          <thead>
            <tr>
              <th>Item</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Name: </td>
              <td>{fileName}</td>
            </tr>
            <tr>
              <td>Column Count: </td>
              <td>{headers.length}</td>
            </tr>
            <tr>
              <td>Rows Count: </td>
              <td>{dataRows.length}</td>
            </tr>
            <tr>
              <td>Parsing Errors Count: </td>
              <td>{parsingErrors.length}</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default CsvStats