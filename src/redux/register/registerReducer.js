const initializedState = {
  loader: false,
  loginStatus: false,
  phoneNumber: "",
  code: "",
  codeStatus: false
};
const registerReducer = (state = initializedState, action) => {
  switch (action.type) {
    case "LOGIN_TRUE":
      return { ...state, loginStatus: true };
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
        loader: false
      };
    case "LOADER":
      return {
        ...state,
        loader: true
      };
    default:
      return state;
  }
};

export default registerReducer;
