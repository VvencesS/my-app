import * as ACTION_TYPES from "../../../constants/action-types";

export const setPage = async (data) => {
  return {
    type: ACTION_TYPES.SET_PAGE_SUCCEEDED,
    payload: {
      data,
    },
  };
};

export const setRowsPerPage = async (data) => {
  return {
    type: ACTION_TYPES.SET_ROWS_PER_PAGE_SUCCEEDED,
    payload: {
      data,
    },
  };
};

export const setSearchVal = async (data) => {
  return {
    type: ACTION_TYPES.SET_SEARCH_VAL_SUCCEEDED,
    payload: {
      data,
    },
  };
};
