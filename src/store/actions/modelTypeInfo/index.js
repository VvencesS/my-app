import * as ACTION_TYPES from "../../../constants/action-types";

export const getListOfModelTypeInfo = async (
  max = 10,
  offset = 0,
  query = ""
) => {
  const authToken = await localStorage.getItem("accessToken");
  return {
    types: [
      ACTION_TYPES.GET_LIST_OF_MODELTYPEINFO_REQUESTED,
      ACTION_TYPES.GET_LIST_OF_MODELTYPEINFO_SUCCEEDED,
      ACTION_TYPES.GET_LIST_OF_MODELTYPEINFO_FAILED,
    ],
    payload: {
      request: {
        method: "GET",
        url: `/api/modelTypeInfo?max=${max}&offset=${offset}&query=${query}`,
        headers: {
          Authorization: "Bearer " + authToken,
        },
      },
    },
  };
};

export const readModelTypeInfo = async (id) => {
  const authToken = await localStorage.getItem("accessToken");

  return {
    types: [
      ACTION_TYPES.READ_MODELTYPEINFO_REQUESTED,
      ACTION_TYPES.READ_MODELTYPEINFO_SUCCEEDED,
      ACTION_TYPES.READ_MODELTYPEINFO_FAILED,
    ],
    payload: {
      request: {
        method: "GET",
        url: `/api/modelTypeInfo/${id}`,
        data: { id },
        headers: {
          Authorization: "Bearer " + authToken,
        },
      },
    },
  };
};

export const addModelTypeInfo = async (data) => {
  const authToken = await localStorage.getItem("accessToken");

  return {
    types: [
      ACTION_TYPES.ADD_MODELTYPEINFO_REQUESTED,
      ACTION_TYPES.ADD_MODELTYPEINFO_SUCCEEDED,
      ACTION_TYPES.ADD_MODELTYPEINFO_FAILED,
    ],
    payload: {
      request: {
        method: "POST",
        url: `/api/modelTypeInfo`,
        data: data,
        headers: {
          Authorization: "Bearer " + authToken,
        },
      },
    },
  };
};

export const updateModelTypeInfo = async (data) => {
  const authToken = await localStorage.getItem("accessToken");

  return {
    types: [
      ACTION_TYPES.UPDATE_MODELTYPEINFO_REQUESTED,
      ACTION_TYPES.UPDATE_MODELTYPEINFO_SUCCEEDED,
      ACTION_TYPES.UPDATE_MODELTYPEINFO_FAILED,
    ],
    payload: {
      request: {
        method: "PUT",
        url: `/api/modelTypeInfo/${data?.id}`,
        data: data,
        headers: {
          Authorization: "Bearer " + authToken,
        },
      },
    },
  };
};

export const deleteModelTypeInfo = async (id) => {
  const authToken = await localStorage.getItem("accessToken");

  return {
    types: [
      ACTION_TYPES.DELETE_MODELTYPEINFO_REQUESTED,
      ACTION_TYPES.DELETE_MODELTYPEINFO_SUCCEEDED,
      ACTION_TYPES.DELETE_MODELTYPEINFO_FAILED,
    ],
    payload: {
      request: {
        method: "DELETE",
        url: `/api/modelTypeInfo/${id}`,
        headers: {
          Authorization: "Bearer " + authToken,
        },
      },
    },
  };
};
