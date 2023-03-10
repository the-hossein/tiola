import Head from "next/head";
import { useTranslation } from "react-i18next";
import callApi from "../src/api/callApi";
import { BASE_URL, ALL_COLLECTION } from "../src/api/urls";
import Footer from "../src/Components/footer/Footer";
import Header from "../src/Components/header/Header";
import TiolaCollections from "../src/Components/pageCollentions/MyCollection/TiolaCollections";

export default function Collections({ allCollection }) {
  const { t } = useTranslation();
  return (
    <div>
      <Head>
        <title>{t("tiolaCollection")}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.ico" />
      </Head>
      <header>
        <Header backColor={"headerColor"} />
      </header>
      <main>
        <TiolaCollections data={allCollection[0].data} />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
export async function getServerSideProps(context) {
  const { params } = context;
  var myHeaders = {"Content-Type": "application/json"}

  const data = await callApi(BASE_URL + ALL_COLLECTION, "{}", myHeaders, "GET");

  return {
    props: { allCollection: data } // will be passed to the page component as props
  };
}
