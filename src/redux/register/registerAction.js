import { callApi } from "../../api/callApi";
import { BASE_URL, SIGN_UP } from "../../api/urls";
import { notify } from "../../tools/toast/toast";
const getphone = (num) => {
  return {
    type: "GETPHONE",
    num: num
  };
};
const getCode = (code) => {
  return {
    type: "GETCODE",
    code: code
  };
};
const sendCodeSuccess = () => {
  return {
    type: "SEND_CODE_SUCCESS"
  };
};
const sendCodeFailed = () => {
  return {
    type: "SEND_CODE_FAILED"
  };
};
const loginTrue = () => {
  return {
    type: "LOGIN_TRUE"
  };
};
const loader=()=>{
  return{
    type:"LOADER"
  }
}
const registerPhone = (num, lang) => {
  return (dispatch) => {
    dispatch(loader())
    const sendPhone = async () => {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        methodname: 5,
        checkPhoneNumber: {
          phonenumber: `${num}`
        }
      });
      const registerUser = await callApi(
        BASE_URL + SIGN_UP,
        raw,
        myHeaders,
        "POST"
      );

      dispatch(sendCodeSuccess());
      var text;
      if (registerUser.code === 200) {
        if (lang === "fa") {
          text = "کد با موفقیت ارسال شد";
        } else {
          text = "The code was sent successfully";
        }
        notify(text, "success");
      } else if (
        registerUser.message.message ===
        "قبلا درخواست کد داده اید لطفا 1 دقیقه دیگر تلاش بفرمایید"
      ) {
        dispatch(sendCodeFailed())
        var errorText;
        if (lang === "fa") {
          errorText = "شما قبلا درخواست داده اید لطفا 1دقیقه بعد تلاش بفرمایید";
        } else {
          errorText = "You have already requested, please try 1 minute later";
        }
        notify(errorText, "error");
      }
    };
    sendPhone();
  };
};
export {
  loginTrue,
  registerPhone,
  getphone,
  getCode,
  sendCodeSuccess,
  sendCodeFailed,loader
};
