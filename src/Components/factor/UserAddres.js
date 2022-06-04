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
import AddNewAddress from "./addres/AddNewAddress";
const UserAddres = () => {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);
  const [edit, setEdit] = useState(false);
  const [address, setAddress] = useState();
  const state = useSelector((state) => state.stateFactor);
  const user = useSelector((state) => state.stateRegister);

  if (typeof window !== "undefined") {
    var ls = localStorage.getItem("userToken");
  }

  return (
    <div className="row m-0">
      <div className={`col-lg-6 col-md-6 col-12 overflow-hidden ${style.map}`}>
        <img src="/Assets/images/map.png" />
      </div>
      <div className="col-lg-6 col-md-6 col-12">
        {state.loadingAddress ? (
          <Loader />
        ) : (
          <>
            {state.allAddress.map((item) => (
              <>
                <AddresInput
                  data={item}
                  allData={state.allAddress}
                  id={item.id}
                  checkicon={<CheckBoxIcon sx={{ fontSize: 30 }} />}
                  icon={
                    <CheckBoxOutlineBlankIcon
                      sx={{ fontSize: 30, color: "#c7c7c7" }}
                    />
                  }
                />
              </>
            ))}
            <AddNewAddress />
          </>
        )}
      </div>
    </div>
  );
};

export default UserAddres;
