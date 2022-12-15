import { Box } from '@mui/system';
import React, { useState } from 'react';
import Style from "../UserFactor.module.css";
import Radio from "@mui/material/Radio";
import FormControl, { useFormControl } from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import EditBtn from "./EditBtn";
import DeleteIcon from "@mui/icons-material/Delete";
import Typography from '@mui/material/Typography';
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import {
    checkAddress,
    deleteAddresUser,
    getAddres,
    getuserAddress,
    loadingAddresFalse,
    loadingAddress
} from "../../../redux/factor/factorAction";

import { makeStyles } from "@mui/styles";

const useStyle = makeStyles({
    applyFont: {
      fontFamily: "var(--font) !important",
      direction: "var(--direction) !important"
    },
    applyFontFa: {
        fontFamily: "'IRANSansWeb' !important",
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
    inputAddress: {
        // width: '100%',
        fontFamily: "'IRANSansWeb' !important",
        direction: "var(--direction) !important",
        padding: "0 !important",
        // margin: "0 !important"
    },
  });
  

const AddressFeild = ({checkicon, icon, checked, changeRadio, id, addresValue, changeAddres, edit, changePostCodeHandler, postCode, deleteAddress, setEdit, updateHandler }) => {
    const classes = useStyle();

    const [openFiled , setOpenFiled] = useState(false);
    const lang = useSelector((state) => state.stateLang.lng);
    const { t } = useTranslation();

    const btnEdit = (e) => {
        e.preventDefault();
        // setEdit(true);
        setEdit(true)
        setOpenFiled(preveOpen => !preveOpen);
    }

    return (
        <div className={`${Style.filedContainer} ${openFiled && Style.openFiledBody}`}>
          <button className={lang !== 'fa' ? Style.btnArdalanPasandEn : Style.btnArdalanPasandFa } onClick={btnEdit}>
                <span>{t("edit")}</span> 
          </button>
            <Box
                component="form"
                noValidate
                autoComplete="off"
                className={`${Style.inputContainer} `}
            >
          {/* new code */}
          <div className={`${Style.filedAddressX}  `}>
              <div className={Style.titleFiled}>
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
                    <h4 className={`${classes.applyFontFa} ${Style.titleText} `}>{addresValue}</h4>
              </div>
              <div className={Style.parentClient}>
                <div className={` ${Style.filedClient} ${openFiled ? Style.openFiled : Style.closeFiled}`}>
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
                        multiline={false}
                        style={
                            edit
                            ? { backgroundColor: "#ffffff", color: "#000000" }
                            : { backgroundColor: "#ffffff", color: "#707070" }
                        }
                        className={`${Style.addresinput} ${classes.inputAddress}`}
                        id={id}
                        />
                        <OutlinedInput
                        onChange={changePostCodeHandler}
                        placeholder={lang === "fa" ? "لطفا کد پستی خود را وارد کنید" :"Enter your post code"}
                        value={postCode}
                        readOnly={edit ? false : true}
                        multiline={false}
                        type="number"
                        style={
                            edit
                            ? { backgroundColor: "#ffffff", color: "#000000", width: '50%' }
                            : { backgroundColor: "#ffffff", color: "#707070", width: '50%' }
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
                </div>
              </div>
          </div>
        </Box>
        </div>
    );
};

export default AddressFeild;