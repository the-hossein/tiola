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
import { getAddres, getuserAddress, loadingAddresFalse, loadingAddress } from "../../../redux/factor/factorAction";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import { notify } from "../../../tools/toast/toast";

//make style for components mui
import { makeStyles } from "@mui/styles";
import callApi from "../../../api/callApi";
import { ADD_ADDRESS, BASE_URL, DELETE_ADDRESS } from "../../../api/urls";
const useStyle = makeStyles({
  applyFont: {
    fontFamily: "var(--font) !important"
  }
});

const AddNewAddress = () => {
  const [newAddres, setNewAddres] = useState("");
  const classes = useStyle();
  const { t } = useTranslation();
  const state = useSelector((state) => state.stateFactor);
  const user = useSelector((state) => state.stateRegister);

  const lang = useSelector((state) => state.stateLang.lng);
  const dispatch = useDispatch();
  if (typeof window !== "undefined") {
    var ls = localStorage.getItem("userToken");
    if (ls !== null) {
      var userToken = JSON.parse(ls);
      var token = userToken.token;
    }
  }
  const changeAddres = (e) => {
    setNewAddres(e.target.value);
  };

  const addAddres = (e) => {

    dispatch(loadingAddress())
 
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append("Content-Type", "application/json");
    console.log(state.addres);
    var raw = JSON.stringify({
      id: user.basketid,
      address: `${newAddres}`,
      userid: user.userid
    });
    console.log(e.target.value)
    if (newAddres !== "") {
      const addAddresUser = async () => {
        console.log(raw);
        const addStatus = await callApi(
          BASE_URL + ADD_ADDRESS,
          raw,
          myHeaders,
          "POST"
        );
        if (addStatus[0].code === 200) {
          dispatch(getuserAddress(user.userid));
          dispatch(loadingAddresFalse())
        }
      };
      addAddresUser();
    } else {
      dispatch(loadingAddresFalse())
      if (lang === "fa") {
        var text = "لطفا آدرس خود را وارد کنید";
      } else {
        text = "plase enter your addres";
      }
      notify(text, "error");
    }
  };
  return (
    <div>
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
            value={newAddres}
            readOnly={false}
            multiline={true}
            className={`${Style.addresinput} ${classes.applyFont}`}
            id="addAddres"
            style={{ backgroundColor: "#ffffff", color: "#000000" }}
          />
          <Radio
            checkedIcon={
              <AddBoxOutlinedIcon sx={{ fontSize: 30, color: "#b5b5b5" }} />
            }
            icon={
              <AddBoxOutlinedIcon sx={{ fontSize: 30, color: "#b5b5b5" }} />
            }
       
            onClick={addAddres}

            value="add"
            name="radio-buttons"
            inputProps={{ "aria-label": "add" }}
            className={
              lang === "en" ? Style.checkedRight : Style.checkedLeft
            }
          />
        </FormControl>
      </Box>
    </div>
  );
};

export default AddNewAddress;
