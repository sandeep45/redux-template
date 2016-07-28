import React, { PropTypes, Component } from 'react'
import NavigationLinks from './NavigationLinks.js'

class App extends Component {
  constructor(props){
    super(props)
  }
  componentDidMount(){
    const dropbox = this._dropzone;
    dropbox.addEventListener("dragenter", this._dragenter, false);
    dropbox.addEventListener("dragover", this._dragover, false);
    dropbox.addEventListener("dragleave", this._dragleave, false);
    dropbox.addEventListener("drop", this._drop, false);
  };
  render(){
    return(
      <div ref={c => this._dropzone = c}>
        <NavigationLinks />
        <div className="container">
          {this.props.children}
        </div>
      </div>
    )
  };
  _dragenter = (e) => {
     e.stopPropagation();
     e.preventDefault();
  }
  _dragover = (e) => {
    e.stopPropagation();
    e.preventDefault();
  }
  _dragleave = (e) => {
    e.stopPropagation();
    e.preventDefault();
  }
  _drop = (e) => {
    e.stopPropagation();
    e.preventDefault();
  }
}

export default App

