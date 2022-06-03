import UserService from "../services/user.service";
import actions from "../store/actions/user";

export const getUserInfo = () => (dispatch) => {
  dispatch(actions.getInfoUserLoading());

  UserService.getPublicInfo()
    .then((response) => {
      dispatch(actions.getInfoUserSuccess(response.data));
    })
    .catch((error) => {
      console.log("error: ", error);
      dispatch(actions.getInfoUserFail(error));
    });
};
