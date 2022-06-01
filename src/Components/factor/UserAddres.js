import React, { useState } from "react";
import AddresInput from "./addres/AddresInput";
import style from "./UserFactor.module.css";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import { useDispatch, useSelector } from "react-redux";
import {
  checkAddress,
  getAddres,
  getuserAddress
} from "../../redux/factor/factorAction";
import Loader from "../../tools/loader/Loader";
import callApi from "../../api/callApi";
import { ADD_ADDRESS, BASE_URL } from "../../api/urls";
const UserAddres = () => {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);
  const [edit, setEdit] = useState(false);
  const [address, setAddress] = useState();
  const state = useSelector((state) => state.stateFactor);
  const user = useSelector((state) => state.stateRegister);

  const changeRadio = (e) => {
    dispatch(getAddres(document.getElementById(`${e.target.value}`).value));
    dispatch(checkAddress(e.target.value));
  };
  if (typeof window !== "undefined") {
    var ls = localStorage.getItem("userToken");
  }

  const addAddres = (e) => {
    const userToken = JSON.parse(ls);
    const token = userToken.token;

    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append("Content-Type", "application/json");
    console.log(state.addres);
    var raw = JSON.stringify({
      id: user.basketid,
      address: `${state.addres}`,
      userid: user.userid
    });
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
      }
    };
    addAddresUser();
  };
  return (
    <div className="row m-0">
      <div className={`col-lg-6 col-md-6 col-12 overflow-hidden ${style.map}`}>
        <img src="/Assets/images/map.png" />
      </div>
      <div className="col-lg-6 col-md-6 col-12">
        {state.loading ? (
          <Loader />
        ) : (
          state.allAddress.map((item) => (
            <>
              <AddresInput
                data={item}
                id={item.id}
                checkicon={<CheckBoxIcon sx={{ fontSize: 30 }} />}
                icon={
                  <CheckBoxOutlineBlankIcon
                    sx={{ fontSize: 30, color: "#c7c7c7" }}
                  />
                }
                onChangeRadio={(e) => changeRadio(e)}
              />
            </>
          ))
        )}

        <AddresInput
          data="addAddress"
          id="add"
          checkicon={
            <AddBoxOutlinedIcon sx={{ fontSize: 30, color: "#b5b5b5" }} />
          }
          icon={<AddBoxOutlinedIcon sx={{ fontSize: 30, color: "#b5b5b5" }} />}
          onChangeRadio={(e) => addAddres(e)}
          type="add"
        />
      </div>
    </div>
  );
};

export default UserAddres;
