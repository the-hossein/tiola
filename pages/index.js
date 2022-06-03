import Head from "next/head";
import { useSelector } from "react-redux";
import Footer from "../src/Components/footer/Footer";
import Header from "../src/Components/header/Header";
import Landing from "../src/Components/landing/Landing";
import ScreenLoader from "../src/tools/screenLoader/ScreenLoader";

export default function Home() {
  const state = useSelector((state) => state.stateRegister);

  return (
    <>
      <Head>
        <title>Tiola home</title>
        <link rel="icon" href="/logo.ico" />
        <meta
          name="google-site-verification"
          content="nR4pwY73DvKf7OURnL2xr3p1fZo2yXwTkhg_DDWRzPQ"
        />
      </Head>
      <header>
        <Header backColor={"headerBlur"} />
      </header>
      {state.userDataLoader ? (
        <ScreenLoader />
      ) : (
        <main>
          <Landing />
        </main>
      )}
      <footer>
        <Footer />
      </footer>
    </>
  );
}
