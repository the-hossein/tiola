const initializedState = {
  writeCm: false,
  allComment: [],
  preLoad: true
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
    case 'load': 
      return{
        ...state,
        preLoad: true,
      }
    case "SHOW_COMMENT": 
      return {
        ...state,
        allComment: action.payload,
        preLoad:false
      }
    default:
      return state;
  }
};

export default commentReducer;
