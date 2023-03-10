import React from "react";
import Head from "next/head";
import callApi from "../src/api/callApi";
import { BASE_URL, GET_SLIDER } from "../src/api/urls";

const uptimetest = ({ slider }) => {
  console.log(slider);
  return (
    <div>
      <Head>
        <title>test</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.ico" />
      </Head>

      <main>
        <img src={slider[0].data[0].filePath} alt="test" />
      </main>
    </div>
  );
};

export default uptimetest;
export async function getServerSideProps(context) {
  var myHeaders = {"Content-Type": "application/json"}

  const data = await callApi(BASE_URL + GET_SLIDER, "{}", myHeaders, "GET");

  return {
    props: { slider: data } // will be passed to the page component as props
  };
}
