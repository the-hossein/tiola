import React from "react";
import AddresInput from "./addres/AddresInput";
import style from "./UserFactor.module.css";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";

import { useSelector } from "react-redux";

import Loader from "../../tools/loader/Loader";

import AddNewAddress from "./addres/AddNewAddress";

const UserAddres = () => {
 
  const state = useSelector((state) => state.stateFactor);

 
  if (typeof window !== "undefined") {
    var ls = localStorage.getItem("userToken");
  }

  return (
    <div className="row m-0">
      <div
        className={`col-lg-6 col-md-6 col-12 mb-3 overflow-hidden ${style.map}`}
      >
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
                      sx={{ fontSize: 30, color: "#c7c7c7", stroke: "white" }}
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
