const initializedState = {
  loader: false,
  loginStatus: false,
  phoneNumber: "",
  code: "",
  codeStatus: false,
  otpStatus: false
};
const registerReducer = (state = initializedState, action) => {
  switch (action.type) {
    case "LOGIN_TRUE":
      return { ...state, loginStatus: true };
    case "LOGIN_FALSE":
      return {
        ...state,
        loginStatus: false
      };
    case "GETPHONE":
      return { ...state, phoneNumber: action.num };
    case "GETCODE":
      return {
        ...state,
        code: action.code
      };
    case "SEND_CODE_SUCCESS":
      return {
        ...state,
        codeStatus: true,
        loader: false
      };
    case "SEND_CODE_FAILED":
      return {
        ...state,
        codeStatus: false,
        code: "",
        loader: false
      };
    case "LOADER":
      return {
        ...state,
        loader: true
      };
    case "CHECK_OTP_SUCCESS":
      return {
        ...state,
        loginStatus: true,
        otpStatus: true,
        loader: false
      };
    case "CHECK_OTP_FAILED":
      return {
        ...state,
        otpStatus: false,
        loader: false
      };
    default:
      return state;
  }
};

export default registerReducer;
