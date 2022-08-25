import * as ACTION_TYPES from "../../constants/action-types";

const initialState = {
  success: true,
  msg: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.GET_LIST_OF_MODELTYPEINFO_SUCCEEDED:
      return {
        ...state,
        success: true,
        msg: "Có " + action?.payload?.data?.categoryTotal + " bản ghi",
      };
    case ACTION_TYPES.GET_LIST_OF_MODELTYPEINFO_FAILED:
      return {
        ...state,
        success: false,
        msg: action?.payload?.error + " - " + action?.payload?.message,
      };

    case ACTION_TYPES.READ_CATEGORY_SUCCEEDED:
      return {
        ...state,
        success: action?.payload?.success,
        msg: action?.payload?.msg,
      };
    case ACTION_TYPES.READ_MODELTYPEINFO_FAILED:
      return {
        ...state,
        success: action?.payload?.success,
        msg: action?.payload?.msg,
      };

    case ACTION_TYPES.ADD_MODELTYPEINFO_SUCCEEDED:
      return {
        ...state,
        success: action?.payload?.success,
        msg: action?.payload?.msg,
      };
    case ACTION_TYPES.ADD_MODELTYPEINFO_FAILED:
      return {
        ...state,
        success: action?.payload?.success,
        msg: action?.payload?.msg,
      };

    case ACTION_TYPES.UPDATE_MODELTYPEINFO_SUCCEEDED:
      return {
        ...state,
        success: action?.payload?.success,
        msg: action?.payload?.msg,
      };
    case ACTION_TYPES.UPDATE_MODELTYPEINFO_FAILED:
      return {
        ...state,
        success: action?.payload?.success,
        msg: action?.payload?.msg,
      };

    case ACTION_TYPES.DELETE_MODELTYPEINFO_SUCCEEDED:
      return {
        ...state,
        success: action?.payload?.success,
        msg: action?.payload?.msg,
      };
    case ACTION_TYPES.DELETE_MODELTYPEINFO_FAILED:
      return {
        ...state,
        success: action?.payload?.success,
        msg: action?.payload?.msg,
      };

    default:
      return state;
  }
};
export default reducer;
