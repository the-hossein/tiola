import Head from "next/head";
import Category from "../../src/Components/category/Category";
import Footer from "../../src/Components/footer/Footer";
import Header from "../../src/Components/header/Header";
export default function categoryname() {
  return (
    <div>
      <Head>
        <title>category</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.ico" />
      </Head>
      <header>
        <Header backColor={"headerColor"} />
      </header>

      <main><Category/></main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
