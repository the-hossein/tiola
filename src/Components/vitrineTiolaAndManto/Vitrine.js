import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./Vitrine.module.css";

//icons
import scarfIcon from "../../../public/Assets/images/vitrine/Vector_scarf.png";
import mantoIcon from "../../../public/Assets/images/vitrine/Vector_manto.png";

const Vitrine = ({ show }) => {
  return (
    <section className={styles.container}>
      <div className={styles.child}>
        <div className={`${styles.manto}`} onClick={() => show(2)}>
          <div className={styles.vector}>
            <Image src={mantoIcon} alt="MantoShop" />
            <p>مزون</p>
          </div>
        </div>
      </div>
      <div className={`${styles.child}`}>
        <video autoPlay playsInline muted preload="true" loop>
          <source
            src="Assets/images/vitrine/intro.mp4"
            type="video/mp4"
            Accept-Ranges="bytes"
          />
          {/* <source src="movie.ogg" type="video/ogg"> */}
        </video>
      </div>
      <div className={styles.child}>
        <div
          className={`${styles.child} ${styles.tiola}`}
          onClick={() => show(1)}
        >
          <div className={styles.vector}>
            <Image src={scarfIcon} alt="MantoShop" />
            <p>شال و روسری</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vitrine;
