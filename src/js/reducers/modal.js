import K from '../constants/'

const modal = (state=false, action) => {
  switch (action.type){
    case K.SHOW_MODAL:
      return true;
    case K.HIDE_MODAL:
      return false;
    default:
      return state;
  }
};

export default modal;
