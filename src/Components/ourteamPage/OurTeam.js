import React from "react";
import Image from "next/image";
import style from "./OurTeam.module.css";
import teampic from "../../../public/Assets/images/sahar.jpg";
import { useTranslation } from "react-i18next";
import Team from "./Team";
import { useSelector } from "react-redux";
import pers1 from "../../../public/Assets/images/1.jpg";
import sina from "../../../public/Assets/images/Sina.jpg";
import milad from "../../../public/Assets/images/Milad.jpg";
import hosein from "../../../public/Assets/images/Hossein.jpg";
import ali from "../../../public/Assets/images/Ali.jpg";
import fatemeh from "../../../public/Assets/images/Fatemeh.jpg";
import erfan from "../../../public/Assets/images/Erfan.jpg";
import fazele from "../../../public/Assets/images/Fazeleh.jpg";
import mohadese from "../../../public/Assets/images/Mohadese.jpg";
import yasmin from "../../../public/Assets/images/Yasii.jpg";
import sara from "../../../public/Assets/images/Sara.jpg";
import ardalan from "../../../public/Assets/images/Ardalan.jpg";
import yasi from "../../../public/Assets/images/Yasi.jpg";
import ramin from "../../../public/Assets/images/Ramin.jpg";
import parmida from "../../../public/Assets/images/Parmida.jpg";
import hana from "../../../public/Assets/images/Parmida.jpg";
import owenMehdi from "../../../public/Assets/images/tiolaOwen.png";

const OurTeam = () => {
  const { t } = useTranslation();
  const lang = useSelector((state) => state.stateLang.lng);

  const owenTiola = [{img: owenMehdi, name: t("mehdiOwen"), des: t("mehdiOwenDes")}]

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
    { img: sara, name: t("sara"), des: t("saraDes") },
    // { img: hana, name: t("hana"), des: t("hanaDes") }
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
              text={t("introOwen")}
              title={t("owenTiola")}
              personals={owenTiola}
            />
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
