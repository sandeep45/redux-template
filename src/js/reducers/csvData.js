import K from '../constants/'

const csvData = (state = {
    parsedObj: {},
    isFetching: false,
    errorMessage: null
  }, action) => {
    switch (action.type) {
      case K.UPDATE_CSV_DATA:
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
            parsedObj: action.payload,
            isFetching: false,
            errorMessage: null
          }
        }else{
          return state;
        }
      default:
        return state
    }
};

export default csvData;

export const getHeaderFields = (state) => {
  if(state.parsedObj && state.parsedObj.meta && state.parsedObj.meta.fields){
    return state.parsedObj.meta.fields;
  }else{
    return [];
  }
}

export const getAllDataRows = (state) => {
  if(state.parsedObj && state.parsedObj.data){
    return state.parsedObj.data;
  }else {
    return [];
  }
}

export const getFileName = (state) => {
  if(state.parsedObj && state.parsedObj.fileName){
    return state.parsedObj.fileName;
  }else {
    return "";
  }
}

export const getParsingErrors = (state) => {
  if(state.parsedObj && state.parsedObj.errors){
    return state.parsedObj.errors;
  }else{
    return [];
  }
}

export const getErrorMessage = (state) => state.errorMessage;
export const getIsFetching = (state) => state.isFetching;
