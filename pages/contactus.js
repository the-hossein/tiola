import Head from "next/head";
import Footer from "../src/Components/footer/Footer";
import Header from "../src/Components/header/Header";
import ContactUs from "../src/Components/ContactUs/ContactUs";
import { useTranslation } from "react-i18next";
export default function Explore() {
  const { t } = useTranslation();
  return (
    <div>
      <Head>
        <title>{t("ContactUs")}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.ico" />
      </Head>
      <header>
        <Header backColor={"headerColor"} />
      </header>

      <main>
        <ContactUs />
      </main>

   
    </div>
  );
}
