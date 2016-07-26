import { Schema, arrayOf } from 'normalizr';

export const phoneNumber = new Schema('phoneNumbers', { idAttribute: 'id' });
export const message = new Schema('messages', { idAttribute: 'id' });
export const user = new Schema('users', { idAttribute: 'id' });

export const arrayOfPhoneNumbers = arrayOf(phoneNumber);


phoneNumber.define({
  messages: arrayOf(message)
});

message.define({
  phone_number: phoneNumber
});

