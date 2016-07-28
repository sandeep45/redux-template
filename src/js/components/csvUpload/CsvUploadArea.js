import React, { PropTypes, Component } from 'react'

import {Link} from 'react-router';
import ProgressBar from '../ProgressBar'
import ErrorMessage from '../FetchError'


class CsvUploadArea extends React.Component {

  static propTypes = {
    updateCsvData: PropTypes.func.isRequired,
    isFetching: PropTypes.bool,
    errorMessage: PropTypes.string,
  };

  constructor(props){
    super(props);
    console.log(this._dropzone);
  };

  componentDidMount(){
    const dropbox = this._dropzone;
    dropbox.addEventListener("dragenter", this._dragenter, false);
    dropbox.addEventListener("dragover", this._dragover, false);
    dropbox.addEventListener("dragleave", this._dragleave, false);
    dropbox.addEventListener("drop", this._drop, false);
  };

  render() {
    const {errorMessage, isFetching } = this.props;
    return (
      <div className="panel panel-default" ref={c => this._dropzone = c}>
        <div className="panel-heading">
          Upload your CSS
        </div>
        <div className="panel-body" ref={c => this._dropzoneBody = c}>
          <div>
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
          </div>
        </div>
      </div>
    )
  }
  _buttonClicked = e => {
    this._file.click();
  }
  _handleSelectedFile = (e) => {
    this._handleFiles(e.target.files);
  }
  _dragenter = (e) => {
     e.stopPropagation();
     e.preventDefault();
     console.log("Enter");
     this._dropzoneBody.classList.add('bg-warning');
  }
  _dragover = (e) => {
    e.stopPropagation();
    e.preventDefault();
    console.log("Over");
    this._dropzoneBody.classList.add('bg-warning');
  }
  _dragleave = (e) => {
    e.stopPropagation();
    e.preventDefault();
    console.log("Leave");
    this._dropzoneBody.classList.remove('bg-warning');
  }
  _drop = (e) => {
    e.stopPropagation();
    e.preventDefault();
    console.log("Drop");
    this._dropzoneBody.classList.remove('bg-warning');
    var dt = e.dataTransfer;
    var files = dt.files;

    this._handleFiles(files);
  }
  _handleFiles = files => {
    const {updateCsvData} = this.props;
    const file = files[0];
    updateCsvData(file);
  }
}

export default CsvUploadArea