import React from "react";
import ColorPick from "../../../tools/colorPick/ColorPick";
import { useTranslation } from "react-i18next";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import style from "./BuyList.module.css";
import PrimaryButton from "../../../tools/primaryButton/PrimaryButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
const MbList = () => {
  const { t } = useTranslation();
  const addwatch = () => {};
  return (
 <div className={style.Mbrow}>
     <CloseOutlinedIcon sx={{ fontSize: 24 }} className={style.close} />
        <div
      className={`d-flex flex-column justify-content-between w-100 `}
    >

      <ul className="d-flex align-items-center justify-content-around  w-100 p-0">
        <li>{t("scurf") + " No 1"}</li>
        {t("code") + "1170"}
        <li className={style.collection}>{t("BlueOcean")}
        
          <ColorPick color="#A2A2C5" />
        </li>
    
      </ul>
      <div className="d-flex flex-row align-items-center justify-content-evenly mt-3 mb-3">
      <img src="/Assets/images/3.jpeg" />
      <div>
      <div className="d-flex flex-row align-items-center justify-content-center">
      <FontAwesomeIcon icon={faMinus} className={style.minus} />
        <span className={style.count}>2</span>
        <AddOutlinedIcon sx={{ fontSize: 30, margin: 0 }} />
      </div>
        <PrimaryButton
          light={true}
          btnText={t("addWatchList")}
          onClick={addwatch}
        />
      </div>
      </div>
    </div>
 </div>
  );
};

export default MbList;
