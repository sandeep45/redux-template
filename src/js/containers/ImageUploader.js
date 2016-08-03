import React, { PropTypes, Component } from 'react'

import {connect} from 'react-redux'

import * as actions from '../actions'
import ImageUploadArea from '../components/imageUpload/ImageUploadArea'
import AllImagesPreview from '../components/imageUpload/AllImagesPreview'

import {getImagesBySize, getImageProcessorStatus, getImageProcessorError} from '../reducers/'

const mapStateToProps = (state, ownProps) => {
  return {
    imagesBySize: getImagesBySize(state),
    imageProcessorStatus: getImageProcessorStatus(state),
    imageProcessorError: getImageProcessorError(state),
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateImageFile: file => {
      dispatch(actions.updateImageFile(file))
    }
  };
};

class ImageUploader extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return (
      <div>
        <div className="page-header">
          <h1>Image Uploader Example <small>/ various sizes with preview</small></h1>
          <ImageUploadArea {...this.props} />
          <AllImagesPreview {...this.props} />
        </div>
      </div>
    );
  }
}

ImageUploader = connect(mapStateToProps, mapDispatchToProps)(ImageUploader);

export default ImageUploader