import K from '../constants/'

import { combineReducers } from 'redux'

import entities from './entities.js'
import paginate, * as fromPaginate from './paginate.js'
import paginationLine from './paginationLine.js'
import authentication, * as fromAuthentication from './authentication.js'
import csvData, * as fromCsvData from './csvData.js'
import imageFile, * as fromImageFile from './imageFile.js'
import modalsByName, * as fromModalsByName from './modalsByName.js'

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
  authentication: authentication,
  csvData,
  imageFile,
  modalsByName
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

export const getCsvDataHeaderFields = (state) => fromCsvData.getHeaderFields(state.csvData);
export const getCsvDataAllDataRows = (state) => fromCsvData.getAllDataRows(state.csvData);
export const getCsvDatatParsingErrors = (state) => fromCsvData.getParsingErrors(state.csvData);
export const getCsvDataErrorMessage = (state) => fromCsvData.getErrorMessage(state.csvData);
export const getCsvDataIsFetching = (state) => fromCsvData.getIsFetching(state.csvData);
export const getCsvDataFileName = (state) => fromCsvData.getFileName(state.csvData);

export const getImageProcessorStatus = (state) => fromImageFile.getImageProcessorStatus(state.imageFile)
export const getImageProcessorError = (state) => fromImageFile.getImageProcessorError(state.imageFile)


export const getImageNameBySize = (state, size) => fromImageFile.getImageNameBySize(state.imageFile, size)
export const getImageUrlBySize = (state, size) => fromImageFile.getImageUrlBySize(state.imageFile, size)
export const getImagesBySize = (state) => fromImageFile.getImagesBySize(state.imageFile);
export const showModal = (state, name) => fromModalsByName.showModal(state.modalsByName, name);