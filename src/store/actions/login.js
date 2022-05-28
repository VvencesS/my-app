import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from "./types";

export const login = (data) => {
  return {
    type: LOGIN_SUCCESS,
    payload: data,
  };
  // return LoginService.login(data).then(
  //   (results) => {
  //     dispatch({
  //       type: LOGIN_SUCCESS,
  //       payload: { results: results },
  //     });
  //     return Promise.resolve();
  //   },
  //   (error) => {
  //     const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
  //     dispatch({
  //       type: LOGIN_FAIL,
  //       payload: message,
  //     });
  //     return Promise.reject();
  //   }
  // );
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};
