import actionTypes from "./types";

const loginLoading = () => ({
  type: actionTypes.LOGIN_LOADING,
});

const loginSuccess = (data) => ({
  type: actionTypes.LOGIN_SUCCESS,
  payload: data,
});

const loginFail = (error) => ({
  type: actionTypes.LOGIN_FAIL,
  payload: error,
});

const logoutLoading = () => ({
  type: actionTypes.LOGOUT_LOADING,
});

const logoutSuccess = () => ({
  type: actionTypes.LOGOUT_SUCCESS,
});

const logoutFail = (error) => ({
  type: actionTypes.LOGOUT_FAIL,
  payload: error,
});


export default {
  loginLoading,
  loginSuccess,
  loginFail,

  logoutLoading,
  logoutSuccess,
  logoutFail,
};
