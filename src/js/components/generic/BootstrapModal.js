import React, {Component, PropTypes} from 'react'
import Modal from 'react-modal'

class BootstrapModal extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    showIt: PropTypes.bool.isRequired,
    hideOnEscape: PropTypes.bool,
    hideOnOutsideClick: PropTypes.bool,
    closeButtonPressed: PropTypes.func.isRequired,
    actionButtonPressed: PropTypes.func,
    title: PropTypes.string,
    closeText: PropTypes.string,
    actionText: PropTypes.string
  };

  static defaultProps = {
    hideOnEscape: true,
    hideOnOutsideClick: true,
    closeText: "Close",
    actionText: "Save Changes",
    className: "ModalClass",
    overlayClassName: "OverlayClass"
  };

  componentDidMount() {
    this._updateVisibilityOfModal(this.props.showIt);

  };

  componentWillReceiveProps(nextProps) {
    if(this.props.showIt != nextProps.showIt){
      this._updateVisibilityOfModal(nextProps.showIt);
    }
  };

  _updateVisibilityOfModal(showIt){
    if(showIt){
      this._modal.classList.remove("hide");
      this._modal.classList.remove("out");
      this._backdrop.classList.remove("hide");
      this._backdrop.classList.remove("out");

      this._modal.classList.add("show");
      this._backdrop.classList.add("show");
      window.setTimeout( () => {
        this._modal.classList.add("in");
        this._backdrop.classList.add("in");
        this._modal.focus();
      }, 0);
    }else{
      this._modal.classList.remove("in");
      this._backdrop.classList.remove("in");

      window.setTimeout( () => {
        this._modal.classList.remove("show");
        this._modal.classList.add("out");
        this._modal.classList.add("hide");
        this._backdrop.classList.remove("show");
        this._backdrop.classList.add("out");
        this._backdrop.classList.add("hide");
      }, 150);
    }
  };

  render() {
    return (
      <div>
        <div className="modal fade hide" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel"
             ref={c => this._modal = c}
             onKeyDown={this._keyDown}
             onMouseDown={this._mouseDown}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              {this._header()}
              <div className="modal-body">
                {this.props.children}
              </div>
              {this._footer()}
            </div>
          </div>
        </div>
        <div className="modal-backdrop fade hide"
             ref={c => this._backdrop = c}
        />
      </div>
    );
  };

  _header = () => {
    const {title} = this.props;
    if(title){
      return (
        <div className="modal-header">
          <button type="button" className="close" onClick={this._closeButtonPressed}>
            <span aria-hidden="true">&times;</span>
            <span className="sr-only">Close</span>
          </button>
          <h4 className="modal-title">{title}</h4>
        </div>
      );
    }else{
      return "";
    }
  };

  _footer = () => {
    const {closeText, actionText, actionButtonPressed} = this.props;
    return (
      <div className="modal-footer">
        {closeText ? <button type="button" className="btn btn-default" onClick={this._closeButtonPressed}>Close</button> : "" }
        {actionButtonPressed ? <button type="button" className="btn btn-primary" onClick={actionButtonPressed}>{actionText}</button> : "" }
      </div>
    );
  };

  _closeButtonPressed = () => {
    const {closeButtonPressed} = this.props;
    console.log("close button has been pressed");
    closeButtonPressed();
  };

  _keyDown = (evt) => {
    console.log(evt.keyCode);
    if(this.props.hideOnEscape == true && evt.keyCode == 27){
      this.props.closeButtonPressed();
    }
  };

  _mouseDown = (evt) => {
    console.log("_mouseDown", evt.target == this._modal);
    if(this.props.hideOnOutsideClick == true && evt.target == this._modal){
      this.props.closeButtonPressed();
    }
  }
}

export default BootstrapModal;