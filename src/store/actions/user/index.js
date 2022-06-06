import * as ACTION_TYPES from "../../../constants/action-types";

export const userInfoRetrieve = async () => {
  const authToken = await localStorage.getItem("accessToken");

  return {
    types: [
      ACTION_TYPES.USER_INFO_RETRIEVE_REQUESTED,
      ACTION_TYPES.USER_INFO_RETRIEVE_SUCCEEDED,
      ACTION_TYPES.USER_INFO_RETRIEVE_FAILED,
    ],
    payload: {
      request: {
        method: "GET",
        url: `/api/user/publicInfo`,
        headers: {
          Authorization: "Bearer " + authToken,
        },
      },
    },
  };
};
