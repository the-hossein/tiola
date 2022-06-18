import React from "react";
import Image from "next/image";
import style from "./OurTeam.module.css";
import teampic from "../../../public/Assets/images/11.jpg";
import { useTranslation } from "react-i18next";
import Team from "./Team";
import { useSelector } from "react-redux";
import pers1 from "../../../public/Assets/images/1.jpg";
import sina from "../../../public/Assets/images/sina.jpeg";
import milad from "../../../public/Assets/images/milad.jpeg";
import hosein from "../../../public/Assets/images/hosein.jpeg";
import ali from "../../../public/Assets/images/ali.jpeg";
import fatemeh from "../../../public/Assets/images/fatemeh.jpeg";
import erfan from "../../../public/Assets/images/erfan.jpeg";
import fazele from "../../../public/Assets/images/fazele.jpeg";
import mohadese from "../../../public/Assets/images/mohadese.jpeg";
import yasmin from "../../../public/Assets/images/hosein.jpeg";
import sara from "../../../public/Assets/images/hosein.jpeg";
import ardalan from "../../../public/Assets/images/hosein.jpeg";
import yasi from "../../../public/Assets/images/hosein.jpeg";
import ramin from "../../../public/Assets/images/hosein.jpeg";
import parmida from "../../../public/Assets/images/hosein.jpeg";

const OurTeam = () => {
  const { t } = useTranslation();
  const lang = useSelector((state) => state.stateLang.lng);
  const teamManager = [
    { img: sina, name: t("sepehri"), des: t("sepehriDes") },
    { img: milad, name: t("milad"), des: t("miladDes") }
  ];
  const teamIT = [
    { img: hosein, name: t("hosein"), des: t("hoseinDes") },
    { img: ali, name: t("ali"), des: t("aliDes") },
    { img: fatemeh, name: t("fatemeh"), des: t("fatemehDes") },
    { img: erfan, name: t("erfan"), des: t("erfanDes") }
  ];
  const teamUI = [
    { img: ardalan, name: t("ardalan"), des: t("ardalanDes") },
    { img: yasi, name: t("yasi"), des: t("yasiDes") },
    { img: parmida, name: t("parmida"), des: t("yasiDes") },
    { img: ramin, name: t("ramin"), des: t("raminDes") }
  ];
  const teamWR = [
    { img: fazele, name: t("fazele"), des: t("fazeleDes") },
    { img: mohadese, name: t("mohadese"), des: t("mohadeseDes") }
  ];
  const teamDesign = [
    { img: yasmin, name: t("yasamin"), des: t("yasaminDes") },
    { img: sara, name: t("sara"), des: t("saraDes") }
  ];
  return (
    <div>
      <div className="row m-0">
        <div className={`col-lg-6  p-0 col-md-6 col-12 ${style.stickyStyle}`}>
          <div className={style.teamImg}>
            <Image src={teampic} alt="teamPic" />
          </div>
        </div>
        <div
          className={`col-lg-6  col-md-6 col-12 ${style.contentTeam} ${
            lang == "fa" && style.lineHeight
          }`}
        >
          <h1 className={style.mainTitle}>{t("ourteam")}</h1>
          <p>{t("ourTeamContent")}</p>
          <div className={style.karmaTeam}>
            <Team
              text={t("managerContent")}
              title={t("teamManager")}
              personals={teamManager}
            />
            <Team
              text={t("itContent")}
              title={t("teamIt")}
              personals={teamIT}
            />
            <Team
              text={t("DesignUnitContent")}
              title={t("teamDesignUnit")}
              personals={teamDesign}
            />
            <Team
              text={t("uiContent")}
              title={t("teamUi")}
              personals={teamUI}
            />
            <Team
              text={t("ContentProduction")}
              title={t("teamContentProduction")}
              personals={teamWR}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
