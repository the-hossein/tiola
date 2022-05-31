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
  console.log(userid)
  var ls = localStorage.getItem("userToken");
  const userToken = JSON.parse(ls);
  var token = userToken.token;

  return (dispatch) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    const basket = async () => {
      const basketUser = await callApi(
        `${BASE_URL + GET_BASKET}?UserId=${userid}`,
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
