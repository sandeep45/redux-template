import K from '../constants/'

import { combineReducers } from 'redux'

const createImageObjectReducerPerSize = (size) => {
  return (state = {
    fileName: null,
    url: null
  }, action) => {
    switch(action.type){
      case K.UPDATE_IMAGE_FILE:
        if (!action.meta || !action.meta.size || action.meta.size !== size) {
          return state;
        }else if (action.payload){
          return {
            fileName: action.payload.fileName,
            url: action.payload.url
          };
        }else{
          return state;
        }
      default:
        return state;
    }
  }
};

const imagesBySize = combineReducers({
  w300xh250: createImageObjectReducerPerSize('w300xh250'),
  w300xh600: createImageObjectReducerPerSize('w300xh600'),
  w728xh90: createImageObjectReducerPerSize('w728xh90'),
  w160xh600: createImageObjectReducerPerSize('w160xh600'),
});

export default imagesBySize;

export const getImageNameBySize = (state, size) => state[size].fileName
export const getImageUrlBySize = (state, size) => state[size].url