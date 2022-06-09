import * as ACTION_TYPES from "../../constants/action-types";

const initialState = {
  categories: [],
  categoryTotal: 0,
  success: true,
  msg: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.GET_LIST_OF_CATEGORIES_SUCCEEDED:
      return {
        ...state,
        categories: action?.payload?.data?.categoryList ?? [],
        categoryTotal: action?.payload?.data?.categoryTotal ?? 0,
        success: true,
        msg: "Có " + action?.payload?.data?.categoryTotal + " bản ghi",
      };
    case ACTION_TYPES.GET_LIST_OF_CATEGORIES_FAILED:
      return {
        ...state,
        categories: [],
        categoryTotal: 0,
        success: false,
        msg: action?.payload?.error + " - " + action?.payload?.message,
      };

    case ACTION_TYPES.ADD_CATEGORY_SUCCEEDED:
      console.log(action);
      return {
        ...state,
        success: true,
        msg: action?.payload?.msg,
      };
    case ACTION_TYPES.ADD_CATEGORY_FAILED:
      return {
        ...state,
        success: false,
        msg: action?.payload?.msg,
      };

    case ACTION_TYPES.DELETE_CATEGORY_SUCCEEDED:
      return {
        ...state,
        success: true,
        msg: action?.payload?.msg,
      };
    case ACTION_TYPES.DELETE_CATEGORY_FAILED:
      return {
        ...state,
        success: false,
        msg: action?.payload?.msg,
      };
    default:
      return state;
  }
};
export default reducer;
