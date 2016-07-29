import React, { PropTypes, Component } from 'react'

import {Link} from 'react-router';
import ProgressBar from '../ProgressBar'
import ErrorMessage from '../FetchError'
import DropableZone from '../generic/DropableZone'

class CsvUploadArea extends React.Component {

  static propTypes = {
    updateCsvData: PropTypes.func.isRequired,
    isFetching: PropTypes.bool,
    errorMessage: PropTypes.string,
  };

  constructor(props){
    super(props);
  };

  render() {
    const {errorMessage, isFetching } = this.props;
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          Upload your CSS
        </div>
        <DropableZone dropHandler={this._handleFiles} className="panel-body">
          <input type="file" accept="text/*"
            style={{display:"none"}}
            ref={(c) => this._file = c}
            onChange={this._handleSelectedFile} />
          <p className="text-danger">
            {errorMessage ? errorMessage : ""}
          </p>
          {isFetching ? <ProgressBar /> :
          <input type="button" className="btn btn-primary" value="Upload CSV"
            onClick={this._buttonClicked}/>
          }
        </DropableZone>
      </div>
    )
  }
  _buttonClicked = e => {
    this._file.click();
  }
  _handleSelectedFile = (e) => {
    this._handleFiles(e.target.files);
  }
  _handleFiles = files => {
    const {updateCsvData} = this.props;
    const file = files[0];
    updateCsvData(file);
  }
}

export default CsvUploadArea