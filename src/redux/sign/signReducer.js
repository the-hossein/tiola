const initializedState = {
  phoneNumber: "",
  code: ""
};
const signReducer = (state = initializedState, action) => {
  switch (action.type) {
    case "GETPHONE":
      return { ...state, phoneNumber: action.num };
    case "GETCODE":
      return {
        ...state,
        code: action.code
      };
    default:
      return state;
  }
};

export default signReducer;
