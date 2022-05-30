const initializedState = {
  addres: "",
  id:""
};
const factorReducer = (state = initializedState, action) => {
  switch (action.type) {
    case "GET_ADDRES":
      return { ...state, addres: action.addres };
    case "CHECKED_ADDRES":
      return {
        ...state,
        check: action.check
      };
    case "BASKET_ID":
      return {
        ...state,
        id:action.data.id
      };
    default:
      return state;
  }
};

export default factorReducer;
