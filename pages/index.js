import Head from "next/head";
import Collection from "../src/Components/collection/Collection";
import Footer from "../src/Components/footer/Footer";
import Header from "../src/Components/header/Header";
import HeroSection from "../src/Components/heroSection/HeroSection";
import ProductSlider from "../src/Components/productSlider/ProductSlider";

export default function Home() {
  
    const product = [
    {
      src: "/Assets/images/1.jpg"
    },
    {
      src: "/Assets/images/2.jpg"
    },
    {
      src: "/Assets/images/3.jpg"
    }
 
  ];
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
           
           
           
          
        <HeroSection />
        <ProductSlider slidesShow={3} radius={0} images={product} arrowStatus={true} margin={0} mbItem={1} tbItem={2}  heightImage={'250px'}/>
        <Collection />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}