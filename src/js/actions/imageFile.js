import K from "../constants/"

const acceptableImages = {
  [(728/90).toFixed(4)]: {
    width: 728,
    height:90
  },
  [(300/250).toFixed(4)]: {
    width: 300,
    height:250
  },
  [(300/600).toFixed(4)]: {
    width: 300,
    height:600
  },
  [(160/600).toFixed(4)]: {
    width: 160,
    height:600
  }
}

const imageName = (w,h) => `w${w}xh${h}`

export const updateImageFile = file => dispatch => {
  dispatch({
    type: K.UPLOADING_IMAGE
  });

  if(!file){
    return dispatch({
      type: K.UPLOADING_IMAGE,
      payload: new Error("File not provided"),
      error: true
    });
  }

  if(file.size > 5000000){
    return dispatch({
      type: K.UPLOADING_IMAGE,
      payload: new Error(`File size is too huge: ${file.size} bytes. We dont accept anything greater than 5 mb`),
      error: true
    });
  }

  if(file.type && !file.type.startsWith("image/")){
    return dispatch({
      type: K.UPLOADING_IMAGE,
      payload: new Error(`Only image based file formats are supported. You uploaded: ${file.type}`),
      error: true
    });
  }

  const objectURL = window.URL.createObjectURL(file);
  console.log(objectURL);
  const img = document.createElement("img");
  img.src = objectURL;
  img.onload = () => {
    console.log(img.width);
    console.log(img.height);
    const ratio = (img.width/img.height).toFixed(4);
    console.log(ratio);
    console.log(acceptableImages);
    if(!acceptableImages[ratio]){
      dispatch({
        type: K.UPLOADING_IMAGE,
        payload: new Error(`Width & Height Dimensions of the uploaded image are not supported - ${img.width} / ${img.height}`),
        error: true
      });
    }else{
      dispatch({
        type: K.UPLOADING_IMAGE,
        payload: {},
      });

      dispatch({
        type: K.UPDATE_IMAGE_FILE,
        payload: {
          fileName: file.name || "unknown name",
          url: objectURL
        },
        meta: {
          size: imageName(acceptableImages[ratio]["width"], acceptableImages[ratio]["height"])
        }
      });
    }
  }
};