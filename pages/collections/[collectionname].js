import Head from "next/head";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import callApi from "../../src/api/callApi";
import { BASE_URL, GET_WITH_COLLECTION } from "../../src/api/urls";
import CollectionDetails from "../../src/Components/collectionDetails/CollectionDetails";
import Footer from "../../src/Components/footer/Footer";
import Header from "../../src/Components/header/Header";
import { getcollectionproduct } from "../../src/redux/collectionDetail/collectionAction";
import Loader from "../../src/tools/loader/Loader";

export default function CollectionName({ collection }) {
  const state = useSelector((state) => state.stateColProduct);
console.log(collection)
  const dispatch = useDispatch();
  useEffect(() => {
    var sliced = [];
    for (var i = 0; i < collection[0].data.length; i += 5) {
      sliced.push(collection[0].data.slice(i, i + 5));
      dispatch(getcollectionproduct(sliced));
    }
  }, [collection[0]]);
  return (
    <div>
      <Head>
        <title>Tiola colection</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.ico" />
      </Head>
      <header>
        <Header backColor={"headerColor"} />
      </header>
      <main>{state.loading ? <Loader /> : <CollectionDetails data={collection[0].data}/>}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
export async function getServerSideProps(context) {
  const { params } = context;
  const { collectionname } = params;
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const data = await callApi(
    `${BASE_URL + GET_WITH_COLLECTION}?ColectionId=${collectionname}`,
    "{}",
    myHeaders,
    "GET"
  );

  return {
    props: { collection: data } // will be passed to the page component as props
  };
}
