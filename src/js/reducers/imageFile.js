import K from '../constants/'
import imagesBySize, * as fromImagesBySize from './imagesBySize'
import imageProcessor, * as fromImageProcessor from './imageProcessor'
import { combineReducers } from 'redux'

const imageFile = combineReducers({
  imageProcessor,
  imagesBySize
});

export default imageFile;

export const getImageProcessorStatus = (state) => fromImageProcessor.getImageProcessorStatus(state.imageProcessor)
export const getImageProcessorError = (state) => fromImageProcessor.getImageProcessorError(state.imageProcessor)


export const getImageNameBySize = (state, size) => fromImagesBySize.getImageNameBySize(state.imagesBySize, size)
export const getImageUrlBySize = (state, size) => fromImagesBySize.getImageUrlBySize(state.imagesBySize, size)
export const getImageErrorMessageBySize = (state, size) => fromImagesBySize.getImageErrorMessageBySize(state.imagesBySize, size)
export const getImagesBySize = (state) => state.imagesBySize