import axios from "axios";

import K from "../constants/"

export const selectTopic = () => {
  return {
    type: K.SELECT_TOPIC
  }
};
