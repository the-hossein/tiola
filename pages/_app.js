import "../styles/globals.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import { Provider } from "react-redux";
import { store } from "../src/redux/store";
import { useRouter } from "next/router";
import NextNProgress from "nextjs-progressbar";
import { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import PopUp from "../src/tools/popup/PopUp";
import ScreenLoader from "../src/tools/screenLoader/ScreenLoader";
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
if(typeof window !=="undefined"){
  console.log(navigator.online)

}
  const router = useRouter();
  const [showChild, setshowChild] = useState(false);
  useEffect(() => {
    if (router.pathname === "/collections/[collectionname]") {
      document
        .getElementsByTagName("body")[0]
        .style.setProperty(
          "background",
          "linear-gradient(0deg, rgba(242,242,242,1) 28%, rgba(242,227,193,1) 66%, rgba(255,179,0,1) 100%)",
          "important"
        );
      console.log(pageProps.collection.data);
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
      <NextNProgress
        height={6}
        options={{ showSpinner: false }}
        color="#6a8eae"
      />

      <Component {...pageProps} />
      <ToastContainer style={{width: "30%", top: "60px"}} />
      <PopUp />
    </Provider>
  );
}

export default MyApp;
