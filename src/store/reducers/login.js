import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from "../actions/types";

const userInfo = JSON.parse(localStorage.getItem("userInfo"));
const initialState = userInfo
  ? { isLoggedIn: true, userInfo }
  : { isLoggedIn: false, userInfo: null };

const loginReducers = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        userInfo: {
          username: payload.username,
          roles: payload.roles,
          access_token: payload.access_token,
        },
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        userInfo: null,
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        userInfo: null,
      };
    default:
      return state;
  }
};

export default loginReducers;
