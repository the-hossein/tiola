const initializedState = {
    loading:true,
  data: []
};
const productReducer = (state = initializedState, action) => {
  switch (action.type) {
    case "FETCH_DATA_SUCCSESFUL":
      return { ...state, data: action.data ,loading:false};

    default:
      return state;
  }
};

export default productReducer;
