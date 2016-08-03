import axios from 'axios'

export const uploadImage = (file) => {
  var formData = new FormData();
  formData.append("ad[picture]", file);

  return axios.post(`/users/1/ads`, formData , {
      headers: {
        Accept: "application/json"
      }
    }
  );

}

export const getAllPhoneNumbers2 = (pageNumber) => {
  return axios.get(`/phone_numbers.json`, {
    params:{
      page: pageNumber
    }
  });
}

export const doUserSignIn = (email, password) => {
  return axios.post(`/users/sign_in`, {
      user:{
        email,
        password
      }
    }, {
      headers: {
          Accept: "application/json"
        }
    }
  );
}

export const doUserSignUp = (email, password, password_confirmation) => {
  return axios.post(`/users`, {
      user:{
        email,
        password,
        password_confirmation
      }
    }, {
      headers: {
          Accept: "application/json"
        }
    }
  );
}

export const doForgotPassword = (email) => {
  return axios.post(`/users/password`, {
      user:{
        email,
      }
    }, {
      headers: {
          Accept: "application/json"
        }
    }
  );
}