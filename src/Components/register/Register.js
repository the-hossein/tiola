import React, { useEffect, useState } from "react";
import style from "./Register.module.css";
import Image from "next/image";
import Loader from "../../tools/loader/Loader";
/* import loginPic from "/Assets/images/1-1.jpg"; */
import Input from "../../tools/input/Input";
import NormalBtn from "../../tools/normalBtn/NormalBtn";
import { useTranslation } from "react-i18next";
import CountdownTimer from "react-component-countdown-timer";
import { notify } from "../../tools/toast/toast";
import { validationNumber } from "./validationNumber";
import { useDispatch, useSelector } from "react-redux";
import { validateCode } from "./validateCode";
import {
  getCode,
  getphone,
  registerCode,
  registerPhone,
  sendCodeFailed
} from "../../redux/register/registerAction";
import { callApi } from "../../api/callApi";
import TextLoader from "../../tools/textLoader/TextLoader";
import { useRouter } from "next/router";
const Register = ({ title }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.stateRegister);
  const lang = useSelector((state) => state.stateLang.lng);
  const router = useRouter();
  const [phone, setPhone] = useState("");
  const [sendCode, setSendCode] = useState(false);
  const [again, setAgain] = useState(false);
  const [errors, setError] = useState({});
  const [touched, setTouched] = useState({ phone: false, code: false });
  const [errorsCode, setErrorsCode] = useState({});
  const [tryClient, setTryClient] = useState();
  useEffect(() => {
    setError(validationNumber(state.phoneNumber));
    setErrorsCode(validateCode(state.code));
    let btryClient = window.localStorage.getItem("tryWrong");
    setTryClient(JSON.parse(btryClient));

    if(JSON.parse(btryClient) === 5){
      let textAlert;
      if(lang === "fa"){
        textAlert = "شما بیش از حد معقول تلاش کرده اید لطفا یک دقیقه صبر کنید";
      }else{
        textAlert = "You have tried too hard, please wait a minute";
      }
      // notify(textAlert, "warning");
      
      if(window.localStorage.getItem("setWrong") === null){
        let num = 1;
        window.localStorage.setItem("setWrong", JSON.stringify(num));
      }else{
        let num = JSON.parse(window.localStorage.getItem("setWrong"));
        num++;
        window.localStorage.setItem("setWrong", JSON.stringify(num));
      }
      
      setTimeout(()=> {
        localStorage.removeItem("tryWrong");
        setTryClient(0);
      }, 60000);

      if(JSON.parse(window.localStorage.getItem("setWrong")) === 2 ){
        let textForBlocked;
        if(lang === "fa"){
          textForBlocked = "شما بیش از حد کد نادرست وارد کرده اید حساب شما مسدود شد."
        }else{
          textForBlocked = "You have entered too much incorrect code. Your account has been blocked.";
        }
        notify(textForBlocked, "error");
        localStorage.removeItem("setWrong");
      }
    }

  }, [state.phoneNumber, touched, state.code]);

  const sendCodeHandler = () => {
    if (!Object.keys(errors).length && state.phoneNumber.length !== 0) {
        dispatch(registerPhone(state.phoneNumber, lang));
        setAgain(false);
    } else {
      if (errors.phone === "empty") {
        var errorText = t("emptyPhoneValidate");
      } else if (errors.phone === "length") {
        errorText = t("lengthPhoneValidate");
      } else {
        errorText = t("incorrentPhoneValidate");
      }
      notify(errorText, "error");
    }
  };
  const againHandler = () => {
    dispatch(registerPhone(state.phoneNumber, lang));
    setAgain(false);
  };
  const endTimerHandler = () => {
    setAgain(true);
  };
  const timerHandler = () => {};

  const enterCodeHandler = () => {
    if (!Object.keys(errorsCode).length && state.code.length !== 0) {
      dispatch(registerCode(state.code, state.phoneNumber, lang, router));
    } else {
      if (errorsCode.code === "empty") {
        var errorText = t("emptycodeValidate");
      } else if (errorsCode.code === "lengthCode") {
        errorText = t("lengthcodeValidate");
      }
      notify(errorText, "error");
    }
  };
  const changePhoneNUmber = (e) => {
    var persianNumbers = [
        /۰/g,
        /۱/g,
        /۲/g,
        /۳/g,
        /۴/g,
        /۵/g,
        /۶/g,
        /۷/g,
        /۸/g,
        /۹/g
      ],
      arabicNumbers = [
        /٠/g,
        /١/g,
        /٢/g,
        /٣/g,
        /٤/g,
        /٥/g,
        /٦/g,
        /٧/g,
        /٨/g,
        /٩/g
      ],
      fixNumbers = function (str) {
        if (typeof str === "string") {
          for (var i = 0; i < 10; i++) {
            str = str
              .replace(persianNumbers[i], i)
              .replace(arabicNumbers[i], i);
          }
        }
        return str;
      };
    dispatch(getphone(fixNumbers(e.target.value)));
  };

  const openClientWrong = () => {
    let errorClient; 
    if(lang === "fa"){
      errorClient =  "شما بیش از حد معقول تلاش کرده اید لطفا یک دقیقه صبر کنید";
    }else {
      errorClient = "You have tried too hard, please wait a minute";
    }
    notify(errorClient, "warning")
  }

  const focusHandler = (e) => {
    setTouched({ ...touched, [e.target.name]: true });
  };
  const changeCodeNumber = (e) => {
    var persianNumbers = [
        /۰/g,
        /۱/g,
        /۲/g,
        /۳/g,
        /۴/g,
        /۵/g,
        /۶/g,
        /۷/g,
        /۸/g,
        /۹/g
      ],
      arabicNumbers = [
        /٠/g,
        /١/g,
        /٢/g,
        /٣/g,
        /٤/g,
        /٥/g,
        /٦/g,
        /٧/g,
        /٨/g,
        /٩/g
      ],
      fixNumbers = function (str) {
        if (typeof str === "string") {
          for (var i = 0; i < 10; i++) {
            str = str
              .replace(persianNumbers[i], i)
              .replace(arabicNumbers[i], i);
          }
        }
        return str;
      };
    dispatch(getCode(fixNumbers(e.target.value)));
  };

  const TypeNumber = (e) => {
    if (!e) {
      e = window.event;
    }

    var code = e.keyCode || e.which;

    if (!e.ctrlKey) {
      if (code > 31 && (code < 48 || code > 57) && (code < 96 || code > 105)) {
        e.preventDefault();
        return false;
      }
    }
    return true;
  };

  return (
    <section>
      <div className={`row m-0 ${style.Register}`}>
        <div className="col-lg-6 col-md-6 col-12 pt-5">
          {state.loader ? (
            <Loader />
          ) : (
            <div className={style.enterNum}>
              <h1>{title} </h1>
              {state.codeStatus ? (
                <Input
                  name="code"
                  value={state.code}
                  lablelText={t("enterCode")}
                  type="text"
                  placeholder={t("enterCode")}
                  color="dark"
                  maxLength={6}
                  changehandler={(e) => changeCodeNumber(e)}
                  focusHandler={(e) => focusHandler(e)}
                  keyDown={(e) => TypeNumber(e)}
                  AutoFocus={true}
                />
              ) : (
                <Input
                  name="phone"
                  lablelText={t("phoneNumber")}
                  type="text"
                  value={state.phoneNumber}
                  placeholder={t("typeHere")}
                  color="dark"
                  maxLength={11}
                  changehandler={(e) => changePhoneNUmber(e)}
                  focusHandler={(e) => focusHandler(e)}
                  keyDown={(e) => TypeNumber(e)}
                  AutoFocus={true}
                />
              )}

              {state.codeStatus
                ? errorsCode.code &&
                  touched.code && (
                    <span className={style.error}>
                      {errorsCode.code === "empty"
                        ? t("emptyPhoneValidate")
                        : errorsCode.code === "lengthCode" && t("lengthCode")}
                    </span>
                  )
                : errors.phone &&
                  touched.phone && (
                    <span className={style.error}>
                      {errors.phone === "empty"
                        ? t("emptyPhoneValidate")
                        : errors.phone === "length"
                        ? t("lengthPhoneValidate")
                        : t("incorrentPhoneValidate")}
                    </span>
                  )}

              <div
                className={`${style.submitButtons}`}
                style={
                  state.codeStatus === false
                    ? { float: "left" }
                    : { float: "none" }
                }
              >
                {state.codeStatus === true && (
                  <NormalBtn text={t("submit")} onClick={tryClient === 5 ? openClientWrong :enterCodeHandler} />
                )}

                {state.codeStatus ? (
                  <button onClick={timerHandler} className={style.timer}>
                    {again ? (
                      <span onClick={againHandler} className={style.again}>
                        {t("sendAgain")}
                      </span>
                    ) : (
                      <span>
                        <CountdownTimer
                          count={120}
                          backgroundColor={"none"}
                          hideDay={true}
                          hideHours={true}
                          onEnd={endTimerHandler}
                        />
                      </span>
                    )}
                  </button>
                ) : (
                  <NormalBtn text={t("sendCode")} onClick={sendCodeHandler} />
                )}
              </div>
              {state.codeStatus && (
                <div className={style.editPhone}>
                  <NormalBtn
                    text={t("editPhone")}
                    onClick={() => dispatch(sendCodeFailed())}
                  />
                </div>
              )}
            </div>
          )}
        </div>
        <div className={`col-lg-6 col-md-6 col-12 p-0 ${style.pic}`}>
          <Image alt="sign image" src={"/Assets/images/1-1.jpg"} />
        </div>
      </div>
    </section>
  );
};

export default Register;
