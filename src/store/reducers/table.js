import * as actionTypes from "../../constants/action-types";

const initialState = {
  page: 0,
  rowsPerPage: 10,
  searchVal: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_PAGE_SUCCEEDED:
      return {
        ...state,
        page: action.payload.data ?? 0,
      };
    case actionTypes.SET_ROWS_PER_PAGE_SUCCEEDED:
      return {
        ...state,
        rowsPerPage: action.payload.data ?? 10,
      };
    case actionTypes.SET_SEARCH_VAL_SUCCEEDED:
      return {
        ...state,
        searchVal: action.payload.data ?? "",
      };
    default:
      return state;
  }
};

export default reducer;
