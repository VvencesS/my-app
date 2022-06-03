import actionTypes from "./types";

const getInfoUserLoading = () => ({
  type: actionTypes.GETINFO_LOADING,
});

const getInfoUserSuccess = (data) => ({
  type: actionTypes.GETINFO_SUCCESS,
  payload: data,
});

const getInfoUserFail = (error) => ({
  type: actionTypes.GETINFO_FAIL,
  payload: error,
});

export default {
  getInfoUserLoading,
  getInfoUserSuccess,
  getInfoUserFail,
};
