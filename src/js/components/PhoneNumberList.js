import React, { PropTypes, Component } from 'react'
import {Link} from 'react-router'
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');


class PhoneNumberList extends Component {
  static propTypes = {
    caption: PropTypes.string,
    phoneNumbers: PropTypes.array.isRequired,
    refresh: PropTypes.func.isRequired,
  };

  constructor(props){
    super(props);
  };

  render() {
    const {phoneNumbers, onDeleteOfNumber, refresh} = this.props;

    console.log("in render of PhoneNumberList with: ", phoneNumbers);

    return(
      <div className="panel panel-default">
        <div className="panel-heading">
          {this.props.caption || "Phone Numbers"}
          <input type="button" value="refresh" className="pull-right"
            onClick={refresh}/>
        </div>
        <div className="panel-body">
          <table className="table table-bordered table-hover table-condensed">
            <thead>
              <tr>
                <th>Id</th><th>Name</th><th>Number</th>
              </tr>
            </thead>
              <ReactCSSTransitionGroup component="tbody" transitionName="example"
                transitionEnterTimeout={500} transitionLeaveTimeout={300}
                transitionAppear={true} transitionAppearTimeout={500}>
              {phoneNumbers.map( (item) => {
                  return (
                      <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.number}</td>
                      </tr>
                  );
                }
              )}
              </ReactCSSTransitionGroup>
          </table>
        </div>
      </div>
    );
  };


};

export default PhoneNumberList;