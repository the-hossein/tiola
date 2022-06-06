import { useState, useEffect } from "react";
import Head from "next/head";
import StatusPayment from "../src/Components/statusPayment/StatusPayment";
import Loader from "../src/tools/loader/Loader";
import { BASE_URL, VERIFY_PAYMENT } from "../src/api/urls";
import callApi from "../src/api/callApi";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";

if (typeof window !== "undefined") {
  var ls = localStorage.getItem("userToken");
}
const PaymentStatus = () => {
  const { t } = useTranslation();

  const [status, setStatus] = useState();
  const [Classid, setClassid] = useState(0);
  const [preLoad, setPreLoad] = useState(true);
  const [statusCode, setStatusCode] = useState();
  useEffect(() => {
    if (ls) {
      var token = JSON.parse(ls).token;
      var userId = JSON.parse(ls).userid;
      const search = window.location.search;
      const params = new URLSearchParams(search);
      var OrderId = params.get("orderid");
      var myHeaders = new Headers();
      myHeaders.append("Authorization", `Bearer ${token}`);
      myHeaders.append("Content-Type", "application/json");
    
      console.log(params.get("orderid"));

      const VerifyPayment = async () => {
        try {
          const verify = await callApi(
            `${BASE_URL + VERIFY_PAYMENT}?Payid=${OrderId}&UserId=${userId}`,
            "{}",
            myHeaders,
            "POST"
          );
          console.log("first");
          console.log(verify);
          if (verify[0].code === 200) {
            if (
              verify[0].data.code === 206 &&
              verify[0].data.classId === null
            ) {
                setStatusCode(verify[0].code);

              setStatus("success");
              setPreLoad(false);
            }
            // console.log(verify);
          } else {
            setStatusCode(verify[0].code);
            setStatus("unSuccess");
            setPreLoad(false);
            // console.log(verify[1])
          }
        } catch {
          setStatusCode("catch");
        }
      };
      VerifyPayment();
    } else {
      setStatus("unSuccess");
      setStatusCode("catch");
    }
  }, []);
  return (
    <div>
      <Head>
        <title>{t("paymentStatus")}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.ico" />
      </Head>
      <main>
        {preLoad ? (
          <>
            <p style={{ marginTop: "2rem", textAlign: "center" }}>
              لطفا چند لحظه منتظر بمانید
            </p>
            <Loader />
          </>
        ) : (
          <StatusPayment type={status} statusCode={statusCode} />
        )}
      </main>
    </div>
  );
};
export default PaymentStatus;
