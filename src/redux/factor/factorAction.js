import callApi from "../../api/callApi";
import {
  ADD_PAYMENT,
  BASE_URL,
  DELETE_BASKET,
  GET_BASKET,
  GET_BASKET_DETAILS,
  GET_USER_ADDRESS
} from "../../api/urls";
import { notify } from "../../tools/toast/toast";



const loadingAddresFalse = () => {
  return {
    type: "lOADING_ADDRESS_FALSE"
  };
};
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

const addQtyAmont = () => {
  return {
    type: "ADD_QTY_AMOUNT"
  };
};

const addbasketDetails = (data) => {
  return {
    type: "BASKET_DETAILS",
    data: data
  };
};
const deleted = (item) => {
  return {
    type: "DELETE_BASKET",
    product: item
  };
};
const IncressBasketDetail = (id) => {
  return {
    type: "Incress_Details",
    payload: id
  };
};
const DecreaseBasketDetail = (id) => {
  return {
    type: "Decress_Details",
    payload: id
  };
};
const loaderFactorTrue = () => {
  return {
    type: "LOADER_FACTOR"
  };
};
const setAlladdress = (data) => {
  return {
    type: "SET_ALL_ADDRESS",
    payload: data
  };
};
const loadingAddress = () => {
  return {
    type: "lOADING_ADDRESS"
  };
};
const loadingProductList = () => {
  return {
    type: "lOADING_LIST"
  };
};
const falseLoadingProductlist = () => {
  return {
    type: "lOADING_LIST_FALSE"
  };
};
const getBasketDetails = (basketid) => {
  return (dispatch) => {
    const newls = localStorage.getItem("userToken");
    if (newls !== null) {
      const userToken = JSON.parse(newls);
      const token = userToken.token;
      var myHeaders = new Headers();
      myHeaders.append("Authorization", `Bearer ${token}`);
      dispatch(loaderFactorTrue());

      const basketDetails = async () => {
        const details = await callApi(
          `${BASE_URL + GET_BASKET_DETAILS}?id=${basketid}`,
          "{}",
          myHeaders,
          "GET"
        );
        if (details[0].code === 200) {
          console.log(details[0].data);
          dispatch(addbasketDetails(details[0].data));
        }
      };
      basketDetails();
    }
  };
};

const deleteBasketUser = (alldata, data) => {
  return (dispatch) => {
    var ls = localStorage.getItem("userToken");
    dispatch(loadingProductList());
    const userToken = JSON.parse(ls);
    const token = userToken.token;
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    const deletProduct = async () => {
      const status = await callApi(
        `${BASE_URL + DELETE_BASKET}?BasketDetailId=${data.id}`,
        "{}",
        myHeaders,
        "POST"
      );
      if (status[0].code === 200) {
        const deletePro = alldata.filter((item) => item.id !== data.id);
        dispatch(deleted(deletePro));
      }
    };
    deletProduct();
  };
};
const getuserAddress = (userid) => {
  return (dispatch) => {
    var ls = localStorage.getItem("userToken");
  if(ls !== null ){
    const userToken = JSON.parse(ls);
    const token = userToken.token;
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
      // dispatch(loaderFactorTrue());
      dispatch(loadingAddress());
      const allAddress = async () => {
        const address = await callApi(
          `${BASE_URL + GET_USER_ADDRESS}?UserId=${userid}`,
          "{}",
          myHeaders,
          "POST"
        );
        if (address[0].code === 200) {
          dispatch(setAlladdress(address[0].data));
        }
      };
      allAddress();
  }
  };
};
// const getBasketUser = (token, userid) => {
//   return (dispatch) => {
//     var myHeaders = new Headers();
//     myHeaders.append("Authorization", `Bearer ${token}`);
//     const basket = async () => {
//       const basketUser = await callApi(
//         `${BASE_URL + GET_BASKET}?UserId=${userid}`,
//         "{}",
//         myHeaders,
//         "GET"
//       );

//       if (basketUser[0].code === 200) {
//         console.log(basketUser[0].data.id);
//         dispatch(basketid(basketUser[0].data));
//       }
//     };
//     basket();
//   };
// };

export {
  getAddres,
  checkAddress,
  addQtyAmont,
  getBasketDetails,
  deleteBasketUser,
  getuserAddress,
  loadingAddress,
  loadingProductList,
  falseLoadingProductlist,
  IncressBasketDetail,
  DecreaseBasketDetail,
  loadingAddresFalse
};
