import axios from "axios";
import { BASE_URL, CREATE_COMMENT } from "../../api/urls";

const writeTrue = () => {
  return {
    type: "WRITECM_TRUE"
  };
};
const writeFalse = () => {
  return {
    type: "WRITECM_FALSE"
  };
};

const createComment = (userId, commentText, score, productId) => {

  const rounded = Math.round(+score);
  
  return (dispatch) => {
    var raw ={
      "userId": userId,
      "commenttext": commentText,
      "score": rounded,
      "productid": +productId
    };
    console.log(userId, commentText, score, +productId);
    
    var requestOptions = {
      method: 'POST',
      body: raw,
    };

    axios.post(BASE_URL + CREATE_COMMENT, raw)
      .then(response => console.log("worked"))
      .catch(error => console.log('error', error));
    }
}


export { writeTrue, writeFalse, createComment };
