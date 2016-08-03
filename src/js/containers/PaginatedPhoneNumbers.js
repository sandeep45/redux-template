import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

import PhoneNumberList from '../components/PhoneNumberList.js'
import IsFetching from '../components/IsFetching.js'
import FetchError from '../components/FetchError.js'
import PhoneNumberPaginationLine from '../containers/PhoneNumberPaginationLine'

import {fetchPhoneNumbers2,
  updatePageNumber, refreshPageOfPhoneNumbers} from '../actions'

import {getPaginationErrorMessage, getPaginationIsFetching, getPaginationIds} from '../reducers/'

class PaginatedPhoneNumbers extends Component {
  constructor(props){
    super(props);
  };
  componentDidMount(){
    this.props.loadInitialData();
  };
  render(){
    if(this.props.errorMessage){
      return(
        <FetchError message={this.props.errorMessage} onRetry={this.props.refresh} />
      );
    } else if(this.props.isFetching){
      return(
        <IsFetching />
      );
    } else {
      return(
        <div>
          <div className="page-header">
            <h1>Phone Numbers <small>Paginated</small></h1>
          </div>
          <PhoneNumberList {...this.props} />
          <PhoneNumberPaginationLine />
        </div>
      );
    }
  };
}

PaginatedPhoneNumbers.propTypes = {
  currentPageNumber: PropTypes.number.isRequired
}

const mapStateToProps = (state, ownProps) => {

  const currentPageNumber = state.paginationLine.currentPage;

  // this logic to be moved to selectors
  let currentPhoneIds = [];
  let isFetching = false;
  let errorMessage = null;

  currentPhoneIds = getPaginationIds(state, "phoneNumbers",  currentPageNumber);
  isFetching = getPaginationIsFetching(state, "phoneNumbers",  currentPageNumber);
  errorMessage = getPaginationErrorMessage(state, "phoneNumbers",  currentPageNumber);

  return {
    caption: "Paginated Phone Numbers",
    phoneNumbers: currentPhoneIds.map(i => state.entities.phoneNumbers[i]),
    currentPageNumber: currentPageNumber,
    isFetching,
    errorMessage
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    refresh: (pageNumber) => {
      dispatch(refreshPageOfPhoneNumbers());
    },
    loadInitialData: () => {
      dispatch(updatePageNumber(1));
      dispatch(fetchPhoneNumbers2(1));
    }
  }
};

PaginatedPhoneNumbers = connect(
  mapStateToProps,
  mapDispatchToProps
)(PaginatedPhoneNumbers);

export default PaginatedPhoneNumbers;

