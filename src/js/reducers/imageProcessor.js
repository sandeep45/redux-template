import K from '../constants/'

const imageProcessor = (state={
  isFetching: false,
  errorMessage: null,
}, action) => {

  switch (action.type) {
    case K.UPLOADING_IMAGE:
      if(!action.payload && !action.error){
        return {
          ...state,
          isFetching: true,
          errorMessage: null
        }
      }else if(action.error === true){
        return {
          ...state,
          isFetching: false,
          errorMessage: action.payload.message
        }
      }else if(action.payload && !action.error){
        return {
          ...state,
          isFetching: false,
          errorMessage: null
        }
      }else{
        return state;
      }
    default:
      return state;
  }

}

export default imageProcessor;

export const getImageProcessorStatus = (state) => state.isFetching
export const getImageProcessorError = (state) => state.errorMessage