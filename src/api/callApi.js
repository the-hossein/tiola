import axios from "axios";

const callApi = async (BaseUrl, Body, Header, Method) => {
  var requestOptions;
  if (Body === "{}") {
    requestOptions = {
      url: BaseUrl,
      method: Method,
      headers: Header,
    };
  } else {
    requestOptions = {
      method: Method,
      headers: Header,
      body: Body,
    };
  }
  try {
    const response = await axios(requestOptions);
    const data = await response.data;
    const status = await response.status;
    return [data, status];
  } catch (err) {
    console.log(err)
    const data = [];
    const status = 400;
    return [data, status];
  }
};
export default callApi;
