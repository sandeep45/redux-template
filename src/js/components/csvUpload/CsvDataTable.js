import React, { PropTypes, Component } from 'react'

import {Link} from 'react-router';

class CsvDataTable extends React.Component {

  static propTypes = {
    headers: PropTypes.array.isRequired,
    dataRows: PropTypes.array.isRequired,
  };

  constructor(props){
    super(props);
  };

  render() {
    const {headers, dataRows} = this.props;
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          CSV Data Table
        </div>
        <div className="panel-body">
          <table className="table table-bordered table-hover table-condensed">
            <thead>
              <tr>
                {headers.map( header => {
                  return (
                    <th key={header}> {header}</th>
                  );
                })
                }
              </tr>
            </thead>
            <tbody>
              {dataRows.map( dataRow => {
                return (
                  <tr key={dataRow.id}>
                    {headers.map( header => {
                      return (
                        <td key={header}> {dataRow[header]}</td>
                      );
                    })
                    }
                  </tr>
                );
              })
              }
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default CsvDataTable