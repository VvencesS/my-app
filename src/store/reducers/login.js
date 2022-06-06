import * as actionTypes from "../../constants/action-types";

const initialState = {
  accessToken: localStorage.getItem("accessToken"),
  isLoggedIn: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.USER_LOGIN_SUCCEEDED:
      localStorage.setItem(
        "accessToken",
        action.payload.data.access_token || ""
      );
      return {
        ...state,
        accessToken: action.payload.data.access_token || "",
        isLoggedIn: true,
      };

    case actionTypes.USER_LOGOUT:
      localStorage.removeItem("accessToken");
      localStorage.removeItem("specializedBank");
      return {
        ...state,
        accessToken: "",
        isLoggedIn: false,
      };
    case actionTypes.USER_INFO_RETRIEVE_FAILED:
      localStorage.removeItem("accessToken");
      return {
        ...state,
        accessToken: "",
        isLoggedIn: false,
      };
    default:
      return state;
  }
};

export default reducer;
