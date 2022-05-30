import { useRouter } from "next/router";
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
const checkOtpSuccess = () => {
  return {
    type: "CHECK_OTP_SUCCESS"
  };
};
const checkOtpFailed = () => {
  return {
    type: "CHECK_OTP_FAILED"
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
const loginFalse = () => {
  return {
    type: "LOGIN_FALSE"
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

      var text;
      if (registerUser[1] === 200) {
        dispatch(sendCodeSuccess());
        if (lang === "fa") {
          text = "کد با موفقیت ارسال شد";
        } else {
          text = "The code was sent successfully";
        }
        notify(text, "success");
      } else {
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
const registerCode = (code, num, lang, router) => {
  return (dispatch) => {
    dispatch(loader());
    const checkOtp = async () => {
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
      console.log(registerCode);
      if (registerCode[1] === 200) {
        console.log(registerCode);
        dispatch(checkOtpSuccess());
        if (lang === "fa") {
          if (registerCode[0].message === "با موفقیت لاگین شدید") {
            text = "با موفقیت وارد حساب کاربری خود شده اید";
          } else {
            text = "ثبت نام شما با موفقیت انجام شد";
          }
        } else {
          if (registerCode[0].message === "با موفقیت لاگین شدید") {
            text = "You have successfully logged in to your account";
          } else {
            text = "Your registration was successful";
          }
        }
        console.log(registerCode);

        const data = {
          token: registerCode[0].data.token,
          exp: registerCode[0].data.expiration,
          phone: num
        };
        localStorage.setItem("userToken", JSON.stringify(data));
        dispatch(loader());

        notify(text, "success");
        dispatch(checkOtpSuccess());
        dispatch(sendCodeFailed());
        router.push({
          pathname: "/"
        });
      } else {
        dispatch(checkOtpFailed());
        var errorText;
        if (lang === "fa") {
          errorText = "کد وارد شده اشتباه است";
        } else {
          errorText = "The entered code is incorrect";
        }
        notify(errorText, "error");
      }
    };

    checkOtp();
  };
};
export {
  loginTrue,
  registerPhone,
  getphone,
  getCode,
  sendCodeSuccess,
  sendCodeFailed,
  loader,
  registerCode,
  checkOtpSuccess,
  checkOtpFailed,
  loginFalse
};
