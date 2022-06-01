import Head from "next/head";
import Footer from "../src/Components/footer/Footer";
import Header from "../src/Components/header/Header";
import Landing from "../src/Components/landing/Landing";


export default function Home() {
  

  return (
    <>
      <Head>
        <title>Tiola home</title>
        <link rel="icon" href="/logo.ico" />
        <meta name="google-site-verification" content="nR4pwY73DvKf7OURnL2xr3p1fZo2yXwTkhg_DDWRzPQ" />
      </Head>
      <header>
        <Header backColor={"headerBlur"} />
      </header>
      <main>  
           
           
           <Landing/>
          
   
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}