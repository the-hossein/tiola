import { useRouter } from "next/router";
import callApi from "../../api/callApi";
import { BASE_URL, GET_BASKET, GET_PROFILE, SIGN_UP } from "../../api/urls";
import { notify } from "../../tools/toast/toast";
if (typeof window !== "undefined") {
  var ls = localStorage.getItem("userToken");
}
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
const userData = (user) => {
  return {
    type: "USER_DATA",
    user: user
  };
};
const openPopUp = () => {
  return {
    type: "OPEN_POPUP"
  };
};
const closePopUp = () => {
  return {
    type: "CLOSE_POPUP"
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
        BASE_URL + SIGN_UP,
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
const basketid = (data) => {
  return {
    type: "BASKET_ID",
    data: data
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
        BASE_URL + SIGN_UP,
        raw,
        myHeaders,
        "POST"
      );

      var text;
      if (registerCode[1] === 200) {
        dispatch(checkOtpSuccess());
        dispatch(loginTrue());
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

        const data = {
          token: registerCode[0].data.token,
          exp: registerCode[0].data.expiration,
          phone: num
        };

        localStorage.setItem("userToken", JSON.stringify(data));
        dispatch(loader());

        notify(text, "success");
        if (router.pathname === "/signin") {
          router.push({
            pathname: "/"
          });
        }
        dispatch(sendCodeFailed());
        dispatch(closePopUp());
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
const userDataLoader = () => {
  return {
    type: "USER_DATA_LOADER"
  };
};
const getProfile = () => {
  return (dispatch) => {
    // dispatch(userDataLoader());
    ls = localStorage.getItem("userToken");
    const userToken = JSON.parse(ls);
    var phone = userToken.phone;
    var token = userToken.token;

    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append("Content-Type", "application/json");
    const profile = async () => {
      var raw = JSON.stringify({
        phonenumber: `${phone}`
      });

      const user = await callApi(
        BASE_URL + GET_PROFILE,
        raw,
        myHeaders,
        "POST"
      );
      if (user[0].code === 200 && user[0].data !== null) {
        dispatch(userData(user[0].data));
      }
      const basket = async () => {
        const basketUser = await callApi(
          `${BASE_URL + GET_BASKET}?UserId=${user[0].data.id}`,
          "{}",
          myHeaders,
          "GET"
        );
        if (basketUser[0].code === 200) {
          dispatch(basketid(basketUser[0].data.id));
          userToken["userid"] = user[0].data.id;
          localStorage.setItem("userToken", JSON.stringify(userToken));
        }
      };
      basket();
    };
    profile();
  };
};

const updateSetProfile = (newData) => {
  return { type: "SET_NEW_DATA", payload: newData };
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
  loginFalse,
  userData,
  getProfile,
  closePopUp,
  openPopUp,
  updateSetProfile
};
