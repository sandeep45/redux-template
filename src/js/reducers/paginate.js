import K from '../constants/'

const pageNumberToDetailObject = (state = {
    ids:[],
    isFetching: false,
    errorMessage: null
  }, action) => {
    switch (action.type) {
      case K.RECEIVE_PHONE_NUMBERS:
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
            ids: action.payload.result,
            isFetching: false,
            errorMessage: null
          }
        }else{
          return state;
        }

      default:
        return state
    }
}

const modelToPageNumberObject = (state={}, action) => {
  switch (action.type) {
    case K.RECEIVE_PHONE_NUMBERS:
      if (!action.meta || !action.meta.pageNumber) {
        return state;
      }
      const pageNumber = action.meta.pageNumber;
      return { ...state, [pageNumber]: pageNumberToDetailObject(state[pageNumber], action) }
    default:
      return state
  }
}

const paginate = (state = {}, action) => {
  switch (action.type) {
    case K.RECEIVE_PHONE_NUMBERS:
      if (!action.meta || typeof action.meta.source !== 'string') {
        return state
      }
      const source = action.meta.source;
      return { ...state, [source]: modelToPageNumberObject(state[source], action) }
    default:
      return state
  }
};

export default paginate;

export const getModelObject = (state, modelName) => state[modelName];
export const getPageNumberObject = (state, pageNumber) => state[pageNumber];

export const getIds = (state) => state.ids || [];
export const getIsFetching = (state) => state.isFetching;
export const getErrorMessage = (state) => state.errorMessage;
