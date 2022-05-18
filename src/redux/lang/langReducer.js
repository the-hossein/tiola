import React from "react";
const initializedState = {
  loading: true,
  lng: "fa"
};
const langReducer = (state = initializedState, action) => {
  switch (action.type) {
    case "CHANGE_LANG":
      return {
        loading: false,
        lng: action.payload
      };

    default:
      return state;
  }
};

export default langReducer;
