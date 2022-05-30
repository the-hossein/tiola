 const callApi= async (BaseUrl, Body, Header, Method) => {
  var requestOptions;
  if (Body === "{}") {
    requestOptions = {
      method: Method,
      headers: Header,
      redirect: "follow"
    };
  } else {
    requestOptions = {
      method: Method,
      headers: Header,
      body: Body,
      redirect: "follow"
    };
  }
  const response = await fetch(BaseUrl, requestOptions);
  const data = await response.json();
  return data;
};
export default callApi
