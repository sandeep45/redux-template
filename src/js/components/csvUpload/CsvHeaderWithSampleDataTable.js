import React, { PropTypes, Component } from 'react'

import {Link} from 'react-router';

class CsvHeaderWithSampleDataTable extends React.Component {

  static propTypes = {
    headers: PropTypes.array.isRequired,
    dataRows: PropTypes.array.isRequired,
  };

  constructor(props){
    super(props);
  };

  render() {
    const {headers, dataRows} = this.props;
    const fewDataRows = dataRows.slice(0,10);
    return (
      <div>
        <h3>CSV Headers with Sample Data</h3>
        <table className="table table-bordered table-hover table-condensed">
          <thead>
            <tr>
              <th> Header </th>
              <th> Sample Data</th>
            </tr>
          </thead>
          <tbody>
            {headers.map( header => {
              return (
                <tr key={header}>
                  <td> {header} </td>
                  <td> {fewDataRows.map(row => row[header]).join(", ")} </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    )
  }
}

export default CsvHeaderWithSampleDataTable