import React, { PropTypes, Component } from 'react'
import MyHighchart from '../components/generic/MyHighChart'

import {connect} from 'react-redux'

import * as actions from '../actions'

import {getCsvDataHeaderFields, getCsvDataAllDataRows,
  getCsvDatatParsingErrors, getCsvDataFileName, getCsvDataIsFetching,
  getCsvDataErrorMessage} from '../reducers/'

const mapStateToProps = (state, ownProps) => {

  const headers= getCsvDataHeaderFields(state);
  const dataRows= getCsvDataAllDataRows(state);
  const parsingErrors= getCsvDatatParsingErrors(state);
  const fileName= getCsvDataFileName(state);

  const options = {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Csv Stats'
    },
    xAxis: {
        categories: ['Columns', 'Rows', 'errors']
    },
    yAxis: {
        title: {
            text: 'Count'
        }
    },
    series: [{
      name: fileName,
      data: [headers.length, dataRows.length, parsingErrors.length],
      // color: '#FF00FF'
    }]
  };


  return {
    options: options
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  };
};

class CsvStatChart extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return (
      <div>
        <div class="page-header">
          <h1>My Chart <small> / with Highcharts </small> </h1>
          <MyHighchart {...this.props} />
        </div>
      </div>
    );
  }
}

CsvStatChart = connect(mapStateToProps, mapDispatchToProps)(CsvStatChart);

export default CsvStatChart