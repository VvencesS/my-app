import * as ACTION_TYPES from "../../../constants/action-types";

export const login = async (data) => ({
  types: [
    ACTION_TYPES.USER_LOGIN_REQUESTED,
    ACTION_TYPES.USER_LOGIN_SUCCEEDED,
    ACTION_TYPES.USER_LOGIN_FAILED,
  ],
  payload: {
    request: {
      method: "POST",
      url: "/api/login",
      data: data,
    },
  },
});

export const logout = () => ({
  type: ACTION_TYPES.USER_LOGOUT,
});
