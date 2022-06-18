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

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { InputAdornment } from "@mui/material";
import AddressFeild from "./AddressFeild";


const useStyle = makeStyles({
  applyFont: {
    fontFamily: "var(--font) !important",
    direction: "var(--direction) !important"
  },
  icon: {
  },
  open : {
    transform: "translateX()",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "8px",
    fontFamily: "var(--font) !important"
  },
  container: {
    fontFamily: "var(--font) !important",
    direction: "var(--direction)",
    boxShadow: "none",
    borderRadius: "var(--input-Radius) !important"
  },
});

const AddresInput = ({ data, id, checkicon, icon, onChangeRadio ,allData}) => {
  //useStyle for stylesheet mui
  const classes = useStyle();
  const { t } = useTranslation();
  const state = useSelector((state) => state.stateFactor);
  const lang = useSelector((state) => state.stateLang.lng);
  const user = useSelector((state) => state.stateRegister);
  const [addresValue, setAddresvalue] = useState(data.address);
  const [postCode, setPostCode] = useState(data.postCode);
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

  //set post code 
  const changePostCodeHandler = (e) => {
    if(e.target.value.length <= 10){
      setPostCode(e.target.value);
    }
  }

  const changeRadio = (e) => {
    dispatch(getAddres(document.getElementById(`${e.target.value}`).value));
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
    if(postCode.length === 10){
      if(addresValue.length <= 15){
        let textShow ;
        if(lang === 'fa'){
          textShow = "لطفا ادرس خود را به طور دقیق وارد کنید."
        }else {
          textShow = "Please enter your exact address."
        }
        notify(textShow, "warning")
      }else{
        dispatch(loadingAddress());
        const editApi = async () => {
          var myHeaders = new Headers();
          myHeaders.append("Authorization", `Bearer ${token}`);
          myHeaders.append("Content-Type", "application/json");
    
          var raw = JSON.stringify({
            id: data.id,
            address: addresValue,
            userid: user.userid,
            postCode: postCode
          });
          const edited = await callApi(
            BASE_URL + UPDATE_ADDRESS,
            raw,
            myHeaders,
            "POST"
          );
    
          if (edited[0].code == 200) {
            dispatch(loadingAddresFalse());
            dispatch(getuserAddress(user.userid));
            setEdit(false);
            if (lang === "fa") {
              var text = "آدرس ویرایش شد";
            } else {
              text = "edited addres";
            }
            notify(text, "success");
          }
        }
        editApi();
      };
    }else{
      let textShow ;
      if(lang === "fa"){
        if(postCode.length === 0){
          textShow = "لطفا کد پستی خود را وارد کنید."
        }else {
          textShow = "کد پستی باید 10 رقم باشد"
        }
      }else{
        if(postCode.length === 0){
          textShow = "Please enter your post code."
        }else {
          textShow = "Postcode must be 10 digits"
        }
      }
      notify(textShow, "error")
    }
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
        <AddressFeild 
          checkicon={checkicon}
          icon={icon} 
          checked={checked} 
          changeRadio={changeRadio} 
          id={id} 
          addresValue={addresValue}
          changeAddres={changeAddres}
          edit={edit}
          changePostCodeHandler={changePostCodeHandler} 
          postCode={postCode}  
          deleteAddress={deleteAddress}
          setEdit={setEdit}
          updateHandler={updateHandler}
        />
        {/* <Box
          component="form"
          noValidate
          autoComplete="off"
          className={Style.inputContainer}
        > */}
          {/* new code */}
          {/* <Accordion className={classes.container}>
            <AccordionSummary
              // expandIcon={
              aria-controls="panel1a-content"
              id="panel1a-header"
              className={classes.open}
            >
              <ExpandMoreIcon className={classes.icon} />
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
              <Typography className={classes.applyFont}>{addresValue}</Typography>
            </AccordionSummary>
            <AccordionDetails>
          <Typography className={classes.applyFont}>
          <FormControl
            sx={{ width: "100%", position: "relative" }}
            className={classes.applyFont}
          >
            <OutlinedInput
              onChange={changeAddres}
              placeholder={t("addresPlaceHolder")}
              value={addresValue}
              // postCode
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
            <OutlinedInput
              onChange={changePostCodeHandler}
              placeholder={lang === "fa" ? "لطفا کد پستی خود را وارد کنید" :"Enter your post code"}
              value={postCode}
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
            </div>
          </FormControl>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box> */}
      </div>
    );
  }
};

export default AddresInput;
