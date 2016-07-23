import K from "../constants/"

export const updatePageNumber = (pageNumber) => {
  return {
    type: K.UPDATE_PAGE_NUMBER,
    pageNumber
  }
};

export const updateStartNumber = (startNumber) => {
  return {
    type: K.UPDATE_START_NUMBER,
    startNumber
  }
};

export const updateEndNumber = (endNumber) => {
  return {
    type: K.UPDATE_END_NUMBER,
    endNumber
  }
};
