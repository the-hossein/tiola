import Head from "next/head";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import callApi from "../src/api/callApi";
import { BASE_URL, GET_LAST_EXPLORE_IMAgE, GET_SLIDER } from "../src/api/urls";
import ComingSoon from "../src/Components/comingSoon/ComingSoon";
import Footer from "../src/Components/footer/Footer";
import Header from "../src/Components/header/Header";
import Landing from "../src/Components/landing/Landing";
import Vitrine from "../src/Components/vitrineTiolaAndManto/Vitrine";
import ScreenLoader from "../src/tools/screenLoader/ScreenLoader";

export default function Home({ slider, explor }) {
  const state = useSelector((state) => state.stateRegister);

  const { t } = useTranslation();

  const fetcehr = async () => {
    var myHeaders = {"Content-Type": "application/json"}

    const data = await callApi(BASE_URL + GET_SLIDER, "{}", myHeaders, "GET");
    // const exploreImage = await callApi(
    //   BASE_URL + GET_LAST_EXPLORE_IMAgE,
    //   "{}",
    //   myHeaders,
    //   "GET"
    // );

    console.log(data);
  };

  useEffect(() => {
    fetcehr();
  }, []);

  return (
    <>
      <Head>
        <title>{t("tiolaHome")}</title>
        <link rel="icon" href="/logo.ico" />
        <meta
          name="google-site-verification"
          content="nR4pwY73DvKf7OURnL2xr3p1fZo2yXwTkhg_DDWRzPQ"
        />
        <meta name="enamad" content="167125" />
      </Head>
      <header>
        <Header backColor={"headerBlur"} />
      </header>
      {state.userDataLoader ? (
        <ScreenLoader />
      ) : (
        <main>
          <h2>jdfihid</h2>
          <Landing
            product={slider[0].data}
            explore={explor[0].data[Math.round(Math.random() * 4)]}
          />
        </main>
      )}
      <footer>
        <Footer />
      </footer>
    </>
  );
}
export async function getServerSideProps() {
  var myHeaders = {"Content-Type": "Application/json"};
  // myHeaders.append();

  console.log(myHeaders)

  const data = await callApi(BASE_URL + GET_SLIDER, "{}", myHeaders, "GET");
    const exploreImage = await callApi(
      BASE_URL + GET_LAST_EXPLORE_IMAgE,
      "{}",
      myHeaders,
      "GET"
    );


  const props = {
    props: {
      slider: data,
      explor: exploreImage,
    },
  };
  return props ;
}
