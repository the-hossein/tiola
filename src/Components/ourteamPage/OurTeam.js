import React from "react";
import Image from "next/image";
import style from "./OurTeam.module.css";

import { useTranslation } from "react-i18next";
import Team from "./Team";
import { useSelector } from "react-redux";

/* import sina from "/Assets/images/Sina.jpg";
import milad from "/Assets/images/Milad.jpg"; */
/* import hosein from "/Assets/images/Hossein.jpg";
import ali from "/Assets/images/Ali.jpg";
import fatemeh from "/Assets/images/Fatemeh.jpg";
import erfan from "/Assets/images/Erfan.jpg"; */
/* import fazele from "/Assets/images/Fazeleh.jpg";
import mohadese from "/Assets/images/Mohadese.jpg";
import yasmin from "/Assets/images/Yasii.jpg";
import sara from "/Assets/images/Sara.jpg";
import ardalan from "/Assets/images/Ardalan.jpg";
import yasi from "/Assets/images/Yasi.jpg";
import ramin from "/Assets/images/Ramin.jpg";
import parmida from "/Assets/images/Parmida.jpg"; */

/* import owenMehdi from "/Assets/images/tiolaOwen.png"; */

const OurTeam = () => {
  const { t } = useTranslation();
  const lang = useSelector((state) => state.stateLang.lng);

  const owenTiola = [{img: "/Assets/images/tiolaOwen.png", name: t("mehdiOwen"), des: t("mehdiOwenDes")}]

  const teamManager = [
    { img:  "/Assets/images/Sina.jpg", name: t("sepehri"), des: t("sepehriDes") },
    { img: "/Assets/images/Milad.jpg", name: t("milad"), des: t("miladDes") }
  ];
  const teamIT = [
    { img: "/Assets/images/Hossein.jpg", name: t("hosein"), des: t("hoseinDes") },
    { img: "/Assets/images/Ali.jpg", name: t("ali"), des: t("aliDes") },
    { img: "/Assets/images/Fatemeh.jpg", name: t("fatemeh"), des: t("fatemehDes") },
    { img: "/Assets/images/Erfan.jpg", name: t("erfan"), des: t("erfanDes") }
  ];
  const teamUI = [
    { img: "/Assets/images/Ardalan.jpg", name: t("ardalan"), des: t("ardalanDes") },
    { img: "/Assets/images/Yasi.jpg", name: t("yasi"), des: t("yasiDes") },
    { img: "/Assets/images/Parmida.jpg", name: t("parmida"), des: t("yasiDes") },
    { img: "/Assets/images/Ramin.jpg", name: t("ramin"), des: t("raminDes") }
  ];
  const teamWR = [
    { img: "/Assets/images/Fazeleh.jpg", name: t("fazele"), des: t("fazeleDes") },
    { img: "/Assets/images/Mohadese.jpg", name: t("mohadese"), des: t("mohadeseDes") }
  ];
  const teamDesign = [
    { img: "/Assets/images/Yasii.jpg", name: t("yasamin"), des: t("yasaminDes") },
    { img: "/Assets/images/Sara.jpg", name: t("sara"), des: t("saraDes") },
    // { img: hana, name: t("hana"), des: t("hanaDes") }
  ];
  return (
    <div>
      <div className="row m-0">
        <div className={`col-lg-6  p-0 col-md-6 col-12 ${style.stickyStyle}`}>
          <div className={style.teamImg}>
            <Image src={"/Assets/images/sahar.jpg"} alt="teamPic" layout="fill" />
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
