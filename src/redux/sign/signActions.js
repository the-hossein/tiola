const getphone = (num) => {
  return {
    type: "GETPHONE",
    num: num
  };
};
const getCode = (code) => {
  return {
    type: "GETCODE",
    code: code
  };
};
export { getphone, getCode };
