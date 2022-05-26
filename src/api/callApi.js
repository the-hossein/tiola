import axios from "axios";
const callApi = async (url, method, body) => {
  axios.defaults.baseURL = "https://api.asanbtc.com";
  axios.defaults.headers = {
    Accept: "application/json",
    "Content-Type": "application/json;charset=UTF-8"
  };
  var options;
  if (body !== "{}") {
    options = {
      url: url,
      method: method,
      data: body
    };
  } else {
    options = {
      url: url,
      method: method
    };
  }
  const response = await axios(options);
  return response.data;
};

export default callApi;
