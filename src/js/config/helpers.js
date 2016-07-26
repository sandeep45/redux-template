import axios from 'axios';

export const addAuthTokenInAjax = (email, authentication_token) => {
  axios.defaults.headers.common['X-User-Email'] = email;
  axios.defaults.headers.common['X-User-Token'] = authentication_token;
}

export const removeAuthTokenInAjax = () => {
  delete axios.defaults.headers.common['X-User-Email'];
  delete axios.defaults.headers.common['X-User-Token'];
}