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
const AddresInput = ({ id, checkicon, icon, onChangeRadio }) => {
  const { t } = useTranslation();
  const state = useSelector((state) => state.stateFactor);
  const lang = useSelector((state) => state.stateLang);

  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);
  const [edit, setEdit] = useState(false);
  const [address, setAddress] = useState();
  const [addresInput, setAddresInput] = useState("City1-street1-num1-unit-1");
  const [deleteAddres, setDeleteAddres] = useState(false);
  const changeAddres = (e) => {
    setAddresInput(e.target.value);
  };
  return !deleteAddres ? (
    <div>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        className={Style.inputContainer}
      >
        <EditBtn onclick={() => setEdit(true)} text={t("edit")} />
        <EditBtn
          onclick={() => setDeleteAddres(true)}
          text={<DeleteIcon sx={{ fontSize: 17 }} />}
        />

        <FormControl sx={{ width: "100%" }}>
          <OutlinedInput
            onChange={changeAddres}
            placeholder={
              id === "add" ? t("addCmPlaceHOlder") : t("addresPlaceHolder")
            }
            value={addresInput}
            readOnly={edit ? false : true}
            multiline={true}
            style={
              edit
                ? { backgroundColor: "#ffffff", color: "#000000" }
                : { backgroundColor: "#ffffff", color: "#707070" }
            }
            className={Style.addresinput}
            id={id}
          />
        </FormControl>
        <Radio
          checkedIcon={checkicon}
          icon={icon}
          checked={state.check === id}
          onChange={onChangeRadio}
          value={id}
          name="radio-buttons"
          inputProps={{ "aria-label": `${id}` }}
          className={lang.lng === "en" ? Style.checkedRight : Style.checkedLeft}
        />
      </Box>
    </div>
  ) : (
    <></>
  );
};

export default AddresInput;
