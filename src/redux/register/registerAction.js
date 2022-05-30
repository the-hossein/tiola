import callApi from "../../api/callApi";
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
const loader = () => {
  return {
    type: "LOADER"
  };
};
const registerPhone = (num, lang) => {
  return (dispatch) => {
    dispatch(loader());
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
        "http://185.105.239.3:85/api/v1/User/Signup",
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
        dispatch(sendCodeFailed());
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
const registerCode = (code, num, lang, page) => {
  return (dispatch) => {
    dispatch(loader());
    const sendPhone = async () => {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        methodname: 2,
        otpCheck: {
          phoneNumber: `${num}`,
          code: `${code}`,
          referralSite: "string",
          type: 0
        }
      });
      const registerCode = await callApi(
        "http://185.105.239.3:85/api/v1/User/Signup",
        raw,
        myHeaders,
        "POST"
      );

      var text;
      console.log(registerCode)
      if (registerCode.code === 200) {
        dispatch(sendCodeSuccess());
        if (lang === "fa") {
          if (page === "/signin") {
            text = "با موفقیت وارد حساب کاربری خود شده اید";
          } else {
            text = "ثبت نام شما با موفقیت انجام شد";
          }
        } else {
          if (page === signin) {
            text = "You have successfully logged in to your account";
          } else {
            text = "Your registration was successful";
          }
          text = "The code was sent successfully";
        }
        notify(text, "success");
      // } else if (
      //   registerUser.message.message ===
      //   "قبلا درخواست کد داده اید لطفا 1 دقیقه دیگر تلاش بفرمایید"
      // ) {
      //   dispatch(sendCodeFailed());
      //   var errorText;
      //   if (lang === "fa") {
      //     errorText = "شما قبلا درخواست داده اید لطفا 1دقیقه بعد تلاش بفرمایید";
      //   } else {
      //     errorText = "You have already requested, please try 1 minute later";
      //   }
      //   notify(errorText, "error");
      // }
    };
    sendPhone();
  };
};}
export {
  loginTrue,
  registerPhone,
  getphone,
  getCode,
  sendCodeSuccess,
  sendCodeFailed,
  loader,registerCode
};
