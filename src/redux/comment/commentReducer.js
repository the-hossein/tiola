const initializedState = {
  writeCm: false
};
const commentReducer = (state = initializedState, action) => {
  switch (action.type) {
    case "WRITECM_TRUE":
      return {...state,
        writeCm: true
      };
    case "WRITECM_FALSE":
      return {...state,
        writeCm: false
      };
    default:
      return state;
  }
};

export default commentReducer;
