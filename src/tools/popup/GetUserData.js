import React, { useState } from "react";
import style from "./PopUp.module.css";

import { useTranslation } from "react-i18next";

import Input from "../input/Input";
import { DatePicker } from "react-advance-jalaali-datepicker";
import { useDispatch, useSelector } from "react-redux";
import {
  closePopUp,
  closePopUpGetData
} from "../../redux/register/registerAction";
import { notify } from "../toast/toast";
import callApi from "../../api/callApi";
import { BASE_URL, UPDATE_PROFILE_AFTER_PAYMENT } from "../../api/urls";
const GetUserData = () => {
  const { t } = useTranslation();
  const state = useSelector((state) => state.stateRegister);

  const dispatch = useDispatch();
  const [birth, setBirth] = useState("");
  const [userData, setUserData] = useState({
    name: "",
    family: ""
  });
  if (typeof window !== "undefined") {
    var ls = localStorage.getItem("userToken");
  }
  const changehandler = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  const donehandler = () => {
    console.log(userData);
    if (userData.name !== "" && userData.family !== "null" && birth !== "") {
      const adduserData = async () => {
        const userToken = JSON.parse(ls);
        const token = userToken.token;
        var myHeaders = {"Content-Type": "application/json", "Authorization": `Bearer ${token}`}
        var date = new Date(birth * 1000);
        console.log(state.userId);
        const raw = JSON.stringify({
          userId: `${state.userid}`,
          name: `${userData.name}`,
          family: `${userData.family}`,
          birthdaydatetime: `${date.toISOString()}`
        });
        const added = await callApi(
          BASE_URL + UPDATE_PROFILE_AFTER_PAYMENT,
          raw,
          myHeaders,
          "POST"
        );
        if (added[0].code === 200) {
          notify(t("saveDataSuccess"), "success");

          dispatch(closePopUpGetData());
        } else {
          notify(t("saveDataFailed"), "success");
        }
      };
      adduserData();
    } else {
      notify(t("completeUserData"), "error");
    }
  };
  console.log(birth);
  return (
    state.popupGetData === true && (
      <div className={style.popoup}>
        <div className={style.popoupContent}>
          <div className={style.popoupHeader}>
            <span>{t("compliteInfo")}</span>
          </div>
          <div className={style.content}>
            <Input
              name="name"
              value={userData.name}
              type="text"
              placeholder={t("enterName")}
              color="dark"
              changehandler={(e) => changehandler(e)}
              //   focusHandler={(e) => focusHandler(e)}
              //   keyDown={(e) => TypeNumber(e)}
            />
            <Input
              name="family"
              value={userData.family}
              type="text"
              placeholder={t("enterfamily")}
              color="dark"
              changehandler={(e) => changehandler(e)}
              //   focusHandler={(e) => focusHandler(e)}
              //   keyDown={(e) => TypeNumber(e)}
            />
            {/* <Input
            name="userBirth"
            //   value={state.code}

            type="text"
            placeholder={t("enterBirth")}
            color="dark"
            //   changehandler={(e) => changeCodeNumber(e)}
            //   focusHandler={(e) => focusHandler(e)}
            //   keyDown={(e) => TypeNumber(e)}
          /> */}
            <DatePicker
              placeholder={t("enterBirth")}
              format="jYYYY-jMM-jDD"
              onChange={(e) => setBirth(e)}
              id="datePicker"
              customClass="form-control text-start"
              preSelected={birth}
            />
            <button className={style.donebtn} onClick={donehandler}>
              {t("done")}
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default GetUserData;
