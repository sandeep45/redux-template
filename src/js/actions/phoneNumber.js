import * as WebUtil from '../config/WebUtil.js'
import K from '../constants/'
import * as MySchema from '../config/MySchema'
import { normalize } from 'normalizr'

export const fetchPhoneNumbers2 = (pageNumber) => (dispatch) => {

  dispatch({
    type: K.RECEIVE_PHONE_NUMBERS,
    meta: {
      pageNumber,
      source: MySchema.phoneNumber.getKey()
    }
  })

  return WebUtil.getAllPhoneNumbers2(pageNumber).then(
    response => {
      const normalizedData = normalize(response.data, MySchema.arrayOfPhoneNumbers)
      dispatch({
        type: K.RECEIVE_PHONE_NUMBERS,
        payload: normalizedData,
        meta: {
          pageNumber,
          source: MySchema.phoneNumber.getKey()
        }
      })
    },
    response => {
      let errorObj
      errorObj = new Error('error getting phone numbers: ' + response.status)
      dispatch({
        type: K.RECEIVE_PHONE_NUMBERS,
        payload: errorObj,
        error: true,
        meta: {
          pageNumber,
          source: MySchema.phoneNumber.getKey()
        }
      })
    }
  )
}

export const refreshPageOfPhoneNumbers = () => {
  return (dispatch, getState) => {
    const state = getState()
    dispatch(fetchPhoneNumbers2(state.paginationLine.currentPage))
  }
}
