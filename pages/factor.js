import Head from "next/head";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import UserFactor from "../src/Components/factor/UserFactor";
import Footer from "../src/Components/footer/Footer";
import Header from "../src/Components/header/Header";
import { getBasketDetails } from "../src/redux/factor/factorAction";
import { getProfile } from "../src/redux/register/registerAction";
import Loader from "../src/tools/loader/Loader";
import ScreenLoader from "../src/tools/screenLoader/ScreenLoader";
import { useRouter } from "next/router";

export default function SigninUser() {
  if (typeof window !== "undefined") {
    var ls = localStorage.getItem("userToken");
  }
  const router = useRouter();
  const state = useSelector((state) => state.stateRegister);

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
          <UserFactor />
        </main>
      )}
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
