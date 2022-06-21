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
  getAddres,
  getuserAddress,
  loadingAddresFalse,
  loadingAddress
} from "../../../redux/factor/factorAction";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import { notify } from "../../../tools/toast/toast";

//make style for components mui
import { makeStyles } from "@mui/styles";
import callApi from "../../../api/callApi";
import { ADD_ADDRESS, BASE_URL, DELETE_ADDRESS } from "../../../api/urls";
const useStyle = makeStyles({
  applyFont: {
    fontFamily: "var(--font) !important"
  },
  postCode: {
    fontFamily: "var(--font) !important",
    border: "1px solid #707070",
    width: "50%"
  },
  container: {
    fontFamily: "var(--font) !important",
    direction: "var(--direction)",
    boxShadow: "none",
    borderRadius: "var(--input-Radius) !important"
  },
  addressFiled: {}
});

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { InputAdornment } from "@mui/material";
import Loader from "../../../tools/loader/Loader";
import AddBoxOutlined from "@mui/icons-material/AddBoxOutlined";

const AddNewAddress = () => {
  const [newAddres, setNewAddres] = useState("");
  const [postCode, setPostCode] = useState("");
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

  const changePostCode = (e) => {
    if (e.target.value.length <= 10) {
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
      setPostCode(fixNumbers(e.target.value));
    }
  };

  const addAddres = (e) => {
    if (postCode.length === 10) {
      
      if (newAddres !== "") {
        if(newAddres.length <= 10){
          let textAddress;
          if(lang === "fa"){
            textAddress = "لطفا ادرس خود را به طور دقیق وارد کنید."
          }else {
            textAddress = "Please enter your exact address."
          }
          notify(textAddress, "warning")
        }else{
          dispatch(loadingAddress());
            const addAddresUser = async () => { 
              try {
                var myHeaders = new Headers();
                myHeaders.append("Authorization", `Bearer ${token}`);
                myHeaders.append("Content-Type", "application/json");
                var raw = JSON.stringify({
                  id: user.basketid,
                  address: `${newAddres}`,
                  userid: user.userid,
                  postcode: postCode
                });
                const addStatus = await callApi(
                  BASE_URL + ADD_ADDRESS,
                  raw,
                  myHeaders,
                  "POST"
                );
                if (addStatus[0].code === 200) {
                  dispatch(getuserAddress(user.userid));
                } else {
                  dispatch(loadingAddresFalse());
                  if (lang === "fa") {
                    var text = "ثبت آدرس با خطا مواجه شد";
                  } else {
                    text = "ثبت آدرس با خطا مواجه شد";
                  }
                  notify(text, "error");
                }
              } catch {
                if (lang === "fa") {
                  var text = "ثبت آدرس با خطا مواجه شد";
                } else {
                  text = "ثبت آدرس با خطا مواجه شد";
                }
                notify(text, "error");
              }
            };
            addAddresUser();
        }
      } else {
        dispatch(loadingAddresFalse());
        if (lang === "fa") {
          var text = "لطفا آدرس خود را وارد کنید";
        } else {
          text = "plase enter your addres";
        }
        notify(text, "error");
      }
    } else {
      let textShow;
      if (postCode.length === 0) {
        if (lang === "fa") {
          textShow = "لطفا کد پستی خود را وارد کنید.";
        } else {
          textShow = "Please enter your post code.";
        }
      } else {
        if (lang === "fa") {
          textShow = "کد پستی باید 10 رقم باشد";
        } else {
          textShow = "Postcode must be 10 digits";
        }
      }
      notify(textShow, "error");
    }
  };
  return(
    <div className={lang === "fa" ? Style.addingAddres : Style.addingAddresEn}>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        className={Style.inputContainer}
      >
        <Accordion className={classes.container}>
          <AccordionSummary
            expandIcon={
              <AddBoxOutlinedIcon
                sx={{ fontSize: 30, color: "#b5b5b5", stroke: "white" }}
              />
            }
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.applyFont}>
              {t("addresPlaceHolder")}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <FormControl
                sx={{ width: "100%", position: "relative" }}
                className={classes.applyFont}
              >
                <OutlinedInput
                  onChange={changeAddres}
                  placeholder={t("addresPlaceHolder")}
                  value={newAddres}
                  readOnly={false}
                  multiline={false}
                  className={`${Style.addresinput} ${classes.applyFont}`}
                  id="addAddres"
                  style={{ backgroundColor: "#ffffff", color: "#000000" }}
                />

                <div className={Style.handlerContainer}>
                  <div className={Style.containerPostCode}>
                    <input
                      type="number"
                      placeholder={
                        lang === "fa"
                          ? "لطفا کد پستی خود را وارد کنید"
                          : "Enter your post code"
                      }
                      value={postCode}
                      onChange={changePostCode}
                      className={`${Style.postCode} ${
                        postCode.length !== 10 && Style.postCodeError
                      }`}
                    />
                    <span
                      className={postCode.length !== 10 && Style.errorShowPost}
                    >
                      *{t("errorPostCode")}
                    </span>
                  </div>
                  <button type="button" onClick={addAddres}>
                    {t("done")}
                  </button>
                </div>

                {/* <Radio
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
          /> */}
              </FormControl>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </div>
  ) 
  
};

export default AddNewAddress;
