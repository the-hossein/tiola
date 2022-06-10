import "../styles/globals.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import { Provider } from "react-redux";
import { store } from "../src/redux/store";
import { useRouter } from "next/router";
import NextProgress from "next-progress";
import { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import PopUp from "../src/tools/popup/PopUp";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    fallbackLng: "fa",
    detection: {
      order: ["cookie", "htmlTag", "localStorage", "path", "subdomain"],
      caches: ["cookie"]
    },
    backend: {
      loadPath: "/locales/{{lng}}/transliation.json"
    },
    react: {
      useSuspense: false
    }
  });

function MyApp({ Component, pageProps }) {
  const [network, setNetwork] = useState();
  const router = useRouter();
  const [showChild, setshowChild] = useState(false);

  useEffect(() => {
    if (router.pathname === "/collections/[collectionname]") {
      if (pageProps.collection[0].data.length !== 0) {
        document
          .getElementsByTagName("body")[0]
          .style.setProperty(
            "background",
            `   linear-gradient(180deg, rgba(26,121,9,0.4489146000196954) 0%, rgba(26,121,9,0.3200630594034489) 30%, rgba(239,239,239,0) 100%);`,
            "important"
          );
      }
    } else {
      document
        .getElementsByTagName("body")[0]
        .style.setProperty("background", "#f2f2f2", "important");
    }
    setshowChild(true);
  }, [pageProps]);
  if (!showChild) {
    return null;
  }
  return (
    <Provider store={store}>
      <NextProgress
        height={6}
        options={{ showSpinner: false }}
        color="#6a8eae"
     
      />
      <Component {...pageProps} />
      <ToastContainer
        style={{ width: "35%", padding: "3px", top: "57px" }}
        bodyClassName="toastBox"
      />
      <PopUp />
    </Provider>
  );
}

export default MyApp;
