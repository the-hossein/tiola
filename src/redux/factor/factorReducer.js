const initializedState = {
  addres: ""
};
const factorReducer = (state = initializedState, action) => {
  switch (action.type) {
    case "GET_ADDRES":
      return { ...state, addres: action.addres };
case "CHECKED_ADDRES":
    return{
        ...state,check:action.check
    }
    default:
      return state;
  }
};

export default factorReducer;
