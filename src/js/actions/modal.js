import K from '../constants/'

export const showModal = (name) => {
  return {
    type: K.SHOW_MODAL,
    meta: {
      name
    }
  }
};

export const hideModal = (name) => {
  return {
    type: K.HIDE_MODAL,
    meta: {
      name
    }
  }

};
