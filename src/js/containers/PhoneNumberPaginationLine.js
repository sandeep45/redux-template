import React, { PropTypes, Component } from 'react'

import {connect} from 'react-redux'

import {fetchPhoneNumbers2, updatePageNumber, updateStartNumber, updateEndNumber} from '../actions'

import PaginationLine from '../components/PaginationLine.js'

const mapStateToProps = (state, ownProps) => {
  return {
    currentPageNumber: state.paginationLine.currentPage,
    startNumber: state.paginationLine.startNumber,
    endNumber: state.paginationLine.endNumber,
    itemsPerPage: 3
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateStartNumber: (number) => {
      dispatch(updateStartNumber(number));
    },
    updateEndNumber: (number) => {
      dispatch(updateEndNumber(number));
    },
    onPageNumberClick: (pageNumber) => {
      dispatch(updatePageNumber(pageNumber));
      dispatch(fetchPhoneNumbers2(pageNumber));
    }
  };
};

const PhoneNumberPaginationLine = connect(mapStateToProps, mapDispatchToProps)(PaginationLine);

export default PhoneNumberPaginationLine