import Head from "next/head";
import Footer from "../src/Components/footer/Footer";
import Header from "../src/Components/header/Header";
import UserProfile from "../src/Components/profile/UserProfile";
export default function profile() {
  return (
    <div>
      <Head>
        <title>Tiola profile</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.ico" />
      </Head>
      <header>
        <Header backColor={"headerColor"} />
      </header>

      <main>
        <UserProfile />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
