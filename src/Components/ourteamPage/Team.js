import React from "react";
import style from "./OurTeam.module.css";
import Personal from "./Personal";
import { useTranslation } from "react-i18next";

const Team = ({ text, title, personals }) => {
  const { t } = useTranslation();
  console.log(personals);
  return (
    <>
      <div className="mt-4 mb-4">
        <h2 className={style.titleTeam}>{title}</h2>
        <p className={style.teamDec}>{text}</p>
        <div className={style.teams}>
          {personals.map((item) => (
            <>
              <Personal img={item.img} name={item.name} des={item.des} />
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Team;
