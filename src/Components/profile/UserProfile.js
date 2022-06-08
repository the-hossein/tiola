import React, { useEffect } from "react";
import ProFileSection from "./ProFileSection";
import Stepper from "./Stepper";
import UserAction from "./UserAction";
import style from "./UserProfile.module.css";

//for exist open basket
import { fetchRequestApi } from "../../redux/checkexist/checkExistActin";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../tools/loader/Loader";
import { useTranslation } from "react-i18next";
import Placement from "../../tools/placement/Placement";

const UserProfile = () => {
  // const register = useSelector(state=> state.stateRegister);
  const userid = useSelector((state) => state.stateRegister.userid);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const existOpen = useSelector((state) => state.stateCheckExist);
  useEffect(() => {
    if (userid) {
      dispatch(fetchRequestApi(userid));
    }
  }, [userid]);
  return (
    <section>
      <div className="container mt-5 mb-5">
        <ProFileSection />
        {existOpen.preLoad ? (
          <div className={style.messageExist}>
            <Loader />
          </div>
        ) : existOpen.data.length === 0 ? (
          <Placement text={t("dontorder")} />
        ) : (
          existOpen.data.map((item) => (
            <>
              <Stepper
                active={item.state === 0 ? 2 : item.state === 4 ? 3 : 4}
              />
            </>
          ))
        )}
        <UserAction />
      </div>
    </section>
  );
};

export default UserProfile;
