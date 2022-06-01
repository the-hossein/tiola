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
import { getAddres } from "../../../redux/factor/factorAction";

//make style for components mui
import { makeStyles } from "@mui/styles";
import callApi from "../../../api/callApi";
import { BASE_URL, DELETE_ADDRESS } from "../../../api/urls";

const useStyle = makeStyles({
  applyFont: {
    fontFamily: "var(--font) !important"
  }
});

const AddresInput = ({ data, id, checkicon, icon, onChangeRadio, type }) => {
  console.log(data);
  //useStyle for stylesheet mui
  const classes = useStyle();

  const { t } = useTranslation();
  const state = useSelector((state) => state.stateFactor);
  const lang = useSelector((state) => state.stateLang);

  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);
  const [edit, setEdit] = useState(false);
  const [address, setAddress] = useState();
  // const [addresInput, setAddresInput] = useState("City1-street1-num1-unit-1");
  const [deleteAddres, setDeleteAddres] = useState(false);
  if (typeof window !== "undefined") {
    var root = document.documentElement;
    var ls = localStorage.getItem("userToken");
    var userToken = JSON.parse(ls);

    var token = userToken.token;
  }
  const changeAddres = (e) => {
    dispatch(getAddres(e.target.value));
    console.log(state);
  };
  const deleteAddress = () => {
    const deleted = async () => {
      var myHeaders = new Headers();
      myHeaders.append("Authorization", `Bearer ${token}`);
      const status = await callApi(
        `${BASE_URL + DELETE_ADDRESS}?id=${data.id}`,
        "{}",
        myHeaders,
        "POST"
      );
     if(status[0].code===200){
      setDeleteAddres(true)
     }
    };
    deleted();
  };
  if (typeof data !== "undefined") {
    return !deleteAddres ? (
      <div>
        {type !== "add" ? (
          <>
            <EditBtn onclick={() => setEdit(true)} text={t("edit")} />
            <EditBtn
              onclick={ deleteAddress}
              text={<DeleteIcon sx={{ fontSize: 17 }} />}
            />
          </>
        ) : null}
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
              placeholder={
                type === "add" ? t("addCmPlaceHOlder") : t("addresPlaceHolder")
              }
              value={data.address}
              readOnly={type === "add" ? false : edit ? false : true}
              multiline={true}
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
              checked={type!=="add"&&data.id === id}
              onChange={onChangeRadio}
              value={id}
              name="radio-buttons"
              inputProps={{ "aria-label": `${id}` }}
              className={
                lang.lng === "en" ? Style.checkedRight : Style.checkedLeft
              }
            />
          </FormControl>
        </Box>
      </div>
    ) : (
      <></>
    );
  }
};

export default AddresInput;
