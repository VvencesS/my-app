import * as ACTION_TYPES from "../../../constants/action-types";

export const getListOfModalTypeParam = async (
  max = 1000,
  offset = 0,
  order = "asc",
  query = "",
  sort = "id"
) => {
  const authToken = await localStorage.getItem("accessToken");
  return {
    types: [
      ACTION_TYPES.GET_LIST_OF_MODELTYPEPARAM_REQUESTED,
      ACTION_TYPES.GET_LIST_OF_MODELTYPEPARAM_SUCCEEDED,
      ACTION_TYPES.GET_LIST_OF_MODELTYPEPARAM_FAILED,
    ],
    payload: {
      request: {
        method: "GET",
        url: `/api/modelTypeInfo/modelTypeParam?max=${max}&offset=${offset}&order=asc&query=${query}&sort=${sort}`,
        headers: {
          Authorization: "Bearer " + authToken,
        },
      },
    },
  };
};
