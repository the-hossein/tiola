import Head from "next/head";
import Footer from "../src/Components/footer/Footer";
import Header from "../src/Components/header/Header";
import ExploreMain from '../src/Components/Explore/ExploreMain'
export default function explore() {
  return (
    <div>
      <Head>
        <title>ExploreMain</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.ico" />
      </Head>
      <header>
        <Header backColor={"headerColor"} />
      </header>

      <main>
        <ExploreMain />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}