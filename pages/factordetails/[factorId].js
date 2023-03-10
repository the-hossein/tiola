import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";
import UserFactor from "../../src/Components/factor/UserFactor";
import Footer from "../../src/Components/footer/Footer";
import Header from "../../src/Components/header/Header";
import ScreenLoader from "../../src/tools/screenLoader/ScreenLoader";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import FactorDetail from "../../src/Components/factorDetail/FactorDetail";
import { GET_BASKET_DETAILS } from "../../src/api/urls";

const FactordetailPage = ({ detail }) => {
  console.log(detail);
  if (typeof window !== "undefined") {
    var ls = localStorage.getItem("userToken");
  }
  const router = useRouter();
  const state = useSelector((state) => state.stateRegister);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  useEffect(() => {
    if (ls === null) {
      router.push({
        pathname: "/signin"
      });
    }
  }, []);
  return (
    <div>
      <Head>
        <title>{t("factor")}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.ico" />
      </Head>

      <header>
        <Header backColor={"headerColor"} />
      </header>
      {state.userDataLoader ? (
        <ScreenLoader />
      ) : (
        <main>
          <FactorDetail />
        </main>
      )}
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default FactordetailPage;

