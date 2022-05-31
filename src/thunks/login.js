import LoginService from "../services/login.service";
import actions from "../store/actions/login";

export const loginAsync = (data) => (dispatch) => {
  dispatch(actions.loginLoading());

  LoginService.loginAxios(data)
    .then((response) => {
      if (response.data.access_token) {
        localStorage.setItem(
          "userInfo",
          JSON.stringify({
            username: response.data.username,
            roles: response.data.roles,
            access_token: response.data.access_token,
          })
        );
      }
      dispatch(actions.loginSuccess(response.data));
    })
    .catch((error) => {
      console.log("error: ", error);
      dispatch(actions.loginFail(error));
    });
};

export const logout = () => async (dispatch) => {
  dispatch(actions.logoutLoading());
  await LoginService.logout();
  const userInfo = await JSON.parse(localStorage.getItem("userInfo"));
  if (userInfo) {
    await dispatch(
      actions.logoutFail(
        new Error({
          name: "Lỗi logout",
          message: "Có lỗi xảy ra!",
        })
      )
    );
  } else {
    await dispatch(actions.logoutSuccess());
  }
};
