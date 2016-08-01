import React, { PropTypes, Component } from 'react'

import {Link} from 'react-router';
import ProgressBar from '../ProgressBar'
import ErrorMessage from '../FetchError'


class AllImagesPreview extends React.Component {

  static propTypes = {
    imagesBySize: PropTypes.object.isRequired
  };

  constructor(props){
    super(props);
  };

  render() {
    const {imagesBySize} = this.props;
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          Images Preview
        </div>
        <div className="panel-body">
          <table className="table table-bordered table-condensed">
            <thead>
              <tr><th>Width</th><th>Height</th><th>Name</th><th>Preview</th><th>Error Message</th></tr>
            </thead>
            <tbody>
              <tr className={this._rowClass("w300xh250")}>
                <td>300</td>
                <td>250</td>
                <td>{imagesBySize["w300xh250"]["fileName"]}</td>
                <td><img src={imagesBySize["w300xh250"]["url"]} className="img-thumbnail" style={{maxWidth: "150px", maxHeight: "150px"}} /></td>
                <td>{imagesBySize["w300xh250"]["errorMessage"]}</td>
              </tr>
              <tr className={this._rowClass("w300xh600")}>
                <td>300</td>
                <td>600</td>
                <td>{imagesBySize["w300xh600"]["fileName"]}</td>
                <td><img src={imagesBySize["w300xh600"]["url"]} className="img-thumbnail" style={{maxWidth: "150px", maxHeight: "150px"}} /></td>
                <td>{imagesBySize["w300xh600"]["errorMessage"]}</td>
              </tr>
              <tr className={this._rowClass("w728xh90")}>
                <td>728</td>
                <td>90</td>
                <td>{imagesBySize["w728xh90"]["fileName"]}</td>
                <td><img src={imagesBySize["w728xh90"]["url"]} className="img-thumbnail" style={{maxWidth: "150px", maxHeight: "150px"}} /></td>
                <td>{imagesBySize["w728xh90"]["errorMessage"]}</td>
              </tr>
              <tr className={this._rowClass("w160xh600")}>
                <td>160</td>
                <td>600</td>
                <td>{imagesBySize["w160xh600"]["fileName"]}</td>
                <td><img src={imagesBySize["w160xh600"]["url"]} className="img-thumbnail" style={{maxWidth: "150px", maxHeight: "150px"}} /></td>
                <td>{imagesBySize["w160xh600"]["errorMessage"]}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }

  _rowClass = (size) => {
    const {imagesBySize} = this.props;
    if(imagesBySize[size]["errorMessage"]){
      return "bg-danger"
    }else if (imagesBySize[size]["url"]){
      return "bg-success"
    } else {
      return ""
    }
  }

}

export default AllImagesPreview