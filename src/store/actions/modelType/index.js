import * as ACTION_TYPES from "../../../constants/action-types";

export const getListOfModalType = async (
  max = 15,
  offset = 0,
  order = "desc",
  query = "",
  sort = ""
) => {
  const authToken = await localStorage.getItem("accessToken");
  return {
    types: [
      ACTION_TYPES.GET_LIST_OF_MODELTYPE_REQUESTED,
      ACTION_TYPES.GET_LIST_OF_MODELTYPE_SUCCEEDED,
      ACTION_TYPES.GET_LIST_OF_MODELTYPE_FAILED,
    ],
    payload: {
      request: {
        method: "GET",
        url: `/api/modelTypeInfo/modelType?max=${max}&offset=${offset}&query=${query}&sort=${sort}`,
        headers: {
          Authorization: "Bearer " + authToken,
        },
      },
    },
  };
};
