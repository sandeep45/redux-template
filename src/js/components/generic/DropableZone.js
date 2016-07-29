import React, { PropTypes, Component } from 'react'

class DropableZone extends React.Component {

  static propTypes = {
    dropHandler: PropTypes.func.isRequired,
    hoverClass: PropTypes.string
  };

  static defaultProps = {
    hoverClassName: "bg-warning"
  }

  constructor(props){
    super(props);
  };

  componentDidMount(){
    const dropzone = this._dropzone;
    dropzone.addEventListener("dragenter", this._dragenter, false);
    dropzone.addEventListener("dragover", this._dragover, false);
    dropzone.addEventListener("dragleave", this._dragleave, false);
    dropzone.addEventListener("drop", this._drop, false);
  };

  render() {
    const {children, dropHandler, hoverClassName, ...others} = this.props;
    return (
      <div {...others} ref={c => this._dropzone = c}>
        {children}
      </div>
    )
  };

  _dragenter = (e) => {
     e.stopPropagation();
     e.preventDefault();
     console.log("Enter");
     this._dropzone.classList.add(this.props.hoverClassName);
  }
  _dragover = (e) => {
    e.stopPropagation();
    e.preventDefault();
    console.log("Over");
    this._dropzone.classList.add(this.props.hoverClassName);
  }
  _dragleave = (e) => {
    e.stopPropagation();
    e.preventDefault();
    console.log("Leave");
    this._dropzone.classList.remove(this.props.hoverClassName);
  }
  _drop = (e) => {
    e.stopPropagation();
    e.preventDefault();
    console.log("Drop");
    this._dropzone.classList.remove(this.props.hoverClassName);
    var dt = e.dataTransfer;
    var files = dt.files;
    this.props.dropHandler(files);
  }
}

export default DropableZone