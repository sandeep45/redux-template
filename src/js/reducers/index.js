import K from '../constants/'

import { combineReducers } from 'redux'

import entities from './entities.js'
import paginate, * as fromPaginate from './paginate.js'
import paginationLine from './paginationLine.js'
import authentication, * as fromAuthentication from './authentication.js'

const rootReducer = (state, action) => {
  if (action.type === 'DO_LOGOUT') {
    state = undefined
  }
  return myReducer(state, action)
}

const myReducer = combineReducers({
  entities: entities,
  paginate: paginate,
  paginationLine: paginationLine,
  authentication: authentication
});

export default rootReducer;

const pageNumObj = (state, modelName, pageNumber) => {
  const modelObject = fromPaginate.getModelObject(state.paginate, modelName);
  if(!modelObject) {
    return {};
  }
  const pageNumberObject = fromPaginate.getPageNumberObject(modelObject, pageNumber);
  return pageNumberObject || {}
}

export const getPaginationErrorMessage = (state, modelName, pageNumber) => {
  const errorMessage = fromPaginate.getErrorMessage(pageNumObj(state, modelName, pageNumber));
  return errorMessage;
}

export const getPaginationIsFetching = (state, modelName, pageNumber) => {
  const isFetching = fromPaginate.getIsFetching(pageNumObj(state, modelName, pageNumber));
  return isFetching;
}

export const getPaginationIds = (state, modelName, pageNumber) => {
  const ids = fromPaginate.getIds(pageNumObj(state, modelName, pageNumber));
  return ids;
}

export const getAuthenticationIsFetching =  (state) => fromAuthentication.getIsFetching(state.authentication);
export const getAuthenticationErrorMessage =  (state) => fromAuthentication.getErrorMessage(state.authentication);
export const getAuthenticationForgotPasswordCompleted =  (state) => fromAuthentication.getForgotPasswordCompleted(state.authentication);
export const getAttributeOfAuthenticatedUser = (state, attr) => {
  const id = fromAuthentication.getUserId(state.authentication);
  if(!id){
    return null;
  }
  const userAttrValue = state.entities.users[id][attr];
  return userAttrValue;
}