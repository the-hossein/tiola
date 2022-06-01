const initializedState = {
  userDataLoader: true,
  loader: false,
  loginStatus: false,
  phoneNumber: "",
  code: "",
  codeStatus: false,
  otpStatus: false,
  userid: "",
  basketid:"",
  userName: "",
  popup: false,
  userNameAvatar: "",
  userImage: null,
  closePopUp: false,
  address: "",
  gender: "",
  profilePicId: null,
  birthDayDateTime: "",
  name: "",
  family: ""
};
const registerReducer = (state = initializedState, action) => {
  switch (action.type) {
    case "LOGIN_TRUE":
      return { ...state, loginStatus: true };
    case "LOGIN_FALSE":
      return {
        ...state,
        loginStatus: false,
        userDataLoader:false
      };
    case "USER_DATA_LOADER":
      return {
        ...state,
        userDataLoader: true
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
    case "SET_NEW_DATA":
      return {
        ...state,
        userNameAvatar: `${action.payload.name} ${action.payload.family}`,
        profilePicId: action.payload.profiepicpath,
        gender: action.payload.gender
        // address: action.payload.address,
      };
    case "USER_DATA":
      return {
        ...state,
        loginStatus: true,
        userDataLoader: false,
        phoneNumber: action.user.phoneNumber,
        userid: action.user.id,
        userNameAvatar: `${action.user.name} ${action.user.family}`,
        address: "",
        gender: action.user.gender,
        profilePicId: action.user.profilePicId,
        birthDayDateTime: action.user.birthDayDateTime,
        name: action.user.name,
        family: action.user.family
      };
      case "BASKET_ID":return{
        ...state,basketid:action.data
      }
    case "CLOSE_POPUP":
      return {
        ...state,
        popup: false
      };
    case "OPEN_POPUP":
      return {
        ...state,
        popup: true
      };
    default:
      return state;
  }
};

export default registerReducer;
