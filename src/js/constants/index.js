import keyMirror from "keymirror"

var appConstants = keyMirror({
  RECEIVE_PHONE_NUMBERS: null,

  UPDATE_PAGE_NUMBER: null,
  UPDATE_START_NUMBER: null,
  UPDATE_END_NUMBER: null,

  DO_LOGIN: null,
  DO_LOGOUT: null,
  DO_SIGNUP: null,
  DO_FORGOT_PASSWORD: null,

  UPDATE_CSV_DATA: null,

  UPDATE_IMAGE_FILE: null,
  UPLOADING_IMAGE: null,
});

export default appConstants;
