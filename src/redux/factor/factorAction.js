import callApi from "../../api/callApi";
import { BASE_URL, GET_BASKET } from "../../api/urls";

const getAddres = (addres) => {
  return {
    type: "GET_ADDRES",
    addres: addres
  };
};
const checkAddress = (addres) => {
  return {
    type: "CHECKED_ADDRES",
    check: addres
  };
};
const basketid = (data) => {
  return {
    type: "BASKET_ID",
    data: data
  };
};
const getBasketUser = (userid) => {
  var ls = localStorage.getItem("userToken");
  const userToken = JSON.parse(ls);
  var token = userToken.token;

  return (dispatch) => {
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIwOTIyMzkxMTQ4NSIsImp0aSI6IjE2ZmVmN2FmLWU3YTktNDdkMy1hNjYyLWM0OTY3M2E0ZTBjNSIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWVpZGVudGlmaWVyIjoiMDkyMjM5MTE0ODUiLCJleHAiOjE2NTQzMTk3NDQsImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6NTgxNzkiLCJhdWQiOiJodHRwOi8vbG9jYWxob3N0OjU4MTc5In0.Qla1Eaz7NJmL_Vc7YuoK7ph7pCfMdxdN7y56VgaVX7M"
    );
    const basket = async () => {
      const basketUser = await callApi(
        `${BASE_URL + GET_BASKET}?UserId=574e267f-c022-49d3-55a5-08da4099dd54`,
        "{}",
        myHeaders,
        "GET"
      );
      dispatch(basketid(basketUser[0].data));
    };
    basket();
  };
};
export { getAddres, checkAddress, getBasketUser, basketid };
