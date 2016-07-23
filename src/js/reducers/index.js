import { combineReducers } from 'redux'

import entities from './entities.js'
import paginate, * as fromPaginate from './paginate.js'
import paginationLine from './paginationLine.js'


const myReducer = combineReducers({
  entities: entities,
  paginate: paginate,
  paginationLine: paginationLine
});

export default myReducer;

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
