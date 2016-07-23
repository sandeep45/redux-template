import axios from 'axios';
import {normalize,arrayOf} from 'normalizr'
import * as MySchema from './MySchema'


export const getAllPhoneNumbers2 = (pageNumber) => {
  return axios.get(`/phone_numbers.json`, {
    params:{
      page: pageNumber
    }
  });
}