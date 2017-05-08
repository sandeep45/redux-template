import axios from 'axios';

export const addAuthTokenInAjax = (email, authentication_token) => {
  axios.defaults.headers.common['X-User-Email'] = email;
  axios.defaults.headers.common['X-User-Token'] = authentication_token;
};

export const removeAuthTokenInAjax = () => {
  delete axios.defaults.headers.common['X-User-Email'];
  delete axios.defaults.headers.common['X-User-Token'];
};

export const getInitialData = () => {
  return JSON.parse(sessionStorage.getItem("my-app-initial-data")) || {};
};