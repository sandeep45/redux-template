import K from "../constants/"
import Papa from 'papaparse';

import uuid from 'uuid';

export const updateCsvData = file => dispatch => {
  dispatch({
    type: K.UPDATE_CSV_DATA
  });

  if(!file){
    return dispatch({
      type: K.UPDATE_CSV_DATA,
      payload: new Error("File not provided"),
      error: true
    });
  }

  if(file.size > 500000){
    return dispatch({
      type: K.UPDATE_CSV_DATA,
      payload: new Error(`File size is too huge: ${file.size} bytes. We dont accept anything greater than 500 kb`),
      error: true
    });
  }

  if(file.type && !file.type.startsWith("text")){
    return dispatch({
      type: K.UPDATE_CSV_DATA,
      payload: new Error(`Only Text based file formats are supported. You uploaded: ${file.type}`),
      error: true
    });
  }

  var reader = new FileReader();

  reader.onload = function(e) {
    const csvString = e.target.result;
    // console.log(csvString);
    Papa.parse(csvString, {
      header: true,
      dynamicTyping: false,
      worker: false,
      preview: 2000,
      skipEmptyLines: true,
      // step: result => {
      //   console.log(result);
      // },
      complete: function(result){
        // console.log('complete', result);
        result["fileName"]=file.name;
        result.data.forEach(row => row["id"] = uuid.v4())
        dispatch({
          type: K.UPDATE_CSV_DATA,
          payload: result
        });
      },
      error: function(error){
        // console.log('error', error);
        dispatch({
          type: K.UPDATE_CSV_DATA,
          payload: error,
          error: true
        });
      }
    });
  }

  reader.readAsText(file);
};