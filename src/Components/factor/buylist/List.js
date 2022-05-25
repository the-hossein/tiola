import React, { useLayoutEffect, useState } from "react";
import ColorPick from "../../../tools/colorPick/ColorPick";
import { useTranslation } from "react-i18next";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import MinimizeOutlinedIcon from "@mui/icons-material/MinimizeOutlined";
import style from "./BuyList.module.css";
import PrimaryButton from "../../../tools/primaryButton/PrimaryButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import MbList from "./MbList";
const List = () => {
  const [size, setSize] = useState([0]);
  const { t } = useTranslation();
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  const addwatch = () => {};
  return size > 768 ? (
    <div className={`row m-0 p-3 justify-content-between w-100 ${style.row}`}>
      <ul>
        <li>{t("scurf") + " No 1"}</li>
        {t("code") + "1170"}
        <li>{t("BlueOcean")}</li>
      </ul>
      <ColorPick color="#A2A2C5" />
      <div className="d-flex flex-row">
        <FontAwesomeIcon icon={faMinus} className={style.minus} />
        <span className={style.count}>2</span>
        <AddOutlinedIcon sx={{ fontSize: 30, margin: 0 }} />
      </div>
      <img src="/Assets/images/3.jpeg" />
      <div>
        <CloseOutlinedIcon sx={{ fontSize: 24 }} className={style.close} />
        <PrimaryButton
          light={true}
          btnText={t("addWatchList")}
          onClick={addwatch}
        />
      </div>
    </div>
  ) : (
    <MbList />
  );
};

export default List;
