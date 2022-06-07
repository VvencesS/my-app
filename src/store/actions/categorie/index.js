import * as ACTION_TYPES from "../../../constants/action-types";

export const getListOfCategories = async () => {
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
        url: `/api/category`,
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
