import React, { PropTypes, Component } from 'react'

import {Link} from 'react-router';
import ProgressBar from '../ProgressBar'
import ErrorMessage from '../FetchError'
import DropableZone from '../generic/DropableZone'

class ImageUploadArea extends React.Component {

  static propTypes = {
    updateImageFile: PropTypes.func.isRequired,
    imageProcessorStatus: PropTypes.bool,
    imageProcessorError: PropTypes.string,
  };

  constructor(props){
    super(props);
  };

  render() {
    const {imageProcessorError, imageProcessorStatus } = this.props;
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          Upload Images
        </div>
        <DropableZone className="panel-body" dropHandler={this._handleFiles} hoverClassName="bg-danger">
          <p className="text-danger">
            {imageProcessorError ? imageProcessorError : ""}
          </p>
          <input type="file" accept="image/*"
            style={{display:"none"}}
            ref={(c) => this._file = c}
            onChange={this._handleSelectedFile} />
          {imageProcessorStatus ? <ProgressBar /> :  <input type="button" className="btn btn-primary" value="Upload Images" onClick={this._buttonClicked} />}
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
    const {updateImageFile} = this.props;

    const file = files[0];
    console.log(file);

    updateImageFile(file);

  }
}

export default ImageUploadArea