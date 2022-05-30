import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import { useTranslation } from "react-i18next";
import style from "./PopUp.module.css";
import Input from "../input/Input";
import {
  closePopUp,
  getCode,
  getphone,
  registerCode,
  registerPhone,
  sendCodeFailed
} from "../../redux/register/registerAction";
import { validationNumber } from "../../Components/register/validationNumber";
import { validateCode } from "../../Components/register/validateCode";
import { notify } from "../toast/toast";
import { useRouter } from "next/router";
import CountdownTimer from "react-component-countdown-timer";
import Loader from "../loader/Loader";
const PopUp = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.stateRegister);
  const lang = useSelector((state) => state.stateLang.lng);
  const router = useRouter();
  const [again, setAgain] = useState(false);
  const [errors, setError] = useState({});
  const [touched, setTouched] = useState({ phone: false, code: false });
  const [errorsCode, setErrorsCode] = useState({});
  useEffect(() => {
    setError(validationNumber(state.phoneNumber));
    setErrorsCode(validateCode(state.code));
    console.log(errors);
  }, [state.phoneNumber, touched, state.code]);
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
  const focusHandler = (e) => {
    setTouched({ ...touched, [e.target.name]: true });
  };
  const changeCodeNumber = (e) => {
    dispatch(getCode(e.target.value));
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
  const sendCodeHandler = () => {
    if (!Object.keys(errors).length && state.phoneNumber.length !== 0) {
      dispatch(registerPhone(state.phoneNumber, lang));
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
  const closeHndler = () => {
    dispatch(closePopUp());
    dispatch(sendCodeFailed());
  };
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
  const againHandler = () => {
    dispatch(registerPhone(state.phoneNumber, lang));
    setAgain(false);
  };
  const endTimerHandler = () => {
    setAgain(true);
  };
  return (
    state.popup === true && (
      <div className={style.popoup}>
        <div className={style.popoupContent}>
          {state.loader ? (
            <Loader />
          ) : (
            <>
              <div className={style.popoupHeader}>
                <span>{t("signIN")}</span>
                <CloseIcon
                  sx={{ color: "#707070", fontSize: 18, cursor: "pointer" }}
                  className={style.close}
                  onClick={closeHndler}
                />
              </div>
              <div className={style.content}>
                {/* <p>{t("signTextPopUp")}</p> */}
                {state.codeStatus ? (
                  <Input
                    name="code"
                    value={state.code}
                    lablelText={t("TextCodePopUp")}
                    type="text"
                    placeholder={t("enterCodePlaceHolder")}
                    color="dark"
                    maxLength={6}
                    changehandler={(e) => changeCodeNumber(e)}
                    focusHandler={(e) => focusHandler(e)}
                    keyDown={(e) => TypeNumber(e)}
                  />
                ) : (
                  <Input
                    name="phone"
                    lablelText={t("signTextPopUp")}
                    type="text"
                    value={state.phoneNumber}
                    placeholder={t("enterPhonePlaceHolder")}
                    color="dark"
                    maxLength={11}
                    changehandler={(e) => changePhoneNUmber(e)}
                    focusHandler={(e) => focusHandler(e)}
                    keyDown={(e) => TypeNumber(e)}
                  />
                )}

                {state.codeStatus ? (
                  <button className={style.donebtn} onClick={enterCodeHandler}>
                    {t("done")}
                  </button>
                ) : (
                  <button className={style.donebtn} onClick={sendCodeHandler}>
                    {t("done")}
                  </button>
                )}
                <span>
                  {state.codeStatus
                    ? errorsCode.code &&
                      touched.code && (
                        <>
                          <span className={style.error}>
                            {errorsCode.code === "empty"
                              ? t("emptyPhoneValidate")
                              : errorsCode.code === "lengthCode" &&
                                t("lengthCode")}
                          </span>
                     
                        </>
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
                
                </span>
                {state.codeStatus&&(again===true) ? (
                  <span
                    onClick={againHandler}
                    className="d-block mt-2 cursor-pointer"
                  >
                    {t("sendAgain")}
                  </span>
                ) :(state.codeStatus&&again===false) && (
                  <span className="d-block mt-2">
                    <CountdownTimer
                      color="#707070"
                      size={10}
                      count={120}
                      backgroundColor={"none"}
                      hideDay={true}
                      hideHours={true}
                      onEnd={endTimerHandler}
                    />
                  </span>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    )
  );
};

export default PopUp;
