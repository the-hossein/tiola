import Head from "next/head";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import Header from "../src/Components/header/Header";
import Register from "../src/Components/register/Register";
import EditProfile from "../src/tools/editProfile/EditProfile";
import Loader from "../src/tools/loader/Loader";
export default function SigninUser() {
  const { t } = useTranslation();
  const state = useSelector((state) => state.stateRegister);

  return (
    <div>
      <Head>
        <title>Tiola signin</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.ico" />
      </Head>
      <header>
        <Header backColor={"headerColor"} />
      </header>
  {state.userDataLoader ? (
        <Loader/>
      ) : (
      <main>
        <EditProfile />
      </main>)}
    </div>
  );
}
