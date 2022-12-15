import {
  faClipboardCheck,
  faCreditCard,
  faDiamond,
  faHouseCircleCheck,
  faTruckFast,
  faBuildingUser
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { t } from "i18next";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import style from "./UserProfile.module.css";

const Stepper = ({ active }) => {
  // const userId = useSelector(state => state.stateRegister.userid);
  // const dispatch = useDispatch();
  const { t } = useTranslation();
  useEffect(() => {
    for (let i = active; i > 0; i--) {
      const actived = document.getElementById(`${i}`);
      actived.classList.add(style.active);
      actived.previousElementSibling.classList.add(style.active);
    }
  }, []);
  return (
    <div className={style.stepper}>
      <div className={style.step}>
        <span className={style.active}>
          <FontAwesomeIcon icon={faCreditCard} className={style.icon} />
        </span>
        <span className={`${style.shape} ${style.active}`} id={1}>
          <FontAwesomeIcon icon={faDiamond} />
        </span>
        <span>{t("pay")}</span>
      </div>
      <div className={style.step}>
        <span>
          <FontAwesomeIcon icon={faClipboardCheck} className={`${style.icon } ${style.categoty}`} />
        </span>

        <span className={style.shape} id={2}>
          <FontAwesomeIcon icon={faDiamond} />
        </span>
        <span>{t("checking")}</span>
      </div>
      <div className={style.step}>
        <span>
          <FontAwesomeIcon icon={faBuildingUser} className={style.icon} />
        </span>
        <span className={style.shape} id={3}>
          <FontAwesomeIcon icon={faDiamond} />
        </span>
        <span>{t("Sorting")}</span>
      </div>
      <div className={style.step}>
        <span>
          <FontAwesomeIcon icon={faTruckFast} className={style.icon} />
        </span>
        <span className={style.shape} id={4}>
          <FontAwesomeIcon icon={faDiamond} />
        </span>
        <span>{t("post")}</span>
      </div>
    </div>
  );
};

export default Stepper;
