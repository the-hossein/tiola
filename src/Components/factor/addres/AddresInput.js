import React, { useEffect, useState } from "react";
import Style from "../UserFactor.module.css";
import Checkbox from "@mui/material/Checkbox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import FormControl, { useFormControl } from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import Box from "@mui/material/Box";
import Radio from "@mui/material/Radio";
import { useTranslation } from "react-i18next";
import EditBtn from "./EditBtn";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import {
  checkAddress,
  deleteAddresUser,
  getAddres,
  getuserAddress,
  loadingAddresFalse,
  loadingAddress
} from "../../../redux/factor/factorAction";

//make style for components mui
import { makeStyles } from "@mui/styles";
import callApi from "../../../api/callApi";
import {
  BASE_URL,
  CHOSE_ADDRESS,
  DELETE_ADDRESS,
  UPDATE_ADDRESS
} from "../../../api/urls";
import { notify } from "../../../tools/toast/toast";

const useStyle = makeStyles({
  applyFont: {
    fontFamily: "var(--font) !important"
  }
});

const AddresInput = ({ data, id, checkicon, icon, onChangeRadio ,allData}) => {
  //useStyle for stylesheet mui
  const classes = useStyle();
  const { t } = useTranslation();
  const state = useSelector((state) => state.stateFactor);
  const lang = useSelector((state) => state.stateLang.lng);
  const user = useSelector((state) => state.stateRegister);
  const [addresValue, setAddresvalue] = useState(data.address);
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);

  const [deleteAddres, setDeleteAddres] = useState(false);
  const [checked, setChecked] = useState(data.isActive);
  if (typeof window !== "undefined") {
    var ls = localStorage.getItem("userToken");
    if (ls !== null) {
      var userToken = JSON.parse(ls);
      var token = userToken.token;
    }
  }
  const changeRadio = (e) => {
    dispatch(getAddres(document.getElementById(`${e.target.value}`).value));
    console.log(document.getElementById(`${e.target.value}`).value);
    dispatch(checkAddress(e.target.value));

    const choseAddress = async () => {
      dispatch(loadingAddress());
      var myHeaders = new Headers();
      myHeaders.append("Authorization", `Bearer ${token}`);
      const choseStatus = await callApi(
        `${BASE_URL + CHOSE_ADDRESS}?UserId=${user.userid}&id=${data.id}`,
        "{}",
        myHeaders,
        "POST"
      );

      if (choseStatus[0].code === 200) {
        dispatch(getuserAddress(user.userid));
      } else {
        notify("warning", "error");
      }
    };
    choseAddress();
  };
  const updateHandler = (e) => {
    dispatch(loadingAddress());

    const editApi = async () => {
      var myHeaders = new Headers();
      myHeaders.append("Authorization", `Bearer ${token}`);
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        id: data.id,
        address: addresValue,
        userid: user.userid
      });
      console.log(raw);
      const edited = await callApi(
        `https://api.tiolastyle.com/api/v1/User/UpdateAddress`,
        raw,
        myHeaders,
        "POST"
      );

      if (edited[0].code == 200) {
        dispatch(loadingAddresFalse());
        setEdit(false);
        if (lang === "fa") {
          var text = "آدرس ویرایش شد";
        } else {
          text = "edited addres";
        }
        notify(text, "success");
      }
    };
    editApi();
  };
  const changeAddres = (e) => {
    dispatch(getAddres(e.target.value));
    setAddresvalue(e.target.value);
  };
  const deleteAddress = () => {
    dispatch(deleteAddresUser(allData,data.id));
  };
  if (typeof data !== "undefined") {
    return (
      <div>
        <EditBtn
          text={
            !edit ? (
              <span onClick={() => setEdit(true)}>{t("edit")}</span>
            ) : (
              <span onClick={updateHandler} className={Style.submit}>
                {t("submit")}
              </span>
            )
          }
        />
        <EditBtn
          onclick={deleteAddress}
          text={<DeleteIcon sx={{ fontSize: 17 }} />}
        />

        <Box
          component="form"
          noValidate
          autoComplete="off"
          className={Style.inputContainer}
        >
          <FormControl
            sx={{ width: "100%", position: "relative" }}
            className={classes.applyFont}
          >
            <OutlinedInput
              onChange={changeAddres}
              placeholder={t("addresPlaceHolder")}
              value={addresValue}
              readOnly={edit ? false : true}
              multiline={edit ? true : false}
              style={
                edit
                  ? { backgroundColor: "#ffffff", color: "#000000" }
                  : { backgroundColor: "#ffffff", color: "#707070" }
              }
              className={`${Style.addresinput} ${classes.applyFont}`}
              id={id}
            />
            <Radio
              checkedIcon={checkicon}
              icon={icon}
              checked={checked}
              onChange={changeRadio}
              value={id}
              name="radio-buttons"
              inputProps={{ "aria-label": `${id}` }}
              className={lang === "en" ? Style.checkedRight : Style.checkedLeft}
            />
          </FormControl>
        </Box>
      </div>
    );
  }
};

export default AddresInput;
