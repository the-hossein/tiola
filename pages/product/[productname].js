import Head from "next/head";
import Productpage from "../../src/Components/productPage/Productpage";
import Footer from "../../src/Components/footer/Footer";
import Header from "../../src/Components/header/Header";
import callApi from "../../src/api/callApi";
import { useEffect } from "react";
import { BASE_URL, GET_PRODUCT, GET_WITHLABLE } from "../../src/api/urls";
export default function productname({ product, similar }) {
  console.log(product[0]);
  return (
    <div>
      <Head>
        <title>product</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.ico" />
      </Head>
      <header>
        <Header backColor={"headerColor"} />
      </header>
      <main>
        <Productpage product={product[0]} similar={similar[0]} />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const { productname } = params;
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const data = await callApi(
    `${BASE_URL + GET_PRODUCT}?id=${productname}`,
    "{}",
    myHeaders,
    "GET"
  );
  const similar = await callApi(
    `${BASE_URL + GET_WITHLABLE}?Type=scarf`,
    "{}",
    myHeaders,
    "GET"
  );

  return {
    props: { product: data, similar: similar } // will be passed to the page component as props
  };
}
