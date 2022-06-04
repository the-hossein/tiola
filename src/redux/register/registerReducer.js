const initializedState = {
  userDataLoader: true,
  loader: false,
  loginStatus: false,
  phoneNumber: "",
  code: "",
  codeStatus: false,
  otpStatus: false,
  userid: "",
  basketid: "",
  basketloader: true,
  userName: "",
  popup: false,
  userNameAvatar: "",
  userImage: null,
  closePopUp: false,
  address: "",
  gender: "",
  profilePicId: null,
  birthDayDateTime: null,
  name: "",
  family: "",
  profileUser: {}
};
const registerReducer = (state = initializedState, action) => {
  switch (action.type) {
    case "LOGIN_TRUE":
      return { ...state, loginStatus: true };
    case "LOGIN_FALSE":
      return {
        ...state,
        loginStatus: false,
        userDataLoader: false
      };
    case "USER_DATA_LOADER":
      return {
        ...state,
        userDataLoader: true
      };
    case "DELETE_USER_DATA":
      return {
        userDataLoader: true,
        loader: false,
        loginStatus: false,
        phoneNumber: "",
        code: "",
        codeStatus: false,
        otpStatus: false,
        userid: "",
        basketid: "",
        basketloader: true,
        userName: "",
        popup: false,
        userNameAvatar: "",
        userImage: null,
        closePopUp: false,
        address: "",
        gender: "",
        profilePicId: null,
        birthDayDateTime: null,
        name: "",
        family: "",
        profileUser: {}
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
        userNameAvatar: `${action.payload.user.name} ${action.payload.user.family}`,
        profileUser: action.user.profilePic,
        gender: action.payload.user.gender
        // address: action.payload.address,
      };
    case "DATA_USERLOADER_FALSE":
      return {
        ...state,
        userDataLoader: false
      };
    case "BASKET_LOADER_FALSE":
      return {
        ...state,
        basketloader: false
      };
    case "USER_DATA":
      return {
        ...state,
        loginStatus: true,
        userDataLoader: false,
        phoneNumber: action.user.user.phoneNumber,
        userid: action.user.user.id,
        userNameAvatar: `${action.user.user.name} ${action.user.user.family}`,
        address: "",
        gender: action.user.user.gender,
        userImage: action.user.user.profilePicId,
        birthDayDateTime: action.user.user.birthDayDateTime,
        name: action.user.user.name,
        family: action.user.user.family,
        profileUser: action.user.profilePic
      };
    case "BASKET_ID":
      return {
        ...state,
        basketid: action.data,
        userDataLoader: false,
        basketloader: false,
        loginStatus: true
      };
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
