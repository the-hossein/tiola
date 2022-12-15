const initializedState = {
  factor1: 5,
  factor2: 5,
  factor3: 5, 
  resolve: 0,
};
const rateReducer = (state = initializedState, action) => {
  switch (action.type) {
    case "CHANGE_RATE":
      return { ...state, [action.name]: action.rate,  };
    case "RESER_RATE":
      return {
        factor1: 5,
        factor2: 5,
        factor3: 5,
      };
    default:
      return state;
  }
};

export default rateReducer;
