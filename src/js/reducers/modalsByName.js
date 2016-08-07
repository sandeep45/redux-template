import modal from './modal'

const modalsByName = (state={}, action) => {
  if(!action || !action.meta || !action.meta.name){
    return state;
  }else{
    return {...state, [action.meta.name]: modal(state[action.meta.name], action)}
  }
};

export default modalsByName;
export const showModal = (state, name) => state[name] || false;