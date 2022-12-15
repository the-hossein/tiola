import callApi from "../../api/callApi";
import { BASE_URL } from "../../api/urls";

const fetchProductSuccesful = (data) => {
  return {
    type: "FETCH_DATA_SUCCSESFUL",
    data: data
  };
};

const test =async () => {
    const data = await callApi(
      `${BASE_URL}api/Prodcut/GetProduct?id=9`,
      "GET",
      "{}"
    );
  return (dispatch) => {
      
    dispatch(fetchProductSuccesful(data));
  };
};

export { fetchProductSuccesful ,test};
