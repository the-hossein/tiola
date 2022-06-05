import axios from "axios";
import { BASE_URL, CREATE_COMMENT } from "../../api/urls";
import { notify } from "../../tools/toast/toast";

const preLoad = () => {
  return { type: "load" }
}

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

const setComment = (comments) => {
  return {type: "SHOW_COMMENT", payload: comments }
}

const createComment = (userId, commentText, score, productId, userName, lang) => {

  const rounded = Math.round(+score);
  
  return (dispatch) => {
    if(userName === ''){
      let textShow ;
      if(lang === "fa"){
        textShow = "ابتدا اطلاعات خود را تکمیل کنید."
      }else {
        textShow = "First Edit your profile"
      }
      notify(textShow, "error");
    }else {
        var raw ={
          "userId": userId,
          "commenttext": commentText,
          "score": rounded,
          "productid": +productId
        };
        
        var requestOptions = {
          method: 'POST',
          body: raw,
        };
    
        axios.post(BASE_URL + CREATE_COMMENT, raw)
          .then(response =>{
            let textShow ;
            if(lang === "fa"){
              textShow = "نظر شما در صف تایید قرار گرفت"
            }else {
              textShow = "Your comment has been approved"
            }
            notify(textShow, "success");
        })
          .catch(error => console.log('error', error));
        }
    }
}

const getAllComment = (productID) => {
  return (dispatch) => {
    axios.get(BASE_URL+`api/Comment/GetComments?ProductId=${productID}`)
      .then(rseponse => {
        dispatch(preLoad())
        dispatch(setComment(rseponse.data.data))
      })
      .catch(err => console.log("error"))
      
  }
}


export { writeTrue, writeFalse, createComment, getAllComment };
