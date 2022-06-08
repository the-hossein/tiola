import { useEffect, useState } from "react";
import Head from "next/head";
import { useTranslation } from "react-i18next";
import Footer from "../src/Components/footer/Footer";
import Header from "../src/Components/header/Header";
import UserProfile from "../src/Components/profile/UserProfile";
import ScreenLoader from "../src/tools/screenLoader/ScreenLoader";
import Placement from "../src/tools/placement/Placement";

export default function Offline() {

 const {t}=useTranslation()


  return (
    <div>
      <Head>
        <title>{t("offline")}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.ico" />
      </Head>
      <header className="d-none">
        <Header/>
      </header>
  
        <main>
         <Placement text={t("offlineText")}/>
        </main>
  
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
