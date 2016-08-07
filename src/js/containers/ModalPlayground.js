import React, {Component} from 'react'
import {connect} from 'react-redux'

import * as actions from '../actions/';
import * as reducers from '../reducers/'
import BootstrapModal from '../components/generic/BootstrapModal'

const mapStateToProps = (state, ownProps) => {
  return {
    showItMoo: reducers.showModal(state, "moo"),
    showItFoo: reducers.showModal(state, "foo")
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    showMoo: () => {
      dispatch(actions.showModal("moo"))
    },
    showFoo: () => {
      dispatch(actions.showModal("foo"))
    },
    hideMoo: () => {
      dispatch(actions.hideModal("moo"))
    },
    hideFoo: () => {
      dispatch(actions.hideModal("foo"))
    }
  };
};

class ModalPlayground extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {showMoo, showFoo, hideMoo, hideFoo, showItMoo, showItFoo} = this.props;
    return (
      <div>
        <div className="page-header">
          <h1>Modals<small> / A few examples</small></h1>
        </div>

        <input type="button" value="Launch Foo" className="btn btn-lg btn-primary"
               onClick={showFoo}
        />
        <BootstrapModal showIt={showItFoo}  closeButtonPressed={hideFoo}
          title="Foo" actionButtonPressed={showMoo} actionText="Launch Moo">
          I am Mr Foo.
        </BootstrapModal>

        <hr />
        <input type="button" value="Launch Moo" className="btn btn-lg btn-primary"
               onClick={showMoo}
        />
        <BootstrapModal showIt={showItMoo}  closeButtonPressed={hideMoo}>
          I am Mrs Moo.
        </BootstrapModal>
      </div>
    );
  }
}

ModalPlayground = connect(mapStateToProps, mapDispatchToProps)(ModalPlayground);

export default ModalPlayground