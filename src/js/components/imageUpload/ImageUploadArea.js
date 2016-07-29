import React, { PropTypes, Component } from 'react'

import {Link} from 'react-router';
import ProgressBar from '../ProgressBar'
import ErrorMessage from '../FetchError'


class ImageUploadArea extends React.Component {

  static propTypes = {
    updateImageFile: PropTypes.func.isRequired,
    imageProcessorStatus: PropTypes.bool,
    imageProcessorError: PropTypes.string,
  };

  constructor(props){
    super(props);
  };

  componentDidMount(){
    const dropbox = this._dropzone;
    dropbox.addEventListener("dragenter", this._dragenter, false);
    dropbox.addEventListener("dragover", this._dragover, false);
    dropbox.addEventListener("dragleave", this._dragleave, false);
    dropbox.addEventListener("drop", this._drop, false);
  };

  render() {
    const {imageProcessorError, imageProcessorStatus } = this.props;
    return (
      <div className="panel panel-default" ref={c => this._dropzone = c}>
        <div className="panel-heading">
          Upload Images
        </div>
        <div className="panel-body" ref={c => this._dropzoneBody = c}>
          <div>
            <p className="text-danger">
              {imageProcessorError ? imageProcessorError : ""}
            </p>
            <input type="file" accept="image/*"
              style={{display:"none"}}
              ref={(c) => this._file = c}
              onChange={this._handleSelectedFile} />
            {imageProcessorStatus ? <ProgressBar /> :  <input type="button" className="btn btn-primary" value="Upload Images" onClick={this._buttonClicked} />}
          </div>
          <div ref={c => this._temp = c}>
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
    const {updateImageFile} = this.props;

    const file = files[0];
    console.log(file);

    updateImageFile(file);

    // var img = document.createElement("img");
    // console.log(this._temp);
    // this._temp.appendChild(img);

    // var reader = new FileReader();
    // reader.onload = (function(aImg) { return function(e) { aImg.src = e.target.result; console.log(e.target.result); }; })(img);
    // reader.readAsDataURL(file);

    // var objectURL = window.URL.createObjectURL(file);
    // console.log(objectURL);
    // var img = document.createElement("img");
    // img.src = objectURL;
    // console.log('img:', img);
    // img.onload = () => {
    //   console.log(img.width);
    //   console.log(img.height);
    // }

  }
}

export default ImageUploadArea