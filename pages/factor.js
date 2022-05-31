import Head from "next/head";
import UserFactor from "../src/Components/factor/UserFactor";
import Footer from "../src/Components/footer/Footer";
import Header from "../src/Components/header/Header";
export default function SigninUser() {
  return (
    <div>
      <Head>
        <title>Tiola factor</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.ico" />
      </Head>
      <header>
        <Header backColor={"headerColor"} />
      </header>

      <main>
        <UserFactor />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
