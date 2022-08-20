import Head from "next/head";
import { useTranslation } from "react-i18next";
import Vitrine from "../src/Components/vitrineTiolaAndManto/Vitrine";


export default function VitrinePage() {
  const { t } = useTranslation();
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
        <main>
        <Vitrine />
        </main>
    </>
  );
}

