import actionTypes from "../actions/types";

const userInfo = JSON.parse(localStorage.getItem("userInfo"));
const initialState = userInfo
  ? { isLoggedIn: true, isLoading: false, error: null, userInfo }
  : { isLoggedIn: false, isLoading: false, error: null, userInfo: null };

const loginReducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.LOGIN_LOADING:
      return {
        ...state,
        isLoading: true,
        isLoggedIn: false,
        error: null,
      };
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: true,
        userInfo: {
          username: payload.username,
          roles: payload.roles,
          access_token: payload.access_token,
        },
        error: null,
      };
    case actionTypes.LOGIN_FAIL:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: false,
        error: payload,
      };

    case actionTypes.LOGOUT_LOADING:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case actionTypes.LOGOUT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: false,
        userInfo: null,
        error: null,
      };
    case actionTypes.LOGOUT_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };

    default:
      return state;
  }
};

export default loginReducers;
