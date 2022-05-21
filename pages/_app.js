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
import { useEffect } from "react";

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

function MyApp({ Component, pageProps }) {const router=useRouter()

   useEffect(()=>{
    if (router.pathname === "/collection/[collectionName]") {
      document
        .getElementsByTagName("body")[0]
        .style.setProperty(
          "background",
          "linear-gradient(0deg, rgba(242,242,242,1) 28%, rgba(242,227,193,1) 66%, rgba(255,179,0,1) 100%)",
          "important"
        );
    } else {
      document
        .getElementsByTagName("body")[0]
        .style.setProperty("background", "#f2f2f2", "important");
    }
   },[pageProps])
  return (
    <Provider store={store}>
        <NextNProgress height={6} options={{ showSpinner: false }} color="#6a8eae" />

      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
