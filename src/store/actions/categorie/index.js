import * as ACTION_TYPES from "../../../constants/action-types";

export const getListOfCategories = async (max = 10, offset = 0, query = "") => {
  const authToken = await localStorage.getItem("accessToken");
  return {
    types: [
      ACTION_TYPES.GET_LIST_OF_CATEGORIES_REQUESTED,
      ACTION_TYPES.GET_LIST_OF_CATEGORIES_SUCCEEDED,
      ACTION_TYPES.GET_LIST_OF_CATEGORIES_FAILED,
    ],
    payload: {
      request: {
        method: "GET",
        url: `/api/category?max=${max}&offset=${offset}&query=${query ?? ""}`,
        headers: {
          Authorization: "Bearer " + authToken,
        },
      },
    },
  };
};

export const readCategory = async (id) => {
  const authToken = await localStorage.getItem("accessToken");

  return {
    types: [
      ACTION_TYPES.READ_CATEGORY_REQUESTED,
      ACTION_TYPES.READ_CATEGORY_SUCCEEDED,
      ACTION_TYPES.READ_CATEGORY_FAILED,
    ],
    payload: {
      request: {
        method: "GET",
        url: `/api/category/${id}`,
        data: { id },
        headers: {
          Authorization: "Bearer " + authToken,
        },
      },
    },
  };
};

export const addCategory = async (code, name, description, status) => {
  const authToken = await localStorage.getItem("accessToken");

  return {
    types: [
      ACTION_TYPES.ADD_CATEGORY_REQUESTED,
      ACTION_TYPES.ADD_CATEGORY_SUCCEEDED,
      ACTION_TYPES.ADD_CATEGORY_FAILED,
    ],
    payload: {
      request: {
        method: "POST",
        url: `/api/category`,
        data: { code, name, description, status },
        headers: {
          Authorization: "Bearer " + authToken,
        },
      },
    },
  };
};

export const updateCategory = async (id, code, name, description, status) => {
  const authToken = await localStorage.getItem("accessToken");

  return {
    types: [
      ACTION_TYPES.UPDATE_CATEGORY_REQUESTED,
      ACTION_TYPES.UPDATE_CATEGORY_SUCCEEDED,
      ACTION_TYPES.UPDATE_CATEGORY_FAILED,
    ],
    payload: {
      request: {
        method: "PUT",
        url: `/api/category/${id}`,
        data: { id, code, name, description, status },
        headers: {
          Authorization: "Bearer " + authToken,
        },
      },
    },
  };
};

export const deleteCategory = async (categoryId) => {
  const authToken = await localStorage.getItem("accessToken");

  return {
    types: [
      ACTION_TYPES.DELETE_CATEGORY_REQUESTED,
      ACTION_TYPES.DELETE_CATEGORY_SUCCEEDED,
      ACTION_TYPES.DELETE_CATEGORY_FAILED,
    ],
    payload: {
      request: {
        method: "DELETE",
        url: `/api/category/${categoryId}`,
        headers: {
          Authorization: "Bearer " + authToken,
        },
      },
    },
  };
};
