const initialState = {
  preload: false,
  list: []
};

const saveItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return {
        preload: false,
        list: action.payload
      };
    case "REMOVE_PRODUCT":
      return {
        ...state,
        preload: true
      };
    case "PRELOAD_WATCHLIST_TRUE":
      return {
        ...state,
        preload: true
      };
    default:
      return state;
  }
};

export default saveItemReducer;
