import K from '../constants/'

const authentication = (state = {
    userId: null,
    isFetching: false,
    errorMessage: null,
    forgotPasswordCompleted :null
  }, action) => {
    switch (action.type) {
      case K.DO_LOGIN:
      case K.DO_SIGNUP:
      case K.DO_FORGOT_PASSWORD:
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
            userId: action.payload.result,
            forgotPasswordCompleted: action.payload.forgotPasswordCompleted,
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

export default authentication;

export const getUserId = (state) => state.userId;
export const getIsFetching = (state) => state.isFetching;
export const getErrorMessage = (state) => state.errorMessage;
export const getForgotPasswordCompleted = (state) => state.forgotPasswordCompleted;
