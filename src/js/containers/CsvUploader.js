import React, { PropTypes, Component } from 'react'

import {connect} from 'react-redux'

import * as actions from '../actions'

import CsvUploadArea from '../components/csvUpload/CsvUploadArea'
import CsvHeadersTable from '../components/csvUpload/CsvHeadersTable'
import CsvDataTable from '../components/csvUpload/CsvDataTable'
import CsvHeaderWithSampleDataTable from '../components/csvUpload/CsvHeaderWithSampleDataTable'
import CsvStats from '../components/csvUpload/CsvStats'


import {getCsvDataHeaderFields, getCsvDataAllDataRows,
  getCsvDatatParsingErrors, getCsvDataFileName, getCsvDataIsFetching,
  getCsvDataErrorMessage} from '../reducers/'

const mapStateToProps = (state, ownProps) => {
  return {
    headers: getCsvDataHeaderFields(state),
    dataRows: getCsvDataAllDataRows(state),
    parsingErrors: getCsvDatatParsingErrors(state),
    fileName: getCsvDataFileName(state),
    isFetching: getCsvDataIsFetching(state),
    errorMessage: getCsvDataErrorMessage(state)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateCsvData: (csvData) => {
      dispatch(actions.updateCsvData(csvData))
    }
  };
};

class CsvUploader extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return (
      <div>
        <div class="page-header">
          <h1>CSV Example <small>/ processing & UI</small></h1>
        </div>
        <CsvUploadArea {...this.props} />
        <CsvDataTable {...this.props} />
        <CsvStats {...this.props} />
        <CsvHeadersTable {...this.props} />
        <CsvHeaderWithSampleDataTable {...this.props} />
      </div>
    );
  }
}

CsvUploader = connect(mapStateToProps, mapDispatchToProps)(CsvUploader);

export default CsvUploader